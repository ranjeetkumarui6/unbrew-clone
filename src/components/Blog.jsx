import React from 'react'
import Navbar from './Navbar'
import Navbody from './Navbody'
const Blog = () => {
  return (
    <>
       <div className="container-fluid">
                <div className="row r1">
                    <Navbar />
                    <Navbody heading="Blog ->" content="Home -> Blog ->"/>
                </div>

            </div>
    </>
  )
}

export default Blog
