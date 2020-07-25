import React, {Component} from 'react'
import UserState from '../UserState/index'
import './index.scss'

export default class States extends Component {
  render() {
    return (
      <div className={'wrapper-states card mt-3 overflow-hidden'}>
        <div
          className={
            'card-header card-header-states d-flex align-items-center pt-2 px-3 font-weight-bold text-small'
          }
        >
          <span className={'text-muted'}> Stories </span>
          <span className={'ml-auto'} style={{fontSize: '.85em'}}>
            Ver todas
          </span>
        </div>

        <div className={'container-states card-body pt-3 px-3'}>
          {[1, 2, 3, 4, 5].map((index, n) => (
            <UserState key={index} />
          ))}
        </div>
      </div>
    )
  }
}
