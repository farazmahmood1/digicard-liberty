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
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-facebook" /></h2>
                                        <p className='mt-3 ms-auto'>faraz.mahmood@facebook.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>

                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-instagram" /></h2>
                                        <p className='mt-3 ms-auto'>faraz.mahmood.1</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-twitter" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@twitter.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-brands fa-snapchat" /></h2>
                                        <p className='mt-2 ms-auto'>username.user</p>
                                    </div>

                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-brands fa-pinterest" /></h2>
                                        <p className='mt-2 ms-auto'>+9823034450790</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-brands fa-telegram" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@tiktok.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-brands fa-tiktok" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-brands fa-skype" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-solid fa-envelope" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@gmail.com</p>
                                    </div>

                                    <button className='buttonx w-25 mt-4 p-3' >View CV</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <div className="line-dec" />
                                    <h1 className='mt-2'>My Professional Accounts</h1>
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-linkedin" /></h2>
                                        <p className='mt-3 ms-auto'>faraz.mahmood@.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>

                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-github" /></h2>
                                        <p className='mt-3 ms-auto'>faraz.mahmood@.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <h2 style={{ color: "#7453fc" }}><i className="fa-brands fa-stack-overflow" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@.com</p>
                                    </div>
                                    <div className='d-flex mt-3'>

                                        <h2 className='' style={{ color: "#7453fc" }}><i className="fa-solid fa-dollar-sign" /></h2>
                                        <p className='mt-2 ms-auto'>faraz.mahmood@facebook.com</p>
                                    </div>

                                </div>
                            </div>

                            <div className='col-lg-1 ms-auto buttonProfile'>
                <Link to='/UserProfile' className='btn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></Link>
                <Link to='/Portfolio' className='btn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></Link>
                <Link to='/About' className=' btn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></Link>
                <Link to='/Social' className='btn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></Link>
              </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social