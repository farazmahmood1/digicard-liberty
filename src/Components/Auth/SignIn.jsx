import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



const SignIn = () => {


    return (
        <div>
            <div>
              
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card' style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)", borderRadius: "15px" }}>
                                <div className='card-body'>
                                    <div className='col-lg-12 d-flex justify-content-center mt-3'>
                                        <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                                    </div>

                                    <div className="mb-3 mt-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                                        <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                                        <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                        <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                                    </div>

                                    <div className='d-flex  me-3'>
                                        <a id="emailHelp" className="form-text mt-3">Don'y Have Account, Sign Up?</a>

                                        <div className="border-button ms-auto">
                                            <a href="#" target="_blank">Login</a>
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

export default SignIn