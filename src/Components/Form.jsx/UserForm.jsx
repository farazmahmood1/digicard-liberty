import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link } from 'react-router-dom'
import Baseurl from '../SourceFiles/url';

toast.configure()
const UserForm = () => {

    const [name, Setname] = useState("");
    const [gender, setGender] = useState('Male')
    const [phone, Setphone] = useState("");
    const [cnic, setCnic] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [whatsappbuss, setWhatsappbuss] = useState("");
    const [address, setAddress] = useState("");
    const [profession, setProfession] = useState('')
    const [designation, setDesignation] = useState('')
    const [cover, setCover] = useState("");
    const [profile, setProfile] = useState("");
    const [email, setEmail] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("")
    const [twiter, setTwiter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [telegram, setTelegram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [skype, setSkype] = useState("");
    const [pinterest, setPintreset] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState("");
    const [religion, setReligion] = useState("Islam");
    const [region, setRegion] = useState("");
    const [shortdisc, setShortDisc] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [stackoverflow, setStackoverflow] = useState("");
    const [fiver, setFiver] = useState("");
    const [upwork, setUpwork] = useState("");
    const [cv, setCv] = useState("");

    const [submit, setSubmit] = useState(false);
    const submitData = () => {

        if (!profile || !name || !cnic || !profession || !bio || !region || !shortdisc) {
            setSubmit(true)
            toast.warn('Please fill All fields')
        }
        else {

            const userobj = {
                profile_photo: profile,
                cover_photo: cover,
                name: name,
                phone: phone,
                gmail: email,
                snapchat: snapchat,
                instagram: instagram,
                linkedin: linkedin,
                twitter: twiter,
                github: github,
                facebook: facebook,
                bio: bio,
                short_desc: shortdisc,
                whatsapp: whatsapp,
                whatsapp_b: whatsappbuss,
                telegram: telegram,
                tiktok: tiktok,
                skype: skype,
                printest: pinterest,
                age: age,
                religion: religion,
                region: region,
                cnic: cnic,
                stackoverflow: stackoverflow,
                fiverr: fiver,
                upword: upwork,
                gender: gender,
                profession: profession,
                designation: designation,
                cv: cv,
                address: address
            }

            axios.post(`${Baseurl}adddata`, userobj)
                .then((response) => {
                    toast.info("Data sumbitted!")
                    setSubmit(true)
                    // setInterval(() => {
                    //     window.location.reload(true)
                    // }, 2000)
                    console.log(response)
                })
                .catch((error) => {
                    toast.warn("error while submitting");
                    console.log(error)
                })
        }
    }

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <div className="line-dec" />
                                <h2>Apply For <em>Digital Profile</em> Here.</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div id="contact" >
                                <div className="row">
                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>User Info:</h3>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Full Name<span className='text-danger'>*</span></label>
                                            <input onChange={(e) => Setname(e.target.value)} style={{ backgroundColor: "#282b2f", borderRadius: '20px', borderColor: name === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Ex. Ali" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Religion" className="form-label text-white" ><b>Gender</b></label>
                                            <select className="form-select text-white" onChange={(e) => setGender(e.target.value)} style={{ backgroundColor: '#282b2f', borderColor: "#404245", borderRadius: "20px", height: "49px" }} id="validationCustom04" >
                                                <option >Male</option>
                                                <option>Female</option>
                                                <option>Try not to say</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Phone Number</label>
                                            <input onChange={(e) => Setphone(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Enter your current phone no." autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">CNIC Number<span className='text-danger'>*</span></label>
                                            <input onChange={(e) => setCnic(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: cnic === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Enter your cnic without dashes" autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">WhatsApp Number</label>
                                            <input onChange={(e) => setWhatsapp(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Enter your whatsapp number" autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">WhatsApp Business</label>
                                            <input onChange={(e) => setWhatsappbuss(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Enter your business whatsapp number" autoComplete="on" type='number' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Address</label>
                                            <textarea className="form-control text-white" onChange={(e) => setAddress(e.target.value)} style={{ backgroundColor: '#282b2f', borderColor: '#404245', borderRadius: "20px" }} id="exampleFormControlTextarea1" rows={5} placeholder="Enter your current Address ..." defaultValue={""} />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Proffession<span className='text-danger'>*</span></label>
                                            <input onChange={(e) => setProfession(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: profession === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Ex. Designer, Painter" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Designation</label>
                                            <input onChange={(e) => setDesignation(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Ex. Senior Marketer" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="file">Upload Profile Picture<span className='text-danger'>*</span></label>
                                            <div className='m-1' style={{ borderRadius: '20px', border: profile === '' && submit === true ? '1px solid red' : '1px solid #37393C' }}>
                                                <input type="file" onChange={(e) => setProfile(e.target.files[0])} id="file" name="myfiles[]" multiple />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="file">Upload Cover Picture</label>
                                            <input type="file" onChange={(e) => setCover(e.target.files[0])} id="file" name="myfiles[]" multiple />
                                        </fieldset>
                                    </div>

                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>Socials:</h3>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-facebook"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setFacebook(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Facebook profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-instagram"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setInstagram(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Instagram profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2 fa-brands fa-twitter"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setTwiter(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Twitter profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-snapchat"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setSnapchat(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Ex. @ali.ahmed" />
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-telegram"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setTelegram(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Telegram username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2 fa-brands fa-tiktok"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setTiktok(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Tiktok profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-skype"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setSkype(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Twitter cid or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-pinterest-p"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setPintreset(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Pintrest profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-solid  fa-envelope "></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setEmail(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Email address" />
                                            </div>
                                        </fieldset>
                                    </div>

                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>Describtion:</h3>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Bio<span className='text-danger'>*</span></label>
                                            <input onChange={(e) => setBio(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: bio === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Your short bio" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Age</label>
                                            <input onChange={(e) => setAge(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} id="inputName5" placeholder="Enter your age" autoComplete="on" type='number' />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="Religion" className="form-label text-white" required ><b>Religion</b></label>
                                            <select className="form-select text-white" onChange={(e) => setReligion(e.target.value)} style={{ backgroundColor: '#282b2f', borderColor: "#404245", borderRadius: "20px", height: "43px" }} id="validationCustom04" >
                                                <option >Islam</option>
                                                <option>Christanity</option>
                                                <option>Hindu</option>
                                                <option>Sikh</option>
                                                <option>Other</option>
                                            </select>

                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label htmlFor="title">Region<span className='text-danger'>*</span></label>
                                            <input onChange={(e) => setRegion(e.target.value)} style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: region === "" && submit === true ? "red" : '#404245' }} id="inputName5" placeholder="Ex. Lahore / Karachi" autoComplete="on" type='text' />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <fieldset>
                                            <label htmlFor="title">Professional Describtion<span className='text-danger'>*</span></label>
                                            <textarea className="form-control text-white" onChange={(e) => setShortDisc(e.target.value)} style={{ backgroundColor: '#282b2f', borderRadius: "20px", borderColor: shortdisc === "" && submit === true ? "red" : '#404245' }} id="exampleFormControlTextarea1" rows={7} placeholder="Describe yourself ..." defaultValue={""} />
                                            {/* {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""} */}
                                        </fieldset>
                                    </div>

                                    <hr style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                                    <h3 className='mb-4' style={{ color: "#7453fc" }}>Professional Accounts:</h3>

                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-linkedin"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setLinkedin(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Linkedin profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-github"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setGithub(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Github profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-brands fa-stack-overflow"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setStackoverflow(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Stackoverflow profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-dollar-sign"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setFiver(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Fiver profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-4">
                                        <fieldset>
                                            <div className="d-flex">
                                                <i style={{ fontSize: '26px', color: "white", }} className="mt-2 ms-2  fa-dollar-sign"></i>
                                                <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setUpwork(e.target.value)} id="inputEmail5" style={{ borderRadius: '20px', backgroundColor: "#282b2f", borderColor: '#404245' }} placeholder="Upwork profile link or username" />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-7 mx-auto">
                                        <fieldset>
                                            <label htmlFor="file">Upload your resume</label>
                                            <input type="file" onChange={(e) => setCv(e.target.files[0])} id="file" name="myfiles[]" multiple />
                                        </fieldset>
                                    </div>

                                    <div class="col-lg-6 mx-auto">
                                        <fieldset>
                                            <button onClick={submitData} class="orange-button">Submit Your Applying</button>
                                        </fieldset>
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

export default UserForm