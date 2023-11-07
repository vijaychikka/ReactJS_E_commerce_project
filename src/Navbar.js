import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand">Navbar</p>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <Link to ="/cart">cart</Link>
    </form>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
