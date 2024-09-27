import React from 'react'
import './card5.css'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'

const Card5 = () => {
    return (
        <>
            <div className="row secondrow5 me-0 pe-0">
                <div className="card25 ">
                    <ul className="col-md d-flex flex-wrap justify-content-center cardbody5">
                        <li className="navitem5">
                            <img src={p3} alt="p1" /><br /><br />
                            <span className='c25 d-block'>Branding, Printing</span>
                            <span className='c15'>High Quality Design Concept</span><br />
                        </li>
                        <li className="navitem5">
                            <img src={p4} alt="p2" /><br /><br />
                            <span className='c25 d-block'>Graphic Design</span>
                            <span className='c15'>High Quality Design Concept</span><br />
                        </li>
                        <li className="navitem5">
                            <img src={p2} alt="p3" /><br /><br />
                            <span className='c25 d-block'>Web Development</span>
                            <span className='c15'>High Quality Design Concept</span><br />
                        </li>
                        <li className="navitem5">
                            <img src={p1} alt="p4" /><br /><br />
                            <span className='c25 d-block'>Software Development</span>
                            <span className='c15'>High Quality Design Concept</span><br />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card5