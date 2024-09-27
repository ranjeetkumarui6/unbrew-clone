import React from 'react'
import "./website.css"
import Navbar from './Navbar'
import Navbody from './Navbody'
import Second from './Second'
const Website = () => {
    return (
        <>
            <div className="container-fluid ">
                    <Navbar />
                <Navbody/>

            </div>
        </>
    )
}

export default Website
