import { useEffect, useState } from "react";

const date = new Date();
const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [time, setTime] = useState<{hours: number, minutes: number, seconds: number}>({hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() })

  const mySetTime = () => {
    const date = new Date()
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      setTime(mySetTime())
    }, 1000)

    return () => clearInterval(id);
    }, [])

  return time;
};

export default useClock;
