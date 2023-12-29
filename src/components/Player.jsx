import { useState,useRef } from "react";


export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const enteredPlayerName =useRef();
  
  function handleClick() {
    setPlayerName(enteredPlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
