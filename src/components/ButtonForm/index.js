import React, {Component} from 'react'
import './index.scss'
import './overwrite.scss'

export default class ButtonForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <button
          type="submit"
          className="btn btn-sm btn-block btn-primary btn-submit"
          {...this.props}
        >
          <span className="font-weight-bold"> {this.props.title} </span>
        </button>
      </>
    )
  }
}
