import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({ setOpenSignUp }) => {
    return (
        <div className=''>

            <div className='row'>
                <div className='col-lg-5  ms-auto'>
                    <div className='card  in-left   mainModal mt-5' style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)", borderRadius: "15px", width: "350px" }}>
                        <div className='card-body'>
                            <div className='d-flex'>
                                <div className=' mt-3'>
                                    <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                                </div>
                                <button onClick={() => setOpenSignUp(false)} className='btn btn-outline-danger btn-sm ms-auto mt-2'>X</button>
                            </div>

                            <div className='d-flex mt-5 mb-3'>
                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white">First Name</label>
                                    <input type="text" className="form-control text-white me-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white ">Last Name</label>
                                    <input type="text" className="form-control text-white ms-1" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                                <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-white">Password</label>
                                <input type="password" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                                <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                                <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                            </div>

                            <div className='d-flex  me-3'>
                                <Link to='/SignIn' id="emailHelp" className="form-text mt-3"></Link>

                                <div className="border-button ms-auto btnAnimate">
                                    <a href="#" target="_blank">Sign Up</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp