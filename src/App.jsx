import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Channel from './components/Channel';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form/>
    </div>
  )
}

export default App
