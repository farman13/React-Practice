import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Usestate returns a array with state variable & a function to update it.
  const [count, setCount] = useState(0);   // it is state variable , react only re-render the page when the state varaible is changed.

  console.log("app")
  return (
    <>
      <Counter />
    </>
  )

  function Counter() {
    const [count1, setCount1] = useState(0);   // when state varaible is updated it re-render its component in which usestate varaible is declared and the components that uses it.

    function IncreaseCount() {
      setCount(count + 1);
    }

    function DecreaseCount() {
      setCount(count - 1);
    }

    function ResetCount() {
      setCount(0);
    }

    console.log("Counter component called !")

    // here, useEffect guards our setInterval from re-renders. 
    useEffect(() => {
      setInterval(function () {     // code written inside useEffect will only execute if dependency mets.
        setCount1(function (count1) {   // write in this way bcoz as we not passing anything inside the dependency array.
          return count1 + 1;
        })
      }, 1000)
    }, []);

    return (
      <>
        <h1>{count}</h1>
        <button onClick={IncreaseCount} > Increament value</button>
        <button onClick={DecreaseCount} > Decreament value</button>
        <button onClick={ResetCount} > Reset value</button>

        <h1>{count1}</h1>

      </>
    )
  }
}

export default App

// useEffect is used for mounting , unmounting & re-rendering
// next concepts  -> conditional rendering, dependency , cleanup , fetch inside useEffect
 
// Mounting : Mounting in React.js refers to the process of creating and inserting a component into the DOM. 
// It is the first phase of a React component's lifecycle, where the component is initialized, rendered, 
// and attached to the DOM.
// Re-rendering in React occurs when a component's state or props change, causing React to re-invoke the render()
// method to update the component's output in the virtual DOM. If there are differences between the virtual DOM and 
// the actual DOM,React efficiently updates only the changed parts in the actual DOM (using its reconciliation process).
