import { useState } from 'react';
import Navber from './components/Navber';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber />
    </>
  )
}

export default App
