import { useContext } from 'react'
import BulbProvider, { bulbContext } from './BulbProvider';

function App() {

  return (
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
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

  return (
    <>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </>
  )
}

function ToggleBulb() {
  const { bulbOn, setbulbOn } = useContext(bulbContext);

  function toggle() {
    setbulbOn(!bulbOn);
  }
  return (
    <>
      <button onClick={toggle}>Toggle Bulb</button>
    </>
  )
}

export default App
