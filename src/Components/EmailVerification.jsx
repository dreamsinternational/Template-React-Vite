// import { Link } from "react-router-dom"
import '../Style.css'

function EmailVerification() {
    return (
  <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  {/* <img src={logo} alt="logo"/> */}
                </div>
                <h2 className="font-weight-medium">Email Verification</h2>
                <h6 className="font-weight-light">We have send code to your h***@gmail.com </h6>
                <form className="pt-3">
                  <div className="form-group dflex ">
                    <input type="text" className="form-control form-control-lg m-1 text_center ml-5" id="exampleInputEmail1" placeholder=" -"/>
                    <input type="text" className="form-control form-control-lg m-1 text_center" id="exampleInputPassword1" placeholder=" -"/>
   
                    <input type="text" className="form-control form-control-lg m-1 text_center" id="exampleInputPassword1" placeholder=" -"/>
  
                    <input type="text" className="form-control form-control-lg m-1 text_center mr-5" id="exampleInputPassword1" placeholder=" -"/>
  
                  </div>
                  
                  <div className="mt-3">
                    <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="Dashboard">Continue</a>
                  </div>
                  <div className="dflex mt-3 btn-block">
              <h6 className="recieve_code">Didn&apos;t recieve code?</h6><a className="pl-1">Resend</a>
              <p className="text_end btn-block">1.30 sec</p>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  )
  }
  
  export default EmailVerification