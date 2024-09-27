import React from 'react'
import './footlink.css'
const Footlink = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
        <div className="linkf d-flex flex-wrap">
        <div className="col-sm l">
          <span className='text-info '>Unbrew.</span>
          <p className='mt-5 text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="col-sm">
          <span>Explore</span>
          <ul>
            <li>~About Us</li>
            <li>~Services</li>
            <li>~Works</li>
            <li>~Blog</li>
            <li>~Contact Us</li>
          </ul>
        </div>
        <div className="col-sm">
        <span>Quick Links</span>
          <ul>
            <li>~Contact Us</li>
            <li>~Pricing</li>
            <li>~Term & Condition</li>
            <li>~Privcy</li>
            <li>~Facebook Us</li>
          </ul>
        </div>
        <div className="col-sm">
        <span>Recent Posts</span>
        <ul>
            <li>Creative And Inspiration</li>
            <li>Creative And Inspiration</li>
            <li>Creative And Inspiration</li>
            <li>Creative And Inspiration</li>
          </ul>
        </div>
        <div className="col-sm">
          <ul>
            <li>	203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>	+2 392 3929 210</li>
            <li>	info@yourdomain.com</li>
          </ul>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footlink
