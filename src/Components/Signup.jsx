import logo from '../assets/logo.svg'
import '../Style.css'
import '../Custom.css'
// import { Link } from 'react-router-dom'
function Signup() {
  return (
    
        <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={logo} alt="logo"/>
                <h6 style={{textAlign:'center'}} className="font-weight-medium">SIGN UP</h6>

                <hr className='hr-dark'></hr>
              </div>
              <div className="pt-3">
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Fullname"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email Id"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Company Name"/>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Contact No."/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Password"/>
                </div>
                {/* <div className="form-group">
                <select
  className="form-control form-control-lg"
  id="exampleFormControlSelect2"
>
  <option>Country</option>
  <option>United States of America</option>
  <option>United Kingdom</option>
  <option>India</option>
  <option>Germany</option>
  <option>Argentina</option>
</select>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div> */}
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input style={{width:19}} type="checkbox" className="form-check-input checkbox"/>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="/EmailVerification">SIGN UP</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <a href="Signin" className="text-primary">SIGN IN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
 



  )
}

export default Signup