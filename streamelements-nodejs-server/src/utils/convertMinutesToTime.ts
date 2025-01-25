export type TimeFormat = {
    days: number
    hours: number
    minutes: number
}

export const convertMinutesToTime = (minutes: number): TimeFormat => {
    const days = Math.floor(minutes / 1440) // 1 day = 1440 minutes
    const hours = Math.floor((minutes % 1440) / 60) // Convert remaining minutes to hours
    const remainingMinutes = minutes % 60 // Remaning minutes

    return { days, hours, minutes: remainingMinutes }
}
