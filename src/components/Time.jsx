import { useEffect, useState } from "react"

const Time = () => {
    const [time, setTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            const now = new Date()

            const hr = now.getHours()
            const min = now.getMinutes()
            const sec = now.getSeconds()

            const t = `${hr}:${min}:${sec}`

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
