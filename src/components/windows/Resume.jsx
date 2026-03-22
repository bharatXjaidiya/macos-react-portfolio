import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = ({windowName,display,setDisplay}) => {
  return (
    <MacWindow windowName={windowName} display={display} setDisplay={setDisplay} w="600" h="600">
        <div className="resume">
            <iframe src="resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>    
  )
}

export default Resume
