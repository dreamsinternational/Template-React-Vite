
import './App.css'
import Signin from './Components/Signin'
import Sidebar from './Components/Sidebar'

import Signup from './Components/Signup'

import Page1 from './Components/Page1'

import EmailVerification from './Components/EmailVerification'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/Signin' element={<Signin/>}/>

        <Route path='/Signup' element={<Signup/>}/>

        <Route path='/EmailVerification' element={<EmailVerification/>}/>
        <Route path='/Dashboard' element={<Sidebar/>}/>

       
      </Routes>
      
    </BrowserRouter>
   

       
        

    </>
  )
}

export default App
