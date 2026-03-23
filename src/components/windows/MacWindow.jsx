import React, { useState } from 'react'
import "./Window.scss"
import { Rnd } from 'react-rnd'
const MacWindow = ({windowName,display,setDisplay,h,w,children}) => {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [z,setZ] = useState(1);
function handleDrag(d){
    setX(d.x)
    setY(d.y)
    if(d.x<0){
        setX(0)
    }
    if(d.y<30){
        setY(30)
    }
    if(d.x>window.innerWidth-(w/4)){
        setX(window.innerWidth-(w/4))
    }
    if(d.y>window.innerHeight-(h/2)){
        setY(window.innerHeight-(h/2))  
    }
}
    return (
        <Rnd  style={{ zIndex: z }} position={{x,y}} onDragStop={(e,d)=>{handleDrag(d)}} onMouseDown={()=>{setZ((prev)=>{prev+1})}}  className='rnd' default={{
 
    width:w, 
    height:h,
  }}>
            <div className="window">
                <div className="window-nav">
                    <div onTouchStart={()=>{setDisplay({...display,[windowName]:false})}} onClick={()=>{setDisplay({...display,[windowName]:false})}} className="dot red"></div>
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
