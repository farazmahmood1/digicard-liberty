import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Modal } from 'pretty-modal'
import Baseurl from '../SourceFiles/url'

const SignUpUser = () => {

    const [signUpName, setSignUpName] = useState('')
    const [lastn, setLastn] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')

    const [fieldStatus, setFieldStatus] = useState(false)

    const SignupData = () => {
        if (!signUpName || !lastn || !signUpEmail || !password || !confirmPassword) {
            toast.warn('please fill all fields')
            setFieldStatus(true)
        }
        else {
            const userObj = {
                firstname: signUpName,
                lastname: lastn,
                email: signUpEmail,
                password: password,
                password_confirmation: confirmPassword
            }
            axios.post(`${Baseurl}createcustomer`, userObj)
                .then(res => {
                    console.log(res)
                    toast.info('Data added successfully')
                })
                .catch(err => {
                    console.log(err)
                    toast.warn('Error while registering')
                })
        }
    }

    return (
        <div>
            <Modal>
                <div className='card-body'>
                    <div className='d-flex'>
                        <div className=' mt-1'>
                            <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                        </div>
                        <button onClick={() => {
                            // oncloseModal(false)
                        }} className='btn btn-outline-danger btn-sm ms-auto mt-1'>X</button>
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
                        <a id="emailHelp" className="form-text mt-3"></a>

                        <div className="border-button ms-auto btnAnimate">
                            {/* <a className='text-white' onClick={SignupData}>Sign Up</a> */}
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SignUpUser