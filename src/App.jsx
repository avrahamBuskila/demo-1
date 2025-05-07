import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'






 function App() {
  const name = "avi"
  
  return (
<>
<h1>רכיב אבא</h1>
<Child nameFromParent={name}/>
</>  
  )
}


export default App
