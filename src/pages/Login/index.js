import React from 'react'
import SignIn from '../../components/SignIn/index'
import Phone from './../../assets/images/phone.png'

function Login() {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content'}>
            <div className="row d-flex justify-content-center pt-4">
              <div className="col-md-6 d-flex justify-content-end p-0">
                <img src={Phone} alt="" />
              </div>
              <div className="col-md-6 d-flex justify-content-start p-0">
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
