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
  github : false,
  notes : false,
  spotify: false,
  resume : false,
  cli:false
})
  return (
    <main>
      <Navbar  />
      <Docs display={display} setDisplay={setDisplay} />
{display.github && (
  <Suspense fallback={<div>Loading...</div>}>
    <Github windowName="github" display={display} setDisplay={setDisplay} />
  </Suspense>
)}
{display.notes && (
  <Suspense fallback={<div>Loading...</div>}>
    <Notes windowName="notes" display={display} setDisplay={setDisplay} />
  </Suspense>
)}
{display.spotify && (
  <Suspense fallback={<div>Loading...</div>}>
    <Spotify windowName="spotify" display={display} setDisplay={setDisplay} />
  </Suspense>
)}
{display.resume && (
  <Suspense fallback={<div>Loading...</div>}>
    <Resume windowName="resume" display={display} setDisplay={setDisplay} />
  </Suspense>
)}
{display.cli && (
  <Suspense fallback={<div>Loading...</div>}>
    <Cli windowName="cli" display={display} setDisplay={setDisplay} />
  </Suspense>
)}

    </main>
  )
}

export default App