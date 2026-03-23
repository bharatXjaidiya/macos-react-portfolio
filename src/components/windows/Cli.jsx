import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow';
import "./Cli.scss"

const Cli = ({windowName,display,setDisplay, bringToFront}) => {
    const welcomeText = `
╔═════════════════════════════════════════╗
║Welcome to Bharat Jaidiya's Portfolio CLI║
╚═════════════════════════════════════════╝

Type 'help' to see all available commands.

    `;

    const commands = {
  about: {
    description: 'Information about the developer',
    usage: 'about',
    fn: () => 'I\'m a full-stack developer passionate about building amazing web experiences with React, JavaScript, and modern web technologies.'
  },
  skills: {
    description: 'View skills and technologies',
    usage: 'skills',
    fn: () => 'React | JavaScript | SASS | HTML | CSS | Node.js | Git | Firebase | MongoDB | REST APIs | UI/UX Design'
  },
  projects: {
    description: 'View featured projects',
    usage: 'projects',
    fn: () => 'MacOS Portfolio | E-Commerce Platform | Task Manager App | Weather Dashboard | Chat Application'
  },
  experience: {
    description: 'View work experience',
    usage: 'experience',
    fn: () => 'Frontend Developer at Tech Startup (2023-Present) | Web Developer Intern at Design Studio (2022-2023)'
  },
  contact: {
    description: 'Get contact information',
    usage: 'contact',
    fn: () => 'Email: bharat@example.com | GitHub: github.com/bharat | LinkedIn: linkedin.com/in/bharat'
  },
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}
  return (
    <MacWindow  windowName={windowName} display={display} setDisplay={setDisplay} bringToFront={bringToFront} w={window.innerWidth<600?window.innerWidth*0.9:600} h="300">
      <div className='cli-window'>
      <Terminal
        commands={commands}
        welcomeMessage={welcomeText}
        promptLabel={'bharatjaidiya:~$'}
      />
      </div>
    </MacWindow>    
  )
}

export default Cli
