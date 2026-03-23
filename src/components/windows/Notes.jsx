import React, { useEffect,useState} from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import "./Notes.scss"
const Notes = ({windowName,display,setDisplay, bringToFront}) => {
 
  const [text, setText] = useState(null)
    useEffect(()=>{
    fetch("/note.txt").then((res)=>{
        return res.text()
    }).then((data)=>{
        setText(data)
    })
},[])

  return (
    <MacWindow windowName={windowName} display={display} setDisplay={setDisplay} bringToFront={bringToFront} w={window.innerWidth<600 ? window.innerWidth*0.9 : 600} h="410">
    <div className='main-content-notes'>
        <Markdown>{text}</Markdown>
    </div>
    </MacWindow >        
  )
}

export default Notes 
