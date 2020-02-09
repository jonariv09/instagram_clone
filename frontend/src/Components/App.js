import React from 'react'
import '../css/App.css'
import '../css/Overwrite.css'
import NavBar from './NavBar'
import UserPost from './UserPost'

export default function App () {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content'}>

            <NavBar/>

            <div className={'row d-flex justify-content-center no-gutters'}>
              <UserPost/>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}