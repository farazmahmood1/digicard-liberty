import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Baseurl from '../SourceFiles/url'
import { Modal } from 'pretty-modal'


const SignInUser = () => {

    const [emailLogin, setEmailLogin] = useState('')
    const [emailPassword, setEmailPassword] = useState('')
    const [emailvalidate, setEmailValidate] = useState(false)


    const loginData = () => {
        if (!emailLogin || !emailPassword) {
            setEmailValidate(true)
            toast.warn('Please fill all fields')
        }
        else {
            const userobj = {
                email: emailLogin,
                password: emailPassword
            }
            axios.post(`${Baseurl}/login`, userobj)
                .then(res => {
                    toast.info('Email login successfully')
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    toast.warn('Error while loging in')
                })
        }
    }
    return (
        <div>

            <Modal>
                <div className='card-body'>
                    <div className='d-flex'>
                        <div className=' mt-3'>
                            <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                        </div>
                        <button className='btn btn-outline-danger btn-sm ms-auto mt-2' >X</button>
                    </div>
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control text-white" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#23222D", borderColor: emailLogin === "" && emailvalidate === true ? 'red' : "#9254F3" }} />
                    </div>
                    <div className="mb-3 mt-4">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input type="password" className="form-control text-white" id="exampleInputPassword1" style={{ backgroundColor: "#23222D", borderColor: emailPassword === "" && emailvalidate === true ? "red" : '#9254F3' }} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-white" id="exampleCheck1" style={{ backgroundColor: "#23222D", borderColor: "#9254F3" }} />
                        <label className="form-check-label text-white" htmlFor="exampleCheck1" >Check me out</label>
                    </div>

                    <div className='d-flex '>
                        <a id="emailHelp" className="form-text mt-3 me-2">Welcome Back To our site</a>
                        &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate">
                            <a onClick={loginData} className='text-white'>Login</a>
                        </div>
                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default SignInUser