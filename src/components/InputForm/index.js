import React, {Component} from 'react'
import './index.scss'

export default class InputForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let placeholder
    if (this.props.name === 'email') {
      placeholder = 'Teléfono, usuario o correo electrónico'
    } else if (this.props.name === 'email-login') {
      placeholder = 'Número de celular o correo electrónico'
    } else if (this.props.name === 'password') {
      placeholder = 'Contraseña'
    } else if (this.props.name === 'name') {
      placeholder = 'Nombre completo'
    } else if (this.props.name === 'username') {
      placeholder = 'Nombre de usuario'
    }

    return (
      <>
        <div className="form-group input-group-sm">
          <input
            type={this.props.type}
            className="form-control"
            id={this.props.name}
            name={this.props.name}
            placeholder={placeholder}
          />
        </div>
      </>
    )
  }
}
