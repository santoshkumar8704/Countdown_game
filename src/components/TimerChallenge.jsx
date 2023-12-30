import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, timeLimit }) {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit*1000);
  const isTimerActive = timeRemaining >0 && timeRemaining < timeLimit *1000;
  const timer = useRef();
  const dialog = useRef();
  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(timeLimit*1000);
  }
  function handleStart(){
    timer.current = setInterval(() => {
      setTimeRemaining((prevtime) => prevtime-10)
    },10)
   
  }
  function handleStop () {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
    <ResultModal ref={dialog} timeLimit={timeLimit} remainingTime = {timeRemaining} onReset = {handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerActive ? "youLost" : ""}
      <p className="challengetime">
        {timeLimit} second{timeLimit > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={isTimerActive ? handleStop : handleStart}>{isTimerActive ? "stop" : "start"} challenge</button>
      </p>
      <p>
        {isTimerActive ? "timer is runing..." : "timer is inactive"}
      </p>
    </section>

    </>
    
  );
}
