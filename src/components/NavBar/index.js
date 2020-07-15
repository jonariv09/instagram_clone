import React from 'react'
import './NavBar.css'
import WideNavBar from './WideNavBar'
import SmallNavBar from './SmallNavBar'

export default function NavBar() {
  return (
    <>
      <nav className={'fixed-top topbar navbar border-bottom bg-white '}>
        <div className={'row d-flex justify-content-center'}>
          <div className="col-xl-9 col-md-12">
            <div className="wide-nav-bar">
              <WideNavBar />
            </div>
            <div className="small-nav-bar">
              <SmallNavBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
