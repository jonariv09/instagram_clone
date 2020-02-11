import React from 'react'
import '../css/App.css'
import '../css/Overwrite.css'
import NavBar from './NavBar'
import States from './States'

import ContainerPosts from './PostComponents/ContainerPosts'

export default function App () {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content'}>

            <NavBar/>

            <div className={'row row-post d-flex justify-content-center no-gutters'}>

              <div className="col-posts col-xl-6 col-md-9 col-sm-12">

                <ContainerPosts/>

              </div>

              <div className="col-md-3 d-md-none d-xl-block">

                <States/>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}