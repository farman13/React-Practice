import { useState } from 'react'

function App() {

  return (
    <>
      <LightBulb />
    </>
  )
}

function LightBulb() {
  const [bulbOn, setbulbOn] = useState(true);

  return (
    <>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulb bulbOn={bulbOn} setbulbOn={setbulbOn} />
    </>
  )
}

function BulbState({ bulbOn }) {
  // const [bulbOn, setbulbOn] = useState(true);  // firstly i declared it here ,but then i realised that 
  // it has used in ToggleBulb component also so i rolled up the state variable to its ancester component that is LightBulb.
  return (
    <>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </>
  )
}

function ToggleBulb({ bulbOn, setbulbOn }) {

  function toggle() {
    setbulbOn(!bulbOn);
    // setbulbOn(currntState => !currntState);   // if we use this then we dont have to pass bulbon to this component.
  }
  return (
    <>
      <button onClick={toggle}>Toggle Bulb</button>
    </>
  )
}
export default App
