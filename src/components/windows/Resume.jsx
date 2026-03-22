import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = () => {
  return (
    <MacWindow w="600" h="600">
        <div className="resume">
            <iframe src="resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>    
  )
}

export default Resume
