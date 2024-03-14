import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
export default function ShowSidebar({children,setSidebarActive}) {
    const location=useLocation();
    
    const [ShowSidebar,setShowSidebar]=useState(false)
    useEffect(() => {
      
        if(location.pathname==="/" || location.pathname==="/Signin" || location.pathname==="/Signup" || location.pathname==="/EmailVerification" || location.pathname==="/Error"){
            setShowSidebar(false)
        }
        else{
            setShowSidebar(true)
            setSidebarActive(location.pathname)

        }
      
    }, [location])
    
  return (
    <div>{ShowSidebar && children}</div>
  )
}