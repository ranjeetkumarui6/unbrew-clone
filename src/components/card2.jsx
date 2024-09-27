import React from 'react'
import './card2.css'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'

const Card2 = () => {
    return (
        <>
            <div className="row secondrow ">
                <div className="card2">
                <ul className="col-sm d-flex flex-wrap justify-content-center cardbody">
                    <li className="navitem">
                    <div className="logos1 h">
                        <ul>
                           <li><i className='fa fa-facebook'></i></li>
                           <li><i className='fa fa-twitter'></i></li>
                           <li><i className='fa fa-instagram'></i></li>
                           <li><i className='fa fa-google-plus'></i></li>
                        </ul>
                    </div>
                        <img src={p1} alt="p1" /><br /><br />
                        <span className='c1 d-block'>Adrian Molises</span>
                        <span className='c2'>CEO, Founder & Developer</span><br />
                    </li>
                    <li className="navitem">
                    <div className="logos1 h">
                        <ul>
                           <li><i className='fa fa-facebook'></i></li>
                           <li><i className='fa fa-twitter'></i></li>
                           <li><i className='fa fa-instagram'></i></li>
                           <li><i className='fa fa-google-plus'></i></li>
                        </ul>
                    </div>
                        <img src={p2} alt="p2" /><br /><br />
                        <span className='c1 d-block'>Arthur MaGregor</span>
                        <span className='c2'>CEO, Founder & Developer</span><br />
                    </li>
                    <li className="navitem">
                    <div className="logos1 h">
                        <ul>
                           <li><i className='fa fa-facebook'></i></li>
                           <li><i className='fa fa-twitter'></i></li>
                           <li><i className='fa fa-instagram'></i></li>
                           <li><i className='fa fa-google-plus'></i></li>
                        </ul>
                    </div>
                        <img src={p3} alt="p3" /><br /><br />
                        <span className='c1 d-block'>Anna Hanzen</span>
                        <span className='c2'>CEO, Founder & Developer</span><br />
                    </li>
                    <li className="navitem">
                    <div className="logos1 h">
                        <ul>
                           <li><i className='fa fa-facebook'></i></li>
                           <li><i className='fa fa-twitter'></i></li>
                           <li><i className='fa fa-instagram'></i></li>
                           <li><i className='fa fa-google-plus'></i></li>
                        </ul>
                    </div>
                        <img src={p4} alt="p4" /><br /><br />
                        <span className='c1 d-block'>Brian Wooden</span>
                        <span className='c2'>CEO, Founder & Developer</span><br />
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Card2
