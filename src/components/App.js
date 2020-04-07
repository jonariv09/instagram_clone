import React from 'react'
import './App.css'
import '../css/Overwrite.css'
import '../css/GeneralStyles.css'
import NavBar from './NavBar'
import ContainerPosts from './PostComponents/ContainerPosts'
import SideSection from './SideSectionComponent/SideSection'

export default function App() {
  return (
    <>
      <div className={'wrapper'}>
        <div className="content-wrapper d-flex flex-column">
          <div className={'content'}>
            <NavBar />

            {/* main-feed-section */}
            <div
              className={'main-feed-section row d-flex justify-content-center'}
            >
              <div className="col-posts col-xl-6 col-md-9 col-sm-12">
                <ContainerPosts />
              </div>

              <div className=" col-md-3 d-md-none d-xl-block">
                <SideSection />
              </div>
            </div>
            {/* main-feed-section */}
          </div>
        </div>
      </div>
    </>
  )
}
