import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bgc" style={{position:'fixed', width:'100%', zIndex:'10'}}>
          <div className="container-fluid">
            <a className="navbar-brand mx-auto d-block" href="#">
              LostGalaxyStar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button className="btn btn-outline-dark mg-2 p position-relative" onClick={()=>{props.getHomeNum(2)}}>
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
