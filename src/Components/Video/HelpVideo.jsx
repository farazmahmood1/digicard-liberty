import React from 'react'
import { Modal } from 'pretty-modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HelpVideo = () => {

    const [shouldShow, setShouldShow] = useState(false)

    function oncloseModal() {
        setShouldShow((prev) => !prev)
    }

    return (
        <div>
            <Modal
                open={shouldShow}
            >
                <div className='card-body'>
                    <button className='btn btn-outline-danger btn-sm float-end' onClick={() => {
                        oncloseModal()
                    }}>X</button>
                    <div className="row">

                        <div className="col-lg-7">
                            <div>
                                <h4>Get in Touch</h4>
                                <div className='d-flex'>
                                    <div className="">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
                                        <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                    <div className="">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Email</label>
                                        <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Subject</label>
                                    <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Message</label>
                                    <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                                <button className='buttonx'>Submit</button>

                            </div>
                        </div>
                        <div className="col-lg-5 ">
                            <div className='d-flex mt-3'>
                                <h4 className='mt-2'>Contact Us</h4>

                            </div>
                            <p className='mt-2' style={{ color: "#7453fc" }}>We are open for any suggestions</p>
                            <div className='d-flex'>
                                <i class="fa-solid fa-location-dot text-white fa-2x mt-3"></i>
                                &nbsp;&nbsp;<p><strong> Address:</strong> Office#28-29, Heaven Mall Zarrar Shaheed Road, Al-Faisal Town, Lahore Punjab Pakistan</p>
                            </div>
                            <div className='d-flex'>
                                <i class="fa-solid fa-phone  text-white fa-2x mt-3"></i>
                                &nbsp;&nbsp;<p><strong> Contact:</strong>+92 343 453 3851</p>
                            </div>
                            <div className='d-flex'>
                                <i class="fa-solid fa-envelope text-white fa-2x mt-3"></i>
                                &nbsp;&nbsp;<p><strong> Mail:</strong>contact@ussoftprovider.com</p>
                            </div>
                            <div className='d-flex'>
                                <i class="fa-brands fa-chrome text-white fa-2x mt-3"></i>
                                &nbsp;&nbsp;<p><strong> Website:</strong>https://www.alphanites.ussoftprovider.com/</p>
                            </div>
                            <p className='mt-2' style={{ color: "#7453fc" }}>Quantity:</p>
                            <div>

                            </div>
                            <div className='mt-3'>
                                <Link to='/Form' className='buttonx me-2'>Buy</Link>
                                <button className='buttonx '>Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            <div className="categories-collections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="categories">
                                <div className="row d-flex justify-content-center ">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Something wrong while <em>Purshasing</em> products.</h2>
                                            <h5 className='mt-2'><em> Here's a tutorial Video for you </em></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-6 mx-auto helpVideo'>
                                            <iframe width="560" height="315" autoplay="on" src="https://www.youtube.com/embed/el3N6qQjr-I?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-5">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Something's wrong <em>Tell</em> us</h2>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i onClick={() => oncloseModal()} className="fa-solid fa-phone" />
                                            </div>
                                            <h4>Call us</h4>
                                            <div className="icon-button">
                                                <a onClick={() => oncloseModal()}><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope" />
                                            </div>
                                            <h4>Email</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-comment" />
                                            </div>
                                            <h4>Whatsapp</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-address-book" />
                                            </div>
                                            <h4>Address</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpVideo