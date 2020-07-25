import React from 'react'
import SignIn from '../../components/SignIn'
import Phone from './../../assets/images/phone.png'

import './index.scss'
import LoginFooter from '../../components/LoginFooter'

function Login() {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content content-login'}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 d-flex justify-content-end p-0">
                <img src={Phone} alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-start p-0">
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
