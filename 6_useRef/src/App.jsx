import { useRef } from 'react'

function App() {
  const InputRef = useRef(null);  // here it is used as reference of an dom element.

  function FocusOnInput() {
    InputRef.current.focus();     // this will highlight the input box.
    console.log(InputRef.current.value);   // if i print InputRef.current it will give us the input tag
    console.log(InputRef.current)
  }

  return (
    <>
      Signup
      <input type="text" ref={InputRef} />
      <button onClick={FocusOnInput}> Submit</button>
    </>
  )
}

export default App

