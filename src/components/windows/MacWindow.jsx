import React, { useState, memo, useCallback, useEffect } from 'react'
import "./Window.scss"
import { Rnd } from 'react-rnd'

const MacWindow = memo(({ windowName, display, setDisplay, h, w, children, bringToFront }) => {
    // Position states
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [closing, setClosing] = useState(false);
    const [minmize, setMinimize] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [zIndex, setZIndex] = useState(10); // Start with base z-index

    // Drag handler with bounds checking
    const handleDrag = useCallback((d) => {
        setX(d.x < 0 ? 0 : d.x > window.innerWidth - (w / 4) ? window.innerWidth - (w / 4) : d.x)
        setY(d.y < 30 ? 37 : d.y > window.innerHeight - (h / 2) ? window.innerHeight - (h / 2) : d.y)
    }, [w, h])

    // Resize handler with bounds checking
    const handleResize = useCallback((e, direction, ref, delta, position) => {
        let newX = position.x;
        let newY = position.y;

        if (newX < 0) newX = 0;
        if (newY < 30) newY = 30;

        const maxX = window.innerWidth - ref.offsetWidth;
        const maxY = window.innerHeight - ref.offsetHeight;

        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        setX(newX);
        setY(newY);
    }, [])

    // Close handler with animation
    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            setDisplay({ ...display, [windowName]: false });
        }, 200); // match CSS duration
    };

    // minimize handler with animation
    const minimizeHandle =()=>{
        setMinimize(true);

        setTimeout(() => {
            setDisplay({ ...display, [windowName]: false });
        }, 300); // match CSS duration
    }


    // Fullscreen handler
    const handleFullScreen = () => {
        setX(0);
        window.innerWidth < 600 ? setY(50) : setY(24);
        setFullscreen(prev => !prev);
    }
    return (
        <Rnd
            position={{ x, y }}
            onDragStart={()=>{setFullscreen(false)}}
            onDragStop={(e, d) => {handleDrag(d)}}
            onResizeStop={handleResize}
            className={`rnd ${fullscreen ? "fullscreen" : ""}`}
            dragHandleClassName='window-nav'
            default={{ width: w, height: h }}
            minWidth={300}
            minHeight={200}
            style={{ zIndex: fullscreen ? 1000000 : zIndex }} // Ensure fullscreen is always on top
            onMouseDown={() => setZIndex(bringToFront())} // Bring to front on click
        >
            {/* dynamic class */}
            <div className={`window ${closing ? "closing" : ""} ${minmize ? "minimize" : ""}`}>
                <div className="window-nav">
                    <div
                        onTouchStart={handleClose}
                        onClick={handleClose}
                        className="dot red"
                    ></div>

                    <div
                        onTouchStart={minimizeHandle}
                        onClick={minimizeHandle}
                        className="dot yellow"></div>
                    <div
                    onTouchStart={handleFullScreen}
                    onClick={handleFullScreen}
                     className="dot green"></div>

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