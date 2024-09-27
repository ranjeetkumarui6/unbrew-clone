import React from 'react'
import './card3.css'
const Card4 = (props) => {
  return (
    <>
    <div style={{height:"auto"}} className="col-md-3 d-flex ">
       <div className="card4  ">
                <div className="img-card4">
                    <img src={props.im} alt="market" className='img4' />
                </div>
                <div className="card-content4">
                <h2>{props.title}</h2>
                <p>{props.content}
                </p>
                </div>
            </div>
            </div>
    </>
  )
}

export default Card4
