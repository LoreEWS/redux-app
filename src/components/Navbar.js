import React from 'react'
import { Link } from "react-router-dom";
import { SiRedux } from 'react-icons/si';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
        <Link to="/" className="navbar-brand ms-3"><span className="me-2 fs-3"><SiRedux /></span>React Redux</Link>
    </nav>
  )
}

export default Navbar