import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = ({windowName,display,setDisplay, bringToFront}) => {
  return (
    <MacWindow windowName={windowName} display={display} setDisplay={setDisplay} bringToFront={bringToFront} w={window.innerWidth<600 ? window.innerWidth*0.9 : 600} h="600">
        <div className="resume">
            <iframe src="resume.pdf" frameborder="0" loading="lazy"></iframe>
        </div>
    </MacWindow>    
  )
}

export default Resume
