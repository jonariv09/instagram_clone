import React from 'react'
import SignIn from '../../components/SignIn'
import Phone from './../../assets/images/phone.png'

import LoginFooter from '../../components/LoginFooter'
import './index.scss'
import './responsive.scss'
import SignUp from '../../components/SignUp'

function Login() {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content content-login'}>
            <div className="row d-flex justify-content-center">
              <div className="image-phone-section col-md-6 p-0">
                <img src={Phone} alt="" />
              </div>
              <div className="sign-form-section col-12 col-md-6 p-0">
                <SignIn />
              </div>
              <LoginFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
