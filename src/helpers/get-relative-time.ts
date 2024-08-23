export const getRelativeTime = (date: Date, today = new Date()) => {

    let diff = Math.abs(date.getTime() - today.getTime());

    // always get days minutes and seconds
    let finalFormattedValue = ''
    const msInDay = 86400000;
    const msInHour = 3600000;
    const msInMinutes = 60000;
    const msInSeconds = 1000;

    const days = Math.floor(diff / msInDay);
    finalFormattedValue += `${days.toString()}d:`
    diff = Math.max(0, diff - days * msInDay);

    const hours = Math.floor(diff / msInHour);
    finalFormattedValue += `${hours.toString().padStart(2, '0')}h:`
    diff = Math.max(0, diff - hours * msInHour);

    const minutes = Math.floor(diff / msInMinutes);
    finalFormattedValue += `${minutes.toString().padStart(2, '0')}m:`
    diff = Math.max(0, diff - minutes * msInMinutes)

    console.log({ diff });
    const seconds = Math.floor(diff / msInSeconds);
    finalFormattedValue += `${seconds.toString().padStart(2, '0')}s`


    return finalFormattedValue
}