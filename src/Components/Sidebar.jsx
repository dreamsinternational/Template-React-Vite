import '../Style.css'
import '../Custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.svg'
import logo_mini from '../assets/logo-mini.svg'
import dp from '../assets/face28.jpg'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Sidebar() {
  
  const [activeState, setactiveState] = useState(0)

  const [dropdownhover, setdropdownhover] = useState(false)

    const [toggle, settoggle] = useState(true)
    const [handleNavToggle,sethandleNavToggle] = useState(false)

    const [toggleProfile, settoggleProfile] = useState(true)

    const [toggleNotification, settoggleNotification] = useState(true)
    const [image, setimage] = useState(true)
    function activefun(num){
      setactiveState(num)
     }
    function handleNavSetting(){
      sethandleNavToggle(()=>{sethandleNavToggle(!handleNavToggle)})
      if(handleNavToggle){
          document.getElementById("right-sidebar").className="settings-panel"

      }
      else{
          document.getElementById("right-sidebar").className="settings-panel open"



      }}
       

    function handleToggle(){
        settoggle(()=>{settoggle(!toggle)})
        if(toggle){
            document.getElementById("navbody").className="container-scroller"
            setimage(()=>{setimage(false)})
            console.log(image)
        }
        else{
            document.getElementById("navbody").className="container-scroller sidebar-icon-only"
            setimage(()=>{setimage(true)})



        }}
        function handleToggle2(){
        settoggle(()=>{settoggle(!toggle)})
        if(toggle){
            document.getElementById("sidebar").className="no-outline sidebar sidebar-offcanvas active"
        }
        else{
            document.getElementById("sidebar").className="no-outline sidebar sidebar-offcanvas"


        }
    }
    function handleNotification(){
        settoggleNotification(()=>{settoggleNotification(!toggleNotification)})
        if(toggleNotification){
            document.getElementById("notification").className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list show"
        }
        else{
            document.getElementById("notification").className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list "


        }
}
function MouseOverDashboard(){
  setdropdownhover(()=>{setdropdownhover(!dropdownhover)})
  if(dropdownhover){
    document.getElementById("dashboard").className="nav-item hover-open"

   }
  else{
    document.getElementById("dashboard").className="nav-item"

  }
}

function handleProfile(){
    settoggleProfile(()=>{settoggleProfile(!toggleProfile)})
    if(toggleProfile){
        document.getElementById("profile").className="dropdown-menu dropdown-menu-right navbar-dropdown show"
    }
    else{
        document.getElementById("profile").className="dropdown-menu dropdown-menu-right navbar-dropdown"


    }
}

  return (
    
    <div id="navbody" className="container-scroller  sidebar-icon-only ">

    <nav className="navbar  col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
     <a className="navbar-brand brand-logo mr-5" href="#"><img src={logo} className="mr-2" alt="logo"/></a>
        <a className="navbar-brand brand-logo-mini" href="#"><img src={logo_mini} alt="logo"/></a>
        

      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <button style={{ border: 'none', color: 'white' }} onClick={handleToggle} className="navbar-toggler navbar-toggler align-self-center " type="button" data-toggle="minimize">
          <FontAwesomeIcon style={{ color: 'black' }} icon={faBars}/>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                <FontAwesomeIcon  icon="fa fa-search" aria-hidden="true"/>
                </span>
              </div>
              <input type="text" className="form-control ml-3 mb-1" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
        <li  className="nav-item dropdown">
            <button onClick={handleNotification} className="nav-link count-indicator dropdown-toggle " id="notificationDropdown" href="#" data-toggle="dropdown">
            <FontAwesomeIcon icon="fa-solid fa-bell" shake/> 
                          <span  className="count"></span>
            </button>
            <div id='notification'  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list " aria-labelledby="notificationDropdown">
              <p  className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a  className="dropdown-item preview-item">
                <div  className="preview-thumbnail">
                  <div  className="preview-icon bg-success">
                    <i  className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div  className="preview-item-content">
                  <h6  className="preview-subject font-weight-normal">Application Error</h6>
                  <p  className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a  className="dropdown-item preview-item">
                <div  className="preview-thumbnail">
                  <div  className="preview-icon bg-warning">
                    <i  className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div  className="preview-item-content">
                  <h6  className="preview-subject font-weight-normal">Settings</h6>
                  <p  className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a  className="dropdown-item preview-item">
                <div  className="preview-thumbnail">
                  <div  className="preview-icon bg-info">
                    <i  className="ti-user mx-0"></i>
                  </div>
                </div>
                <div  className="preview-item-content">
                  <h6  className="preview-subject font-weight-normal">New user registration</h6>
                  <p  className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>   
          <ul className="nav-item dropdown">
          
          <li  className="nav-item nav-profile dropdown">
            <button onClick={handleProfile}  className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            <img src={dp} width={55} height={55} alt="profile"/>
            </button>
            <div id='profile' className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a  className="dropdown-item">
                <i  className="ti-settings text-primary"></i>
                Settings
              </a>
              <a  className="dropdown-item">
                <i  className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
            
          
          </li>
          <li className="nav-item nav-settings d-none d-lg-flex">
            <button className="nav-link" onClick={handleNavSetting}>
              <i className="mdi mdi-dots-horizontal"></i>
            </button>
          </li>
          
            
          </ul>
         
          
        </ul>
        <button style={{ border: 'none', color: 'white' }} onClick={handleToggle2} className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <FontAwesomeIcon style={{ color: 'black' }}  icon={faBars}/>
        </button>

      </div>
    </nav>

    
    <div className="d-flex main-page">
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <br/>
            <br/>

            <Link className="nav-link " to="/Dashboard">
              <i className="mdi mdi-view-dashboard mr-3 ml-3 "  ></i>
              <span className="menu-title" >Dashboard</span>
            </Link>
          </li>
          <li id='dashboard'  className={`nav-item  ${activeState==1?"active":""}`}>
            <Link onClick={()=>{activefun(1)}} className="nav-link"  onMouseOver={()=>{MouseOverDashboard(true)}} onMouseOut={()=>{MouseOverDashboard(false)}}  to="/Dashboard" >
              <i className="mdi mdi-microsoft mr-3 ml-3" ></i>
              <span className="menu-title ">UI Elements</span>
              {/* <i className="menu-arrow"></i> */}
            </Link>
            <div className="collapse " id="ui">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>
          <li  className={`nav-item  ${activeState==2?"active":""}`}>
          <Link onClick={()=>{activefun(2)}} className="nav-link" to="/form" >
          
           
              <i className="mdi mdi-grid mr-3 ml-3"></i>
              <span className="menu-title">Form elements</span>
              {/* <i className="menu-arrow"></i> */}
        
            </Link>

           
          </li>
          <li  className={`nav-item  ${activeState==3?"active":""}`}>
             <Link onClick={()=>{activefun(3)}} className="nav-link"  to="/Dashboard" >
              <i className="mdi mdi-chart-bar mr-3 ml-3"></i>
              <span className="menu-title">Charts</span>
              {/* <i className="menu-arrow"></i> */}
            </Link>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li  className={`nav-item  ${activeState==4?"active":""}`}>
            <Link onClick={()=>{activefun(4)}} className="nav-link" data-toggle="collapse" to="/Tables" >
              <i className="mdi mdi-table mr-3 ml-3"></i>
              <span className="menu-title">Tables</span>
              {/* <i className="menu-arrow"></i> */}
            </Link>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>
          <li  className={`nav-item  ${activeState==5?"active":""}`}>
            <Link onClick={()=>{activefun(5)}} className="nav-link" data-toggle="collapse" to="/Icons" aria-expanded="false" aria-controls="icons">
              <i className="mdi mdi-diamond mr-3 ml-3"></i>
              <span className="menu-title">Icons</span>
              {/* <i className="menu-arrow"></i> */}
            </Link>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              </ul>
            </div>
          </li>
          <li  className={`nav-item  ${activeState==6?"active":""}`}>
            <a onClick={()=>{activefun(6)}} className="nav-link" data-toggle="collapse" href="/" aria-expanded="false" aria-controls="auth">
              <i className="mdi mdi-contacts mr-3 ml-3"></i>
              <span className="menu-title">User Pages</span>
              {/* <i className="menu-arrow"></i> */}
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li  className={`nav-item  `}>
            <a  className="nav-link" data-toggle="collapse" href="/Error" aria-expanded="false" aria-controls="auth">
            <i className="mdi mdi-block-helper mr-3 ml-3"></i>
              <span className="menu-title">User Pages</span>
              {/* <i className="menu-arrow"></i> */}
            </a>
           
          </li>
          
          
        </ul>

      </nav>
      
      
        <div id="right-sidebar" className="settings-panel ">
        <i className="settings-close ti-close"></i>
        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div className="tab-content" id="setting-content">
          <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div className="add-items d-flex px-3 mb-0">
              <form className="form w-100">
                <div className="form-group d-flex">
                  <input type="text" className="form-control todo-list-input" placeholder="Add To-do"/>
                  <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div className="list-wrapper px-3">
              <ul className="d-flex flex-column-reverse todo-list">
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox"/>
                      Team review meeting at 3.00 PM
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox"/>
                      Prepare for presentation
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox"/>
                      Resolve all the low priority tickets due today
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Schedule meeting for next week
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Project review
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
              </ul>
            </div>
            <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary mr-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p className="text-gray mb-0">The total number of sessions</p>
            </div>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary mr-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p className="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          </div>
          <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div className="d-flex align-items-center justify-content-between border-bottom">
              <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
            </div>
            <ul className="chat-list">
              <li className="list active">
                <div className="profile"><img src="images/faces/face1.jpg" alt="image"/><span className="online"></span></div>
                <div className="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">19 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="images/faces/face2.jpg" alt="image"/><span className="offline"></span></div>
                <div className="info">
                  <div className="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                <small className="text-muted my-auto">23 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="images/faces/face3.jpg" alt="image"/><span className="online"></span></div>
                <div className="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">14 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="images/faces/face4.jpg" alt="image"/><span className="offline"></span></div>
                <div className="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small className="text-muted my-auto">2 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="images/faces/face5.jpg" alt="image"/><span className="online"></span></div>
                <div className="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">5 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="images/faces/face6.jpg" alt="image"/><span className="online"></span></div>
                <div className="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      {/* <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021.  Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash. All rights reserved.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="ti-heart text-danger ml-1"></i></span>
          </div>
        </footer> */}
      </div>
  
    )
}

export default Sidebar