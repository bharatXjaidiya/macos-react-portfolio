import React from 'react'
import "./Docs.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({display,setDisplay}) => {
    return (
        <footer className='dock' >
            <div onClick={() => {setDisplay({ ...display, github: true })}}
                className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
            <div onClick={() => {display.notes ? setDisplay({ ...display, notes: false }) : setDisplay({ ...display, notes: true })}}
                className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div onClick={() => {display.resume ? setDisplay({ ...display, resume: false }) : setDisplay({ ...display, resume: true })}}
                className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div onClick={() => {setDisplay({ ...display, github: true })}}
                className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
            <div onClick={() => {setDisplay({ ...display, spotify: true })}}
                className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div onClick={() => {setDisplay({ ...display, github: true })}}
                className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
            <div onClick={() => {setDisplay({ ...display, github: true })}}
                className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>
            <div onClick={() => {setDisplay({ ...display, cli: true })}}
                className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    ) 
}

export default Dock