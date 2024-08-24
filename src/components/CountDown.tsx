import { useEffect, useState } from "react"
import { getRelativeTime } from "../helpers/get-relative-time"


export const CountDown = ({ endDate }: { endDate: Date }) => {
    const [time, setTime] = useState<string>('00d:00h:00m:00s')

    const prefix = endDate > new Date() ? 'Offer ends in' : 'Offer has ended'
    const suffix = endDate > new Date() ? '' : 'ago'

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getRelativeTime(endDate))
        }, 1000)

        return () => clearInterval(interval)
    }, [endDate])

    return (
        <div className="offer-countdown">
            {prefix} <span>{time}</span> {suffix}
        </div>
    )
}