export default function elapse(durationInSeconds, factor){
    const time = durationInSeconds/factor;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = Math.round(time - hours * 3600 - minutes * 60);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}