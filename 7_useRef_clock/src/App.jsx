import { useRef, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0); // when we stop the clock the value of counter doesnt reset (useState property & as app component is not unmounts from the dom), we are showing the counter variable on the page.
  const timer = useRef();   // when we stop the clock , it will stop the setInterval that means now that function inside setInterval will stop calling results in counter variable is not changing
  //  so the page is not re-render after it and it stays to the current value of counter where we stop it.

  // NOTE : if i create a simple let timer instead of useRef variable , then the problem is as the state varaible
  //        keeps changing that means re-rendering happens and the value of let is reset that means we lost the value 
  //        which is return by the setInterval in line 12 . hence we cant be able to clearInterval it.
  function StartClock() {

    let value = setInterval(function () {
      setCounter(counter => counter + 1)
    }, 1000)
    timer.current = value;
    // console.log(timer.current);
  }

  function StopClock() {
    clearInterval(timer.current);
    //   console.log(timer.current);
  }

  return (
    <>
      {counter}
      <br></br>
      <button onClick={StartClock}>Start</button>
      <button onClick={StopClock}>Stop</button>
    </>
  )
}

export default App
