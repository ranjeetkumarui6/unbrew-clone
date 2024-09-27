import React from 'react'

const Navbody = (props) => {
  return (
    <>
      <div style={{marginTop :"140px",paddingLeft:" 300px"}} className="row r1">
        <div className="col-md-5">
            
        </div>
        <div className="col-md-7" style={{marginTop:"100px"}}>
        <h1 className='text-light'>{props.heading}</h1>
        <p className='fs-5  text-light'>{props.content}</p>
        </div>
      </div>
    </>
  )
}

export default Navbody
