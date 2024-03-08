import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Login from './Components/Login'

function App() {


  return (
    <>

          <div >
            <Sidebar/>
          </div>
          <div>
            <Login/>
          </div>
        

    </>
  )
}

export default App
