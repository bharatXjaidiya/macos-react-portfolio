import { useEffect, useState } from "react"
import "./app.scss"
import Docs from "./components/docs"
import Navbar from "./components/Navbar"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Notes"
import Spotify from "./components/windows/Spotify"
import Resume from "./components/windows/Resume"
import Cli from "./components/windows/Cli"

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
{display.github && <Github windowName="github" display={display} setDisplay={setDisplay} />}
{display.notes && <Notes windowName="notes" display={display} setDisplay={setDisplay} />}
{display.spotify && <Spotify windowName="spotify" display={display} setDisplay={setDisplay} />}
{display.resume && <Resume windowName="resume" display={display} setDisplay={setDisplay} />}
{display.cli && <Cli windowName="cli" display={display} setDisplay={setDisplay} />}

    </main>
  )
}

export default App