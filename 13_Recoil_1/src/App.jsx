import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom, counterSelector } from './store/atoms/CounterAtom'

function App() {


  return (
    <>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </>
  )
}

const Buttons = () => {
  const countSetter = useSetRecoilState(counterAtom);

  function increase() {
    countSetter(c => c + 2);
  }

  function decrease() {
    countSetter(c => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

const Counter = () => {
  const currentCount = useRecoilValue(counterAtom);

  return (
    <div>
      {currentCount}
    </div>
  )
}

const IsEven = () => {
  const Even = useRecoilValue(counterSelector);

  return (
    <div>
      {Even ? "Even" : "Odd"}
    </div>
  )
}

export default App
