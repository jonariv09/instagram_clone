import React from 'react'
import '../css/App.css'
import NavBar from './NavBar'


export default function App() {
  return (
    <>
      <div className={"wrapper"}>
        <div className="content-wrapper d-flex flex-column">
          <div className={"content"}>

              <NavBar />

          </div>
        </div>
      </div>
    </>
  )
}