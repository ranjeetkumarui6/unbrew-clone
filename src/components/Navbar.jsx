import React from 'react'
import Navbody from './Navbody'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
            <div className=" row d-flex flex-wrap">
                <nav className="navbar col-md col-sm-12 d-flex flex-wrap  navbar-expand-md ">
                    <div className="col-md-2 col-sm-12">

                        <a className="navbar-brand" href="/home">
                            <span className='Brand'>Unbrew.</span>
                        </a>
                    </div>
                        <div className="col-md-10 col-sm-12 d-flex flex-wrap ">
                            <ul className="navbarnav nav-fill nav-list">
                                <li className="nav-item "><Link to="/Home" className="nav-link " >Home</Link ></li>
                                <li className="nav-item"><Link to="/Aboute" className="nav-link" >AboutUs</Link ></li>
                                <li className="nav-item"><Link to="/Services" className="nav-link" >Services</Link ></li>
                                <li className="nav-item"><Link to="/Pricing" className="nav-link" >Pricing</Link ></li>
                                <li className="nav-item"><Link to="/Work" className="nav-link" >Work</Link ></li>
                                <li className="nav-item"><Link to="/Blog" className="nav-link" >Blog</Link ></li>
                                <li className="nav-item"><Link to="/Contact" className="nav-link" >ContactUs</Link ></li>
                            </ul>
                        </div>
                </nav>
            </div>
            </div>
        </>
    )
}

export default Navbar
