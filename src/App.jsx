import { useEffect, useState } from "react"
import { lazy, Suspense } from 'react'
import "./app.scss"
import Docs from "./components/docs"
import Navbar from "./components/Navbar"
const Github = lazy(() => import("./components/windows/Github"))
const Notes = lazy(() => import("./components/windows/Notes"))
const Spotify = lazy(() => import("./components/windows/Spotify"))
const Resume = lazy(() => import("./components/windows/Resume"))
const Cli = lazy(() => import("./components/windows/Cli"))

const App = () => {
  const [display, setDisplay] = useState({
    github: false,
    notes: false,
    spotify: false,
    resume: false,
    cli: false
  })
  return (
    <main>
      <Navbar />
      <Docs display={display} setDisplay={setDisplay} />

      <Suspense fallback={<div className="loader"><div className="spinner"></div></div>}>
        {display.github && <Github windowName="github" display={display} setDisplay={setDisplay} />}
        {display.notes && <Notes windowName="notes" display={display} setDisplay={setDisplay} />}
        {display.spotify && <Spotify windowName="spotify" display={display} setDisplay={setDisplay} />}
        {display.resume && <Resume windowName="resume" display={display} setDisplay={setDisplay} />}
        {display.cli && <Cli windowName="cli" display={display} setDisplay={setDisplay} />}
      </Suspense>

    </main>
  )
}

export default App