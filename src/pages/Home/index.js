import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Posts from '../../components/Posts/index'
import RightSection from '../../components/RightSection/index'
import './index.css'

function Home() {
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

export default Home
