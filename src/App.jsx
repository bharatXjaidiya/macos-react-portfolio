import { useEffect, useState } from "react"
import { lazy, Suspense } from 'react'
import "./app.scss"
import Docs from "./components/Docs"
import Navbar from "./components/Navbar"
const Github = lazy(() => import("./components/windows/Github"))
const Notes = lazy(() => import("./components/windows/Notes"))
const Spotify = lazy(() => import("./components/windows/Spotify"))
const Resume = lazy(() => import("./components/windows/Resume"))
const Cli = lazy(() => import("./components/windows/Cli"))
const wallpapers = ["mw1.jpg", "mw2.jpg", "mw3.jpg", "mw4.jpg", "mw5.jpg" , "mw6.jpg", "mw7.jpg"]

const App = () => {
  const [display, setDisplay] = useState({
    github: false,
    notes: false,
    spotify: false,
    resume: false,
    cli: false
  })

  const [globalZIndex, setGlobalZIndex] = useState(10) // Start at 10 to avoid conflicts
  const [showChangeWallpaper, SetShowChangeWallpaper] = useState({
    show: false,
    x: 0,   y: 0
  })
  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0])
  const [lastTouchTime, setLastTouchTime] = useState(0);
  

  const bringToFront = () => {
    setGlobalZIndex(prev => prev + 1)
    return globalZIndex + 1
  }

  const showContextMenu = (x, y) => {
    const menuWidth = 180
    const menuHeight = 80
    const safeX = Math.min(x, window.innerWidth - menuWidth)
    const safeY = Math.min(y, window.innerHeight - menuHeight)

    SetShowChangeWallpaper({
      show: true,
      x: safeX,
      y: safeY
    })
  }

  const handleContext = (e) => {
    e.preventDefault()
    showContextMenu(e.clientX, e.clientY);
    setTimeout(() => {
      SetShowChangeWallpaper(prev => ({ ...prev, show: false }))
    }, 2000);
  }

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return

    const now = Date.now()
    const DOUBLE_TAP_DELAY = 300

    if (now - lastTouchTime <= DOUBLE_TAP_DELAY) {
      
      const touch = e.touches[0]
      showContextMenu(touch.clientX, touch.clientY)
    }

    setLastTouchTime(now)
  }


  return(
    <main style={{ backgroundImage: `url(/${currentWallpaper})` }} onContextMenu={(e) => handleContext(e)} onTouchStart={(e) => handleTouchStart(e)}>

      <Navbar />
      <Docs display={display} setDisplay={setDisplay} />

      <Suspense fallback={<div className="loader"><div className="spinner"></div></div>}>
        {display.github && <Github windowName="github" display={display} setDisplay={setDisplay} bringToFront={bringToFront} />}
        {display.notes && <Notes windowName="notes" display={display} setDisplay={setDisplay} bringToFront={bringToFront} />}
        {display.spotify && <Spotify windowName="spotify" display={display} setDisplay={setDisplay} bringToFront={bringToFront} />}
        {display.resume && <Resume windowName="resume" display={display} setDisplay={setDisplay} bringToFront={bringToFront} />}
        {display.cli && <Cli windowName="cli" display={display} setDisplay={setDisplay} bringToFront={bringToFront} />}
      </Suspense>

      {showChangeWallpaper.show && (
        <div onClick={()=>{setCurrentWallpaper(currentWallpaper == wallpapers[wallpapers.length -1] ? wallpapers[0] : wallpapers[wallpapers.indexOf(currentWallpaper) + 1]); SetShowChangeWallpaper({...showChangeWallpaper, show: false})}}
          className="change-wallpaper"
          style={{
            left: `${showChangeWallpaper.x}px`,
            top: `${showChangeWallpaper.y}px`
          }}
        >
          change wallpaper
        </div>
      )}
    </main>
  )
}

export default App