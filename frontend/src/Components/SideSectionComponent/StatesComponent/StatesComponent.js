import React, { Component } from 'react'
import '../../../css/StatesComponent.css'
import picturePost from '../../../images/profile-picture.jpg'

function StateUser (props) {

  return (
    <>
      <div>

      </div>
    </>
  )

}

export default class StatesComponent extends Component {

  render () {

    return (
      <div className={'wrapper-states card mt-3 overflow-hidden'}>

        <div
          className={'card-header card-header-states d-flex align-items-center pt-2 px-3 font-weight-bold text-small'}>
          <span className={'text-muted'}> Stories </span>
          <span className={'ml-auto'}
                style={{ fontSize: '.85em' }}> Ver todas </span>
        </div>

        <div className={'container-states card-body pt-3 px-3'}>

          {
            [1, 2, 3, 4, 5].map((index, n) => (
              <div className="position-relative state d-flex flex-nowrap" role="alert">

                <div className={'main-wrapper-picture'}>
                  <div className={`wrapper-picture rounded-circle`}>
                    <div className={`wrapper-inner-picture rounded-circle`}>

                      <img src={picturePost} className="picture rounded-circle"
                           alt=""/>

                    </div>
                  </div>
                </div>

                <div className={"state-text text-smaller"}>

                  <p className={"font-weight-bold"}> jonariv09 </p>
                  <p className={"text-lighter text-muted"}> hace { 1 } hora </p>

                </div>
              </div>
            ))
          }

        </div>
      </div>
    )
  }
}
