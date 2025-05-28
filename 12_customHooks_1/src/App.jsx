import { useEffect, useState } from 'react'
import './App.css'
import useDebounce from './hooks/useDebounce';

function App() {

  const [search, setSearch] = useState('');
  const debounceValue = useDebounce(search, 200);

  const changingSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log("expensive expression executed!")
  }, [debounceValue])

  return (
    <>
      <input type="text" onChange={changingSearch} />
    </>
  )
}

export default App
// Implementing debounce logic using custom hook using variable appraoch.