import React from 'react'
import './card6.css'
const Card6 = (props) => {
    return (
        <>
            <div className="card6 flex-wrap">
                <div className="img-card6">
                    <span><sup>$</sup>{props.d1}</span>
                </div><br />
                <div className="card-content6">
                    <span className= 'text-secondary fw d-block'>{props.d2}</span><br />
                    <span className='d-block'>Strategic Alliance</span><br />
                    <span className='d-block'>Growth Expansion</span><br />
                    <span className='d-block'>Business Planning</span><br />
                    <span className='d-block'>Contact Negotiation</span><br />
                    <span className='d-block'>Market Positioning</span><br />
                </div><br />
                <p>
                    <span className='s1'>Start A Project</span>
                </p>
            </div>
        </>
    )
}

export default Card6
