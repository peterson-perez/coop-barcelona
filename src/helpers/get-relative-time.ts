export const getRelativeTime = (date: Date, today = new Date()) => {

    let diff = Math.abs(date.getTime() - today.getTime());

    let finalFormattedValue = ''
    const msInSeconds = 1000;
    const msInMinutes = 60 * msInSeconds;
    const msInHour = 60 * msInMinutes;
    const msInDay = 24 * msInHour;

    const days = Math.floor(diff / msInDay);
    finalFormattedValue += `${days.toString().padStart(2, '0')}d:`
    diff = Math.max(0, diff - days * msInDay);

    const hours = Math.floor(diff / msInHour);
    finalFormattedValue += `${hours.toString().padStart(2, '0')}h:`
    diff = Math.max(0, diff - hours * msInHour);

    const minutes = Math.floor(diff / msInMinutes);
    finalFormattedValue += `${minutes.toString().padStart(2, '0')}m:`
    diff = Math.max(0, diff - minutes * msInMinutes)

    const seconds = Math.floor(diff / msInSeconds);
    finalFormattedValue += `${seconds.toString().padStart(2, '0')}s`

    return finalFormattedValue
}