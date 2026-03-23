import React, { useState, memo, useCallback } from 'react'
import "./Window.scss"
import { Rnd } from 'react-rnd'

const MacWindow = memo(({ windowName, display, setDisplay, h, w, children }) => {

    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [closing, setClosing] = useState(false); // ✅ FIXED (inside component)

    const handleDrag = useCallback((d) => {
        setX(d.x < 0 ? 0 : d.x > window.innerWidth - (w / 4) ? window.innerWidth - (w / 4) : d.x)
        setY(d.y < 30 ? 30 : d.y > window.innerHeight - (h / 2) ? window.innerHeight - (h / 2) : d.y)
    }, [w, h])

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

    // 🔥 Close handler with animation
    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            setDisplay({ ...display, [windowName]: false });
        }, 200); // match CSS duration
    };

    return (
        <Rnd
            position={{ x, y }}
            onDragStop={(e, d) => handleDrag(d)}
            onResizeStop={handleResize}
            className='rnd'
            default={{ width: w, height: h }}
            minWidth={300}
            minHeight={200}
        >
            {/* 🔥 dynamic class */}
            <div className={`window ${closing ? "closing" : ""}`}>
                <div className="window-nav">
                    <div
                        onTouchStart={handleClose}
                        onClick={handleClose}
                        className="dot red"
                    ></div>

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