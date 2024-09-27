import React from 'react'
import Logo from '../assets/img1.svg'
import './Navhome.css'
const Navhome = () => {
    return (
        <>
            <div className="row  "  >
                <div className="col-lg-5 left">
                    <h1>Boost Personal Productivity</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <br />
                    <p>
                        <span className='s1'>Start A Project</span>
                        <button className=' btn s2 '>
                            <span >Call us for any inquiry 
                            </span>
                            <span className='call'>+91 63 93 79 25 77</span>
                        </button>
                    </p>
                    
                </div>
                <div className="col-lg-7 right">
                    <img src={Logo} style={{width:"100%", height:"80%", marginTop:"0%",marginRight:"20px"}} alt="baner right" />
                </div>
                <div className="logos">
                       <i className='fa fa-facebook'></i>
                       <i className='fa fa-twitter'></i>
                       <i className='fa fa-instagram'></i>
                       <i className='fa fa-google-plus'></i>

                    </div>
            </div>
        </>
    )
}

export default Navhome
