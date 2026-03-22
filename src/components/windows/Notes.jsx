import React, { useEffect,useState} from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import "./Notes.scss"
const Notes = () => {
  const [text, setText] = useState(null)
    useEffect(()=>{
    fetch("/note.txt").then((res)=>{
        return res.text()
    }).then((data)=>{
        setText(data)
    })
},[])

  return (
    <MacWindow w="600" h="410">
    <div className='main-content-notes'>
        <Markdown>{text}</Markdown>
    </div>
    </MacWindow>        
  )
}

export default Notes
