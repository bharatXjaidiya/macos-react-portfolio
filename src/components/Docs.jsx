import React from 'react'
import "./Docs.scss"

const Dock = ({display,setDisplay}) => {
    return (
        <footer className='dock' >
            <div onClick={() => {setDisplay(prev => ({ ...prev, github: true }))}}
                className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
            <div onClick={() => {setDisplay(prev => ({ ...prev, notes: !prev.notes }))}}
                className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div onClick={() => {setDisplay(prev => ({ ...prev, resume: !prev.resume }))}}
                className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div onClick={() => {window.open('https://calendar.google.com/calendar/r', '_blank')}}
                className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
            <div onClick={() => {setDisplay(prev => ({ ...prev, spotify: true }))}}
                className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div onClick={() => {window.open('mailto:jaidiyabharat16@gmail.com', '_blank')}}
                className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
            <div onClick={() => {window.open("https://www.linkedin.com/in/bharat-jaidiya-8b89b32ab/", '_blank')}}
                className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>
            <div onClick={() => {setDisplay(prev => ({ ...prev, cli: true }))}}
                className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    ) 
}

export default Dock