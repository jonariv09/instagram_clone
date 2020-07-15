import React from 'react'
import profilePicture from '../../assets/images/profile-picture.jpg'

function UserState(props) {
  return (
    <>
      <div
        className="wrapper-container-states position-relative state d-flex flex-nowrap"
        role="alert"
      >
        <div className={'position-relative main-wrapper-picture'}>
          <div className={`wrapper-picture rounded-circle`}>
            <div className={`wrapper-inner-picture rounded-circle`}>
              <img
                src={profilePicture}
                className="picture rounded-circle"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={'pl-2 state-text text-smaller'}>
          <p className={'font-weight-bold'}> jonariv09 </p>
          <p className={'text-lighter text-muted'}> HACE {1} HORA </p>
        </div>
      </div>
    </>
  )
}

export default UserState
