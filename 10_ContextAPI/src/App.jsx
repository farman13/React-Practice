import { createContext, useContext, useState } from 'react'

const bulbContext = createContext();      // creating context

function App() {
  const [bulbOn, setbulbOn] = useState(true)
  console.log("app")
  // passing values in context
  return (
    <>
      <bulbContext.Provider value={{ bulbOn: bulbOn, setbulbOn: setbulbOn }}>
        <LightBulb />
      </bulbContext.Provider>
    </>
  )
}

function LightBulb() {

  return (
    <>
      <BulbState />
      <ToggleBulb />
    </>
  )
}

function BulbState() {
  const { bulbOn } = useContext(bulbContext); // using context
  console.log("bulb")
  return (
    <>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </>
  )
}

function ToggleBulb() {
  const { setbulbOn } = useContext(bulbContext);

  console.log("toogle");
  function toggle() {
    setbulbOn(bulbOn => !bulbOn);
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <button onClick={toggle}>Toggle Bulb</button>
    </div>
  )
}

export default App
