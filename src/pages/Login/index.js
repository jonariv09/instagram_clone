import React, {Component} from 'react'
import SignIn from '../../components/SignIn'
import Phone from './../../assets/images/phone.png'

import LoginFooter from '../../components/LoginFooter'
import './index.scss'
import './responsive.scss'
import SignUp from '../../components/SignUp'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }

    this.handleShowForm = this.handleShowForm.bind(this)
  }

  handleShowForm() {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
      <>
        <div className={'wrapper'}>
          <div className="content-wrapper d-flex flex-column">
            <div className={'content content-login'}>
              <div className="row d-flex justify-content-center row-content-login">
                <div className="image-phone-section col-lg-6 p-0">
                  <img src={Phone} alt="" />
                </div>
                <div className="sign-form-section col-12 col-md-12 col-lg-6 p-0">
                  {this.state.showForm ? (
                    <SignIn onHandleShowForm={this.handleShowForm} />
                  ) : (
                    <SignUp onHandleShowForm={this.handleShowForm} />
                  )}
                </div>
                <LoginFooter />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login
