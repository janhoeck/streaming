import { TimeFormat } from './convertMinutesToTime'

export const formatTimeOutput = (time: TimeFormat) => {
    const parts = []
    if (time.days > 0)
        parts.push(`${time.days} ${time.days === 1 ? 'Tag' : 'Tage'}`)
    if (time.hours > 0)
        parts.push(`${time.hours} ${time.hours === 1 ? 'Stunde' : 'Stunden'}`)
    if (time.minutes > 0)
        parts.push(
            `${time.minutes} ${time.minutes === 1 ? 'Minute' : 'Minuten'}`
        )

    const formattedTime = parts.join(' und ')
    return `Du guckst bereits seit ${formattedTime} zu.`
}
