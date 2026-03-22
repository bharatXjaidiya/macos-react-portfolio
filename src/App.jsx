import { useEffect, useState } from "react"
import "./app.scss"
import Docs from "./components/docs"
import Navbar from "./components/Navbar"
import MacWindow from "./components/windows/MacWindow"
import Github from "./components/windows/Github"
import Notes from "./components/windows/Notes"
import Spotify from "./components/windows/Spotify"

const App = () => {

  return (
    <main>
      <Navbar />
      <Docs />
      {/* <Github/> */}
      {/* <Notes/> */}
      <Spotify/>
    </main>
  )
}

export default App