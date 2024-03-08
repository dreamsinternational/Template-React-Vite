import React from 'react'
import '../Style.css'
import '../Custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.svg'
import logo_mini from '../assets/logo-mini.svg'
import dp from '../assets/face28.jpg'
import { faCheckSquare, faCoffee,faBars } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'
function Sidebar() {
    const [toggle, settoggle] = useState(false)

    const [toggleProfile, settoggleProfile] = useState(false)

    const [toggleNotification, settoggleNotification] = useState(false)
    const [image, setimage] = useState(true)

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
            console.log(image)



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
    // <div data-new-gr-c-s-check-loaded="14.1159.0" data-gr-ext-installed=""  className="sidebar-icon-only">
    <div id="navbody" className="container-scroller sidebar-icon-only">

    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
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
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
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
          <li className="nav-item dropdown">
          
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
          
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
          {/* <li className="nav-item nav-settings d-none d-lg-flex">
            <a className="nav-link" href="#">
              <i className="icon-ellipsis"></i>
            </a>
          </li> */}
        </ul>
        <button style={{ border: 'none', color: 'white' }} onClick={handleToggle2} className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <FontAwesomeIcon style={{ color: 'black' }}  icon={faBars}/>
        </button>

      </div>
    </nav>
    <nav  className="no-outline sidebar sidebar-offcanvas " id="sidebar">


        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i className="icon-bar-graph menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i className="icon-contract menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="icon-head menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
              <i className="icon-ban menu-icon"></i>
              <span className="menu-title">Error pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="error">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/documentation/documentation.html">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    //   </div>
    )
}

export default Sidebar