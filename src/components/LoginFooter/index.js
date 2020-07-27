import React from 'react'

import './index.scss'
import './overwrite.scss'

export default function LoginFooter() {
  return (
    <>
      <div className="col-md-6 col-lg-12 col-xl-9 login-footer navbar navbar-expand-lg ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              información
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              ayuda
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              prensa
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              api
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              empleo
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              privacidad
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              condiciones
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              ubicaciones
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              cuentas destacadas
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              hashtags
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              idioma
            </a>
          </li>
        </ul>
        <p className="p-1 mb-0 copyright-text">
          {' '}
          © 2020 INSTAGRAM FROM FACEBOOK{' '}
        </p>
      </div>
    </>
  )
}
