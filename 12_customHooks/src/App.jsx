import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import usePrev from './hooks/usePrev';
import useDebounce from './hooks/useDebounce';

function App() {

  console.log("Entering App"); // to check whether that useFetch hook re-renders the whole app component or not.

  const [currentPost, setCurrentPost] = useState(1);
  const { post, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  console.log("1" + loading + post);  // this will only log 2 times due to react 18+ feature of batching the state changes.

  if (loading) {
    return <>
      Loading.....
    </>
  }
  return (
    <>
      <button onClick={() => { setCurrentPost(1) }}>1</button>
      <button onClick={() => { setCurrentPost(2) }}>2</button>
      <button onClick={() => { setCurrentPost(3) }}>3</button>
      {JSON.stringify(post)}
    </>
  )
}

export default App
/*
// For unDebounce hook
function App() {

  async function sendServerRequest() {
    await fetch("api.amazon.com")
  }

  const Debounce = useDebounce(sendServerRequest);
  return (
    <>
      <input type="text" onChange={Debounce} />
    </>
  )
}

export default App

*/

/***** For usePrev hook
function App() {
  const [count, setCount] = useState(1);
  const prev = usePrev(count);

  return (
    <>
      <p> Next is usePrev hook :</p> <br />
      {count}
      <button onClick={() => setCount((c => c + 1))}>Click me !</button>
      <p>  prev value is {prev} </p>
    </>
  )
}

export default App
*/

/******* For useFetch hook */
//*/
