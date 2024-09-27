import React from 'react'
import './card3.css'


const Card3 = (props) => {
    return (
        <>
            <div className="col-lg flex-wrap  justify-content-between  me-0 pe-0 sh">
                <span><img src={props.ic} style={{ width: "20px", height: "20px", }} alt="quate" /></span>
                <p style={{ fontSize: "16px", color: "gray" }}>{props.para}</p>
                <img src={props.im} style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="car3" />
               
               <span style={{position:"absolute"}} className='ms-2 mt-4'>
                 <span className='d-block ' style={{color:"gray",fontWeight:"500", fontSize:"20px"}}>Roger Scott</span>
                <span className='text-info'>Marketing Manager</span>
                </span>
            </div>
        </>
    )
}

export default Card3
