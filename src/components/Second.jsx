import React from 'react'
import './second.css';
import Card from './card.jsx'
import logo1 from '../assets/market1.jpeg'
import logo2 from '../assets/bussiness1.jpeg'
import logo3 from '../assets/uxux.jpeg'
import logo4 from '../assets/seo1.jpeg'
import logo5 from '../assets/optimization1.jpeg'
import logo6 from '../assets/creative.jpeg'
import pic1 from '../assets/pic.jpg'
import pic2 from '../assets/pic2.svg'
import Card2 from './card2.jsx';
import Card3 from './Card3.jsx';
import c1 from '../assets/p1.jpeg'
import c2 from '../assets/p2.jpeg'
import c3 from '../assets/p3.jpeg'
import i1 from '../assets/i1.jpeg'
import Card4 from './Card4.jsx';
import Card5 from './Card5.jsx';
import Card6 from './Card6.jsx';
import Card7 from './Card7.jsx';
import { IoIosSend } from "react-icons/io";
import Footer from './Footer.jsx';
import Footlink from './Footlink.jsx';


const Second = () => {
    return (
        <>
                <div className="row secondrow">
                    <div className="col-md-4  me-0 pe-0">
                        <div className="serviceleft">
                            <span className='span1'>Our Services</span>
                            <h2>We Provide A Lot of Cool Services</h2><br />
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <br />
                            <p>
                                <span className='s1'>Start A Project</span>

                            </p>
                        </div>
                    </div>
                    <div className=" col-8  ">

                        <div className='d-flex col flex-wrap'>
                            <Card im={logo1} title="Marketing" content="Even the all-powerful Pointing has no control about the blind texts " />
                            <Card im={logo2} title="SEO" content="Even the all-powerful Pointing has no control about the blind texts " />
                            <Card im={logo3} title="UI/UX Design" content="Even the all-powerful Pointing has no control about the blind texts " />
                        {/* </div> */}
                        {/* <div className='d-flex '> */}
                            <Card im={logo4} title="Creative" content="Even the all-powerful Pointing has no control about the blind texts " />
                            <Card im={logo5} title="Optimization" content="Even the all-powerful Pointing has no control about the blind texts " />
                            <Card im={logo6} title="Business Stategy" content="Even the all-powerful Pointing has no control about the blind texts " />
                        </div>

                    </div>


                </div>
                <br /><br />
                <div className="row b " style={{ margin: "30px 50px 30px 50px", height: "200px", padding: "0%" }}>
                    <div className="col-sm   ps-0 pe-0">
                        <img src={pic1} alt="pic1" height="200" width="250px" style={{ margin: "0px" }} />
                    </div>
                    <div className="col   banner">
                        <span>900+</span>
                        <p>Project Done</p>
                    </div>
                    <div className="col  banner">
                        <span>500+</span>
                        <p>Optimize Sites</p>
                    </div>

                    <div className="col   banner">
                        <span>770+</span>
                        <p>Coffee Cups</p>
                    </div>
                    <div className="col   banner">
                        <span>1000+</span>
                        <p>Happy People</p>
                    </div>
                </div>
                <div className="row lm">
                    <div className="col-sm d-flex  flex-warp-6">
                        <img className='img-fluid' src={pic2} alt="pic2" />
                    </div>
                    <div className="col-sm-6 serviceleft1">
                        <span className='span1'>About Us</span>
                        <br />
                        <h3>Unbrew A Digital Agency Company</h3>
                        <br />
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                        <p>    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <br /><br />
                        <p>
                            <span className='s2'>More Aboute Us</span>
                        </p>
                    </div>
                    <div className="col-md-6  serviceleft2">
                        <span className='span2'>Team</span>
                        <br />
                        <h3>Our Digital Experts Team</h3>
                        <br />

                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                </div>
                <Card2 />
                <div className="thirdrow  row">
                    <div className="col-md-6 serviceleft2">
                        <span className='span2'>Testimonial</span>
                        <br />
                        <h3>Happy Customers</h3>
                        <br />

                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                </div>
                <div className="fouthrow row d-flex flex-wrap ms-0 pe-0  mb-5 pb-5">
                    <Card3 ic={i1} para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." im={c1} />
                    <Card3 ic={i1} para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." im={c2} />
                    <Card3 ic={i1} para="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." im={c3} />

                </div>
                <div className="row r2">
                    <div className="fifth"></div>
                    <div className="col-md-6 serviceleft2">
                        <span className='span2'>Testimonial</span>
                        <br />
                        <h3>Happy Customers</h3>
                        <br />

                        <p className='text-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                    <div className="row  flex-wrap r4 me-0">
                    <div className='col-sm  d-flex flex-wrap r44 justify-content-center me-0 p-0'>
                        {/* <div className="col-md-3 d-flex "> */}
                        <Card4 im={logo1} title="24/7 Help Support" content="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." />
                        {/* </div> */}
                        {/* <div className="col-md d-flex flex-wrap"> */}
                        
                        <Card4 im={logo2} title="Private Community" content="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." />
                        {/* </div> */}
                        {/* <div className="col-md d-flex flex-wrap"> */}
                        <Card4 im={logo3} title="Protect Your Profile" content="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." />
                        {/* </div> */}
                        {/* <div className="col-md d-flex flex-wrap"> */}
                       
                        <Card4 im={logo4} title="Easy Management" content="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." />
                        {/* </div> */}
                    </div>
                    </div>
                </div>
                <div className=" row d">
                    <div className="col-md-12 ">
                    <div className="pa">
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                    </div>
                <div className="col-md-12  serviceleft2">
                        <span className='span2'>Our Portfolio</span>
                        <br />
                        <h3>Our Awesome Work</h3>
                        <br />

                        <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                    </div>

                    <Card5/>
                    <div className=" row thirdrow">
                <div className="col-md-6  serviceleft2">
                        <span className='span2 uppercase'>VIEW MORE PORTFOLLIO ~
                        </span>
                        <br />
                        <br />


                    </div>
                    </div>
                    <hr  className='p-0 m-0'/>
                    <div className="row thirdrow ">
                <div className="col-md-6 serviceleft2">
                        <span className='span2'>PRICING</span>
                        <br />
                        <h3>Choose Your Pricing Plan</h3>
                        <br />

                        <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                    </div>
                    <div className="row pe-0">
                    <div  className="col-xxl me-0 d-flex flex-wrap   pb-5">
                        <div className="col-lg d-flex flex-wrap">
                        <Card6 d1=" 49" d2="personal"/>

                        </div>
                        <div className="col-lg d-flex flex-wrap">
                        <Card6 d1=" 79" d2="PROFETIONAL"/>

                        </div>
                        <div className="col-lg d-flex flex-wrap">
                        <Card6 d1=" 109" d2="MEDIUM BUSSINESS"/>

                        </div>
                        <div className="col-lg d-flex flex-wrap">
                        <Card6 d1=" 149" d2="GIGANTIN BUSSINESS"/>

                        </div>
                    </div>
                    </div>
                    <div className="row bgsecondary">
                    <div className="thirdrow">
                    <div className="col-md-6 serviceleft2">
                        <span className='spanb'>Our Blog</span>
                        <br />
                        <h3>Choose Your Pricing Plan</h3>
                        <br />

                        <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <br /><br />

                    </div>
                    </div>
                <Card7 />
                    </div>
                    <div className="row pe-5 ps-5 mb-5 pb-4 bg-primary">
                        <div style={{paddingTop:"30px"}} className="col-md-6  ">
                            <span className='fs-3'>Newsletter - Stay tune and get the latest update</span>
                            <p>Far far away, behind the word mountains</p>
                        </div>
                        <div style={{paddingTop:"80px"}} className="col-md-6 d-inline">
                            <div className="form-group text-white">
                            <input style={{borderTop:"none",borderLeft:"none",borderRight:"none" ,borderBottom:"2px solid white"}} type="text" className='form-control  bg-primary text-white' placeholder='Enter Your Email' />
                            <span className='icon'><IoIosSend /></span>
                            </div>
                        </div>
                    </div>
                    <Footlink/>

                    <Footer/>
      </>
    )
}

export default Second
