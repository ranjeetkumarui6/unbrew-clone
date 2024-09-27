import React from 'react'
import Navbar from './Navbar'
import Navhome from './Navhome'
import Second from './Second'

const Home = () => {
  return (
    <>
          <div className="container-fluid">
                <div className="row r1">
                    <Navbar />
                    <Navhome/>
                </div>
                <Second/>
            </div>

    </>
  )
}

export default Home
