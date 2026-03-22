import { useEffect, useState } from "react"

const Time = () => {
    const [time, setTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            const now = new Date()
            const day = now.toLocaleDateString('en-US', { weekday: 'short' })
            const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
            const hr = now.getHours()
            const min = now.getMinutes()
            const sec = now.getSeconds()
            const t = `${day} ${date} ${hr}:${min}:${sec}`

            setTime(t)

        }, 1000)



    }, [])
    return (
        <>
        {time}
        </>
    )
}

export default Time
