import React, { useState } from "react";

export default function Tracker() {
  const [count, setCount] = useState(0);
  const [int, setInt] = useState(0);
  const startCounter = () => {
    //clicking  twice on the button that calls this function breaks things.
    setInt(
      setInterval((): void => {
        setCount((count += 1));
        // return count;
      }, 1000)
    );
  };
  const stopCounter = () => {
    clearInterval(int);
  };
  const resetCounter = () => {
    clearInterval(int);

    setCount(0);
    console.log(count);
  };
  const e = React.createElement;
  return (
    <>
      <div>
        <h1>Sleep tracker</h1>
        <p>{count}</p>
        <button onClick={startCounter}>start</button>
        <button onClick={stopCounter}>Pause</button>
        <button onClick={resetCounter}>Reset</button>
        {e("div", null, "Hello World")}
      </div>
    </>
  );
}
