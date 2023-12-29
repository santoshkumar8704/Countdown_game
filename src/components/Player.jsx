import { useState } from "react";


export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  function handleChange(event) {
    setSubmitting(false);
    setPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmitting(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitting ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
