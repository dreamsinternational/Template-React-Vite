
import './App.css'
import Signin from './Components/Signin'
import Sidebar from './Components/Sidebar'

import Signup from './Components/Signup'

import Page1 from './Components/Page1'
import Forms from './Components/Forms'
import EmailVerification from './Components/EmailVerification'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Dashboard from './Components/Dashboard'
// import Donate from './Components/Donate'
import Table from './Components/Table'
import Icons from './Components/Icons'
// import ShowNavbar from './Components/ShowNavbar'
import { useState } from 'react'
import ShowSidebar from './Components/ShowSidebar'
import Error from './Components/Error'
function App() {
const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className={`${sidebarActive?"d-flex":""}`}>
    
    <BrowserRouter>
    <div>
    <ShowSidebar setSidebarActive={setSidebarActive} >
  {<Sidebar />}
  </ShowSidebar>
  </div>
   


        <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/Signin' element={<Signin/>}/>

        <Route path='/Signup' element={<Signup/>}/>

        <Route path='/EmailVerification' element={<EmailVerification/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>

        <Route path='/form' element={<Forms/>}/>

        <Route path='/Tables' element={<Table/>}/>

        <Route path='/Icons' element={<Icons/>}/>

        <Route path='/Error' element={<Error/>}/>
        {/* <Route path='/form' element={<Sidebar Component={<Forms/>}/>}/>

        <Route path='/Tables' element={<Sidebar Component={<Table/>}/>}/>

        <Route path='/Icons' element={<Sidebar Component={<Icons/>}/>}/> */}

        

       
      </Routes>
    </BrowserRouter>
   

       
    {/* <Donate/>     */}
    

    </div>
  )
}

export default App
