export default function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
  }