import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link } from 'react-router-dom'
import Baseurl from '../SourceFiles/url';


toast.configure()
const ItemForm = () => {

    const [openModal, setOpenModal] = useState(false)

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [postal, setPostal] = useState("");
    const [quantity, setQuantity] = useState("");
    const [color, setColor] = useState("");
    const [profile, setProfile] = useState("");

    const [emailLogin, setEmailLogin] = useState('')
    const [emailPassword, setEmailPassword] = useState('')


    const [submit, setSubmit] = useState(false);

    const [shouldShow, setShouldShow] = useState(true)

    const submitData = () => {

        if (!name || !phone || !email || !address || !region || !city || !postal) {
            toast.warn('Please fill all fields')
            setSubmit(true)
        }
        else {
            const userObj = {
                name: name,
                phone_number: phone,
                contact_number: contact,
                email: email,
                address: address,
                region: region,
                city: city,
                postal_code: postal,
                quantity: quantity,
                color: color,
                profile_pic: profile
            }
            axios.post(`${Baseurl}buy_item`, userObj)
                .then(res => {
                    toast.info("Order Confirmed!")
                    setSubmit(true)
                    setOpenModal(true)
                    // setInterval(() => {
                    //     window.location.reload(true)
                    // }, 2000)
                    console.log(res)
                })
                .catch(err => {
                    toast.warn("Error while submitting response");
                    console.log(err)
                })
        }
    }

    const loginData = () => {
if( !emailLogin || !emailPassword ){
toast.warn('Please fill all fields')
}
else if(!emailLogin && emailPassword=='' ){
    toast.warn('Please enter your email')
}
else if(emailLogin=='' && !emailPassword){
    toast.warn('Please enter your password')
}
else{
    const loginData = () => {
        const userobj = {
            email : emailLogin,
            password : emailPassword
        }
        axios.post(`${Baseurl}/login` , userobj)
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
    }

    function oncloseModal() {
        setShouldShow((prev) => !prev)
    }

    function SignUp() {
        return (
            <div className='card-body'>
                <div className='d-flex'>
                    <div className=' mt-1'>
                        <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                    </div>
                    <button onClick={() => {
                        oncloseModal(false)
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
                    <Link to='/SignIn' id="emailHelp" className="form-text mt-3"></Link>

                    <div className="border-button ms-auto btnAnimate">
                        <a href="#" target="_blank">Sign Up</a>
                    </div>

                </div>
            </div>
        )
    }

    function SingIn() {
        return (
            <div className='card-body'>
                <div className='d-flex'>
                    <div className=' mt-3'>
                        <img src="./source/assets/images/logo.png" style={{ width: "115px" }} alt="" />
                    </div>
                    <button className='btn btn-outline-danger btn-sm ms-auto mt-2' onClick={() => {
                        oncloseModal(false)
                    }}>X</button>
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

                <div className='d-flex '>
                    <a id="emailHelp" className="form-text mt-3 me-2">Welcome Back To our site</a>

                    &nbsp;&nbsp;<div className="me-4 border-button ms-auto btnAnimate">
                        <a onClick={loginData} className='text-white'>Login</a>
                    </div>
                </div>

            </div>
        )
    }

    function RenderFunction() {
        return (
            <SingIn />
        )
    }

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => { topFunction() }, [])

    return (
        <div>
            <Modal open={openModal} >
                <div className='card-body'>
                    <button onClick={() => setOpenModal(false)} className='btn btn-sm btn-danger float-end'>X</button>
                    <div className="row">
                        <h3 className="text-center mt-2">YOUR ORDER HAS BEEN RECEIVED!</h3>
                        <h4 className="text-center mt-2">Thank you for your purchasing</h4>
                        <p className="text-center">Your order id # is: 000023</p>
                        <p className="text-center mt-3">You will receive an order confirmation email with details of your order &#128512;</p>
                        <h2 className='mt-3 text-center'>Do You want to Create your Digital Website? </h2>
                        <div className='mx-auto'>

                            <Link to='/UserForm' className="btn btn-secondary float-end mt-4">Yes sure!</Link>
                            <button onClick={() => setOpenModal(false)} className="btn btn-danger float-end me-2 mt-4">Maybe Later</button>
                        </div>
                    </div>

                </div>
            </Modal>

            <Modal open={shouldShow} >
                <RenderFunction />
            </Modal>

            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className=''>Home &gt; <a href="#">Shop</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-details-page">
                <div className="container">
                    <div className="row">

                        <div className='contactWhatsapp card-body col-lg-2' >
                            <div className='d-flex'>
                                <a className='text-white' target={'_blank'} href="tel:03034450790" >Buy through Whatsapp</a>
                                <img src="./source/assets/images/whatsapp-color-icon.png" alt="whatsapp icon" style={{ height: "40px", width: "40px" }} />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2>Apply For <em>Your Item</em> Here.</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div id="contact" >
                                <div className="row">
                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc", borderRadius: "10px" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>Digi Card:
                                    </h3>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Name*</label>
                                            <input onChange={(e) => setName(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Ex. Ali Ahmed" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Phone Number*</label>
                                            <input onChange={(e) => setPhone(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: phone === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your current phone no." autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Secondary Number</label>
                                            <input onChange={(e) => setContact(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Enter your whatsapp number" autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Email*</label>
                                            <input onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: email === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder='Ex. user@mail.com' autoComplete="on" type='email' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Address</label>
                                            <textarea className="form-control text-white" onChange={(e) => setAddress(e.target.value)} style={{ borderRadius: "16px", backgroundColor: '#282b2f', borderColor: address === '' && submit === true ? 'red' : '#404245', borderRadius: "20px" }} id="exampleFormControlTextarea1" rows={7} placeholder="Enter your shipping method ..." defaultValue={""} />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Country, Region</label>
                                            <input onChange={(e) => setRegion(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: region === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your region" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">City*</label>
                                            <input onChange={(e) => setCity(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: city === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your current city" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Postal Code*</label>
                                            <input onChange={(e) => setPostal(e.target.value)} style={{ borderRadius: "16px", backgroundColor: "#282b2f", borderColor: postal === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your city Postal code" autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="file"  >Upload Profile Picture*</label>
                                            <input onChange={(e) => setProfile(e.target.files[0])} type="file" id="file" name="myfiles[]" multiple />
                                        </fieldset>
                                    </div>

                                    <div class="col-lg-6 mx-auto">
                                        <fieldset>
                                            <button onClick={() => { submitData() }} type="submit" id="form-submit" class="orange-button" >Submit Your Applying</button>
                                        </fieldset>
                                    </div>
                                    {/* setOpenModal(true); */}


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemForm