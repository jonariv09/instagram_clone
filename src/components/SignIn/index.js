import React from 'react'
import './index.scss'
import facebookIcon from '../../assets/icons/facebook.svg'
import Logo from '../../assets/images/instagram_logo_bigger.png'

function SignIn() {
  return (
    <>
      <div>
        <div className="sign-in-form card">
          <div className="form-header d-flex justify-content-center">
            <img src={Logo} width="50%" alt="" />
          </div>

          <div className="container-form">
            <form>
              <div className="form-group input-group-sm">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Teléfono, usuario o correo electrónico"
                />
              </div>
              <div className="form-group input-group-sm">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-sm btn-block btn-primary btn-submit"
                disabled
              >
                <span className="font-weight-bold"> Iniciar sesión </span>
              </button>
            </form>

            <div className="form-footer mt-3">
              <div className="divider d-flex justify-content-between align-items-center flex-row">
                <div className="line-divider"></div>
                <div className="font-weight-bold"> o </div>
                <div className="line-divider"></div>
              </div>

              <a
                href="https://www.facebook.com"
                className="facebook-login d-flex align-items-center justify-content-center pt-4"
              >
                <img src={facebookIcon} alt="" width="15px" />
                <span className="ml-2"> Iniciar sesión con Facebook </span>
              </a>
              <a
                href="https://www.facebook.com"
                className="password-rescue-link d-flex justify-content-center pt-3"
              >
                ¿Olvidastes tu contraseña?
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <p className="m-0">
            ¿No tienes cuenta?
            <a href="" className="bottom-section-button p-1">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn
