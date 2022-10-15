import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
    return (
        <div>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6></h6>
                            <h2>Saqib Hussain.</h2>
                            <span className=''>Profile &gt; <a href="#"> Social Accounts</a></span>
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
                                    <h1 className='mt-2'>My Social Accounts</h1>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-facebook" /></p>
                                        <p className='text-white ms-auto mt-1'>My facebook Page</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-instagram" /></p>
                                        <p className='text-white ms-auto mt-1'>faraz.mahmood.1</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-twitter" /></p>
                                        <p className='text-white ms-auto mt-1'>faraz.mahmood@twitter.com</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-snapchat" /></p>
                                        <p className='text-white ms-auto mt-1'>username.user</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-telegram" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-tiktok" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-skype" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-pinterest" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-solid fa-envelope" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>


                                    <button className='buttonx w-25 mt-4 p-3' >View CV</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <div className="line-dec" />
                                    <h1 className='mt-2'>My Professional Accounts</h1>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-linkedin" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-github" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard'>
                                        <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-stack-overflow" /></p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2 profileCard' style={{ height: "63px" }}>
                                        <p style={{ color: "#7453fc" }}><img src="./source/assets/images/upwork.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                    <div className='card-body d-flex mt-2  profileCard' style={{ height: "63px" }}>
                                        <p style={{ color: "#7453fc" }}> <img src="./source/assets/images/fiverr.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                                        <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                                    </div>

                                </div>
                            </div>

                            <div className='col-lg-1 ms-auto buttonProfile'>
                                <Link to='/UserProfile' className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></Link>
                                <Link to='/Portfolio' className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></Link>
                                <Link to='/About' className=' btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></Link>
                                <Link to='/Social' className='btn  buttonx actives rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social