import React, { useState, useEffect } from "react";

function Counterapp() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Count: {count}</h2>
        
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button onClick={() => {
          setRunning(false);
          setCount(0);
        }}>
          Reset
        </button>
        <h3>160124737168</h3>  {/* Added this line */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  box: {
    textAlign: "center",
  },
};

export default Counterapp;

