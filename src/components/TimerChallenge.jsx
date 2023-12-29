import { useRef, useState } from "react";

export default function TimerChallenge({ title, timeLimit }) {
  const[timerExpired,setTimerExpired] = useState(false);
  const[timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  function handleStart(){
    timer.current = setTimeout(() => {setTimerExpired(true)},1000*timeLimit);
    setTimerStarted(true);
  }
  function handleStop () {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? "youLost" : ""}
      <p className="challengetime">
        {timeLimit} second{timeLimit > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "stop" : "start"} challenge</button>
      </p>
      <p>
        {timerStarted ? "timer is runing..." : "timer is inactive"}
      </p>
    </section>
  );
}
