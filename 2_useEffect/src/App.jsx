import { useEffect, useState } from 'react'

function App() {
  const [IsVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {         // code inside this will only re-renders when the app component mounts.
    setInterval(() => {          // this will set the visibility every 5sec.
      setIsVisible((IsVisible) => IsVisible = !IsVisible);   // setIsVisible(!IsVisible); does not work properly
    }, 5000);                                                 //  bcoz it wll not accessing the latest value of IsVisible(bcoz the code inside useEffect will only runs when components first mounts as dependency array is empty)
  }, [])

  function increment() {
    setCount(count => count + 1)
  }

  return (
    <>
      {IsVisible && <Counter count={count} />}

      <button onClick={increment}>Increament count</button>
    </>
  )
}

// NOTE : React treats conditional rendering like adding(mounting) or removing(unmounting) elements from the DOM.
// To prevent re-mounting we have to use display property of css to set its visibility.

function Counter(props) {

  useEffect(function () {        // code inside it will only run once ,if there is no setInterval which mounts & unmounts it
    console.log("mounting");         // mounting means the Counter component is firstly added to the DOM and re-renders.

    const interval = setInterval(() => {
      console.log("hi");
    }, 1000)

    return function () {           // this is called cleanup
      clearInterval(interval);     // now this will stop the interval , whenever component ummounts from the dom.
      console.log("unmounting");   // unmounting means when the Counter component is removed from the DOM.
    }
  }, [])

  useEffect(function () {             // code inside it will only runs when component firstly mounts & when count value changes.
    console.log("Counter has changed!");

    return function () {              // this cleanup is called whenever the count value changed!
      console.log("Clean up second useEffect")
    }
  }, [props.count]);

  return (
    <>
      <h1>Counter {props.count}</h1>
    </>
  )
}

export default App

// mounting and umounting happens when dependency array of useEffect is Empty (not necessary).
// cleanup is important to increase the performance of the application.
// in line 34 if we dont use cleanup then this setInterval functions never stop and it keeps calling the function 
// after one second even if the counter component ummounts. so to stop this we use cleanup.
