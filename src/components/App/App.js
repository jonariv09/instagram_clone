import React from 'react'
import './App.css'
import './../../css/Overwrite.css'
import './../../css/GeneralStyles.css'
import NavBar from '../NavBar/NavBar'
import Posts from '../Posts/index'
import RightSection from '../RightSection/index'

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
                <Posts />
              </div>

              <div className=" col-md-3 d-md-none d-xl-block">
                <RightSection />
              </div>
            </div>
            {/* main-feed-section */}
          </div>
        </div>
      </div>
    </>
  )
}
