import React, {Component} from 'react'
import InputForm from '../InputForm'
import './index.scss'
import Logo from '../../assets/images/instagram_logo_bigger.png'
import ButtonForm from '../ButtonForm'
import facebookIcon from '../../assets/icons/facebook.svg'

export default class SignUp extends Component {
  render() {
    return (
      <>
        <div className="sign-form-container">
          <div className="sign-form sign-up-form card">
            <div className="form-header d-flex justify-content-center">
              <img src={Logo} width="50%" alt="" />
            </div>

            <div className="container-form">
              <p className="text-header text-center text-muted">
                {' '}
                Regístrate para ver fotos y videos de tus amigos.{' '}
              </p>
              <ButtonForm title="Iniciar sesión con Facebook" />

              <div className="divider d-flex justify-content-between align-items-center flex-row my-3">
                <div className="line-divider">{''}</div>
                <div className="font-weight-bold"> o</div>
                <div className="line-divider">{''}</div>
              </div>

              <form>
                <InputForm type="email" name="email-login" />
                <InputForm type="text" name="name" />
                <InputForm type="text" name="username" />
                <InputForm type="password" name="password" />
                <ButtonForm title="Registrarse" disabled />
              </form>

              <div className="form-footer mt-3">
                <p className="text-terms-conditions">
                  {' '}
                  Al registrarte, aceptas nuestras Condiciones, la Política de
                  datos y la Política de cookies.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <p className="m-0">
              ¿Tienes una cuenta?
              <a href="" className="bottom-section-button p-1">
                Iniciar sesión
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
}
