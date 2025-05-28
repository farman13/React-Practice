import { useEffect, useState, memo } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Counter />
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
      console.log("called!")
    }, 3000)
  }, [])

  return (
    <div>
      <GetCount />
      <Increase />
      <Decrease />
    </div>
  )
}

const GetCount = memo(() => {
  return (
    <>
      <p> 1 </p>
    </>
  )
}
)

const Increase = memo(() => {

  function increase() {

  }

  return (
    <>
      <button onClick={increase}> Increament</button>
    </>
  )
}
)

const Decrease = memo(() => {

  function decrease() {

  }

  return (
    <>
      <button onClick={decrease}> Decreament</button>
    </>
  )
}
)

export default App

/* As these three children Component are not using the state vairable/props but they will re-render if the Counter component's 
   state variable changes if we dont use memo. 

  If we use memo it it will only re-render the Counter as only it is using the state variable that changes.
  
*/