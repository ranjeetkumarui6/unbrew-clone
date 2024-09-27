import React from 'react'
import logo from '../assets/react.svg'
import './card.css'
const Card = (props) => {
    return (
        <div>
            <div style={{maxWidth:"250px"}} className="card1 col flex-wrap">
                <div className="img-card">
                    <img src={props.im} alt="market" className='img1' />
                </div>
                <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.content}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Card
