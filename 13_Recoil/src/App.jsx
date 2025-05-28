import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/CounterAtom';

// Note : Now in this case only the CurrentCount component re-renders
function App() {

  // wrapping the application , so that the atoms can be accessed from any component
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);   // accessing the atom value (subscribing it )
  return <div>
    {count}
  </div>
}

function Decrease() {

  const setCount = useSetRecoilState(counterAtom);  // give the setting function to set atom variable ( not subscribing)

  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App

/*** e.g code for notes UseState approach (All the four components are re-renders whenever count changes )

import { useState } from 'react'
import './App.css'
function App() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GetCount count={count} />
      <Increament setCount={setCount} />
      <Decreament setCount={setCount} />
    </>
  )
}

function GetCount({ count }) {
  return (
    <>
      {count}
    </>
  )
}

function Increament({ setCount }) {

  function increament() {
    setCount(c => c + 1);
  }
  return (
    <>
      <button onClick={increament}> Increament</button>
    </>
  )
}

function Decreament({ setCount }) {

  function decreament() {
    setCount(c => c - 1);
  }
  return (
    <>
      <button onClick={decreament}> Decreament</button>
    </>
  )
}

export default App
*/