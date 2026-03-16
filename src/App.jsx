import { useEffect, useState } from "react"
import "./app.scss"
import Docs from "./components/docs"
import Navbar from "./components/Navbar"
import MacWindow from "./components/windows/MacWindow"

const App = () => {

  return (
    <main>
      <Navbar />
      <Docs />
      <MacWindow>
        <h1>hello</h1>
      </MacWindow>
    </main>
  )
}

export default App