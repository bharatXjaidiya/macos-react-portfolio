import { useEffect, useState } from "react"
import "./app.scss"
import Docs from "./components/docs"
import Navbar from "./components/Navbar"
import MacWindow from "./components/windows/MacWindow"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Notes"
import Spotify from "./components/windows/Spotify"
import Resume from "./components/windows/Resume"
import Cli from "./components/windows/Cli"

const App = () => {

  return (
    <main>
      <Navbar />
      <Docs />
      {/* <Github/> */}
      {/* <Notes/> */}
      {/* <Spotify/> */}
      {/* <Resume/> */}
      <Cli/>

    </main>
  )
}

export default App