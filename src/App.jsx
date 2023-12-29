import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" timeLimit={1} />
        <TimerChallenge title="Not Easy" timeLimit={5}/>
        <TimerChallenge title="Getting Tougher" timeLimit={10}/>
        <TimerChallenge title="Pros Only" timeLimit={15}/>
        
      </div>
    </>
  );
}

export default App;
