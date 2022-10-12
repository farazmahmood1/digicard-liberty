import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6></h6>
                            <h2>Saqib Hussain.</h2>
                            <span className=''>Profile &gt; <a href="#"> About</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="currently-market">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-5">
                                <div className="section-heading">
                                    <div className="line-dec" />
                                    <h1 className='mt-2'>Information about me</h1>
                                    <h3 className='mt-3' style={{ color: "#7453fc" }}>Bio:</h3>
                                    <p className='mt-3'>I'm a Web Developer, I love to create beautiful and functional websitesit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. amet consectetur adipisicing.</p>
                                    <h3 className='mt-3' style={{ color: "#7453fc" }}>Description:</h3>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est quae vel architecto magni odit eligendi, temporibus accusantium qui maiores maxime. Quo repellat numquam, maxime ullam quidem soluta fugit fugiat dolorem voluptatem impedit provident officia facere accusamus earum repellendus culpa optio porro consequuntur harum cumque. Culpa deserunt reiciendis quasi labore.</p>
                                    <button className='buttonx w-25 mt-4 p-3' >View CV</button>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="section-heading">
                                    <div className="line-dec" />
                                    <h1 className='mt-2'>Contact me</h1>
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-phone" /></h2>
                                        <p className='mt-3 ms-auto'>+923034450790</p>
                                    </div>
                                    <div className='d-flex mt-3'>

                                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-book" /></h2>
                                        <p className='mt-3 ms-auto'>335-C Guldasht Town, Lahore</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-card" /></h2>
                                        <p className='mt-2 ms-auto'>36402-8953372-1</p>
                                    </div>
                                    <div className='d-flex mt-3'>

                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-solid fa-location-dot" /></h2>
                                        <p className='mt-2 ms-auto'>Lahore, Pakistan</p>
                                    </div>

                                </div>
                            </div>

                            <div className='col-lg-1 ms-3 buttonProfile'>
              <Link to='/UserProfile' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-house p-2" /></Link>
                <Link to='/Portfolio' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-newspaper p-2" /></Link>
                <Link to='/About' className=' btn text-white border border-white rounded-pill'><i className="fa-solid fa-user p-2" /></Link>
                <Link to='/Social' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-envelope p-2" /></Link>

              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About