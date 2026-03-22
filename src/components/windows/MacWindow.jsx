import React from 'react'
import "./Window.scss"
import { Rnd } from 'react-rnd'
const MacWindow = ({windowName,display,setDisplay,h,w,children}) => {

    return (
        <Rnd className='rnd' default={{
    x: 100,
    y: 100,
    width:w, 
    height:h,
  }}>
            <div className="window">
                <div className="window-nav">
                    <div onClick={()=>{setDisplay({...display,[windowName]:false})}} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                    <p>bharatjaidiya-zsh</p>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
