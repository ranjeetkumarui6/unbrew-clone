import React from 'react'
import './card7.css'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'

const Card7 = () => {
    return (
        <>
            <div className="row secondrow7  me-0">
                <div className="card7 ">
                <ul className="col-md d-flex flex-wrap  cardbody7">
                    <li className="navitem7">
                        <img src={p1} alt="p1" />
                        <span className='c1  d-block'>Explore The Best Restaurant in New York</span>
                        <span className='d-block p'>
                            <span>DEC,05,2020</span>
                            <span className='text-info'> BY JOHN</span>
                        </span>
                        <span className='c2 text-info'>STEVENSON</span>
                    </li>
                    <li className="navitem7">
                        <img src={p2} alt="p2" />
                        <span className='c1 d-block'>Explore The Best Restaurant in New York</span>
                        <span className='d-block'>
                            <span>DEC,05,2020</span>
                            <span className='text-info'> BY JOHN</span>
                        </span>
                        <span className='c2 text-info'>STEVENSON</span><br />
                    </li>
                    <li className="navitem7">
                        <img src={p3} alt="p3" />
                        <span className='c1 d-block'>Explore The Best Restaurant in New York </span>
                        <span className='d-block'>
                            <span>DEC,05,2020</span>
                            <span className='text-info'> BY JOHN</span>
                        </span>
                        <span className='c2 text-info'>STEVENSON</span>
                    </li>
                    <li className="navitem7">
                        <img src={p4} alt="p4" />
                        <span className='c1 d-block'>Explore The Best Restaurant in New York</span>
                        <span className='d-block '>
                            <span>DEC,05,2020</span>
                            <span className='text-info'> BY JOHN</span>
                        </span>
                        <span className='c2 text-info'>STEVENSON</span>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Card7
