import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000); //refreshes get time every 1000 miliseconds

  let time = new Date().toLocaleTimeString();
  const [tim, setTime] = useState(time);
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{tim}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
