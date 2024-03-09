import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
function Page1() {
  return (
    <div className="container-scroller ">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0 ">
        <div className="row w-100 mx-0 ">
          <div className="col-lg-4 mx-auto form_color">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5 shadow form_color">
              <div className="brand-logo ">
                <img src={logo} alt="logo"/>
              </div>
             
              <form className="pt-3 form_color ">
                
                <div className="mb-2 ">
                  <button type="button" className="btn btn-block btn-google  auth-form-btn">
                    <i className="ti-facebook mr-2"></i>Sign Up with Google
                  </button>
                </div>
                <div className="mb-2">
                  <button type="button" className="btn btn-block btn-facebook   auth-form-btn">
                    <i className="ti-facebook mr-2"></i>Sign Up with facebook
                  </button>
                </div>
                <div className="mb-2">
                  <button type="button" className="btn btn-block btn-dark  auth-form-btn">
                    <i className="ti-facebook mr-2"></i>Sign Up with Apple
                  </button>
                </div>
                <div style={{textAlign:"center"}} className="mb-2">
                  <h4 >
                    or
                  </h4>
                </div>
                <div className="mb-2">
                  <Link to="/Signup" type="button" className="btn btn-block btn-primary  auth-form-btn">
                    <i className="ti-facebook mr-2"></i>Sign Up with Email
                  </Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/Signin" className="text-primary">Signin</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default Page1