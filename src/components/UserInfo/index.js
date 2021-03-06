import React from 'react'
import profilePicture from '../../assets/images/profile-picture.jpg'

function UserInfo(props) {
  return (
    <>
      <div className=" d-flex flex-wrap">
        <img
          src={profilePicture}
          alt=""
          width={'50px'}
          height={'50px'}
          className={'rounded-circle'}
        />

        <div
          className={
            'd-flex flex-column justify-content-center align-items-start flex-wrap'
          }
        >
          <p className={'pl-3 m-0 text-small font-weight-bold'}>
            {' '}
            dev_josenarvaez{' '}
          </p>
          <p className={'pl-3 m-0 text-smaller text-muted'}>
            {' '}
            Jose Agustin Narvaez Rivera{' '}
          </p>
        </div>
      </div>
    </>
  )
}

export default UserInfo
