import React, { Component } from 'react'
import './SideSection.css'
import profilePicture from '../../images/profile-picture.jpg'
import StatesComponent from './StatesComponent/StatesComponent'

function UserInfo (props) {
  return (
    <>

      <div className=" d-flex flex-wrap">

        <img src={profilePicture} alt="" width={'50px'} height={'50px'}
             className={'rounded-circle'}/>

        <div
          className={'d-flex flex-column justify-content-center align-items-start flex-wrap'}>

          <p
            className={'pl-3 m-0 text-small font-weight-bold'}> dev_josenarvaez </p>
          <p className={'pl-3 m-0 text-smaller text-muted'}> Jose Agustin
            Narvaez Rivera </p>

        </div>

      </div>

    </>
  )
}

export default class SideSection extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (

      <>

        <div>
          <div className={'container-side-section d-flex flex-column pr-3'}>

            <UserInfo/>
            <StatesComponent/>

          </div>
        </div>

      </>
    )
  }

}
