import React from 'react'
import './index.scss'
import UserInfo from '../UserInfo/index'
import StatesComponent from '../States'

export default function RightSection() {
  return (
    <>
      <div>
        <div className={'container-side-section d-flex flex-column pr-3'}>
          <UserInfo />
          <StatesComponent />
        </div>
      </div>
    </>
  )
}
