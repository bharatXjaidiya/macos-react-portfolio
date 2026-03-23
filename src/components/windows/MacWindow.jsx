import React, { useState ,useEffect, memo, useCallback } from 'react'
import "./Window.scss"
import { Rnd } from 'react-rnd'
const MacWindow = memo(({windowName,display,setDisplay,h,w,children}) => {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    
   
const handleDrag = useCallback((d) => {
    setX(d.x < 0 ? 0 : d.x > window.innerWidth-(w/4) ? window.innerWidth-(w/4) : d.x)
    setY(d.y < 30 ? 30 : d.y > window.innerHeight-(h/2) ? window.innerHeight-(h/2) : d.y)
}, [w, h])

const handleResize = useCallback((e, direction, ref, delta, position) => {
    // Update position if resize causes boundary crossing
    let newX = position.x;
    let newY = position.y;

    // Prevent resizing beyond viewport bounds
    if (newX < 0) newX = 0;
    if (newY < 30) newY = 30;

    const maxX = window.innerWidth - ref.offsetWidth;
    const maxY = window.innerHeight - ref.offsetHeight;

    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    setX(newX);
    setY(newY);
}, [])

    return (
        <Rnd
            position={{x,y}}
            onDragStop={(e,d)=>{handleDrag(d)}}
            onResizeStop={(e, direction, ref, delta, position) => {handleResize(e, direction, ref, delta, position)}}
            className='rnd'
            default={{width:w, height:h}}
            minWidth={300}
            minHeight={200}
        >
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
})

export default MacWindow
