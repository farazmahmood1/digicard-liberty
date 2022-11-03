import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'
import { saveAs } from "file-saver";

const UserProfile = () => {

  const location = useLocation()
  const id = location.state.ID
  console.log(id)

  const [gender, setGender] = useState('')
  const [profDes, setProfDesc] = useState('')
  const [cover, setCover] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setEmail] = useState('')
  const [snapchat, setSnapchat] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [twitter, setTwitter] = useState('')
  const [github, setGithub] = useState('')
  const [facebook, setFacebook] = useState('')
  const [bio, setBio] = useState('')
  const [shortBio, setShortBio] = useState('')
  const [longBio, setLongBio] = useState('')
  const [cv, setCv] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [whatsappBusiness, setWhatsappBusiness] = useState('')
  const [paymentstatus, setWhatsappPayment] = useState('')
  const [telegram, setTelegram] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [skype, setSkype] = useState('')
  const [pintrest, setPintrest] = useState('')
  const [age, setAge] = useState('')
  const [religion, setReligion] = useState('')
  const [region, setRegion] = useState('')
  const [cnic, setCnic] = useState('')
  const [stackoverflow, setStackOverflow] = useState('')
  const [fiver, setFiver] = useState('')
  const [upwork, setUpwork] = useState('')
  const [address, setAdress] = useState('')
  const [profession, setProfession] = useState('')
  const [designation, setDesignation] = useState('')
  const [name, setName] = useState('')
  const [pic, setPic] = useState('')
  const [profile, setProfile] = useState('userProfile')
  const [loader, setLoader] = useState(false)


  console.log(github)
  const profileData = () => {
    setLoader(true)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${Baseurl}getdata/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setLoader(false)
        console.log(result)
        setDesignation(result.designation)
        setProfession(result.profession)
        setAdress(result.address)
        setUpwork(result.upword)
        setFiver(result.fiverr)
        setStackOverflow(result.stackoverflow)
        setCnic(result.cnic)
        setRegion(result.region)
        setReligion(result.religion)
        setAge(result.age)
        setPintrest(result.printest)
        setSkype(result.skype)
        setTiktok(result.tiktok)
        setTelegram(result.telegram)
        setWhatsapp(result.whatsapp)
        setWhatsappBusiness(result.whatsapp_b)
        setCv(result.cv)
        setLongBio(result.long_des)
        setShortBio(result.short_bio)
        setBio(result.bio)
        setFacebook(result.facebook)
        setGithub(result.github)
        setTwitter(result.twiter)
        setTwitter(result.tiwtter)
        setLinkedin(result.linkedin)
        setInstagram(result.instagram)
        setSnapchat(result.snapchat)
        setEmail(result.gmail)
        setPhone(result.phone)
        setName(result.name)
        setCover(result.cover_photo)
        setPic(result.profile_photo)
        setProfDesc(result.professional_desc)
        setGender(result.gender)

      })
      .catch(error => console.log('error', error));
  }

  const ReturnData = () => {
    if (profile === 'userProfile') {
      return (
        <>
          <div>
            <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
            <h2 className='mt-2 text-center'>My Social Accounts</h2>
            <div className='row mt-2'>
              <div className='col-lg-5 ms-auto'>

                <a href={`${whatsapp}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-whatsapp" /></p>
                    <p className='text-white ms-auto mt-1'>My Whatsapp no.</p>
                  </div>
                </a>

                {
                  facebook !== '' ?
                    <>
                      <a href={`${facebook}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-facebook" /></p>
                          <p className='text-white ms-auto mt-1'>My Facebook Account</p>
                        </div>
                      </a>
                    </> :
                    console.log('no facebook link available')
                }

                {
                  instagram !== '' ?
                    <>
                      <a href={`${instagram}`} target="_blank" >
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-instagram" /></p>
                          <p className='text-white ms-auto mt-1'>My Instagram Account</p>
                        </div>
                      </a>
                    </> : console.log('no instagram link avaible')
                }

                {
                  twitter !== '' ?
                    <>
                      <a href={`${twitter}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-twitter" /></p>
                          <p className='text-white ms-auto mt-1'>My Twitter Account</p>
                        </div>
                      </a>
                    </> : console.log('twitter link not avaible')
                }

                {
                  telegram !== '' ?
                    <>
                      <a href={`${telegram}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-telegram" /></p>
                          <p className='text-white ms-auto mt-1'>My telegram Link</p>
                        </div>
                      </a>
                    </> : console.log('no telegram avaible')
                }

              </div>

              <div className='col-lg-5 me-auto'>

                {
                  snapchat !== '' ?
                    <>
                      <a href={`${snapchat}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-snapchat" /></p>
                          <p className='text-white ms-auto mt-1'>My Snapchat Account</p>
                        </div>
                      </a>
                    </> : console.log('no snapchat avaiable')
                }

                {
                  tiktok !== '' ?
                    <>
                      <a href={`${tiktok}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-tiktok" /></p>
                          <p className='text-white ms-auto mt-1'>My tiktok Account</p>
                        </div>
                      </a>
                    </> : console.log('no tiktok avaible')
                }


                {
                  skype !== '' ?
                    <>
                      <a href={`${skype}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-skype" /></p>
                          <p className='text-white ms-auto mt-1'>My Skype Account</p>
                        </div>
                      </a>
                    </> : console.log('no skype avaible')
                }

                {
                  pintrest !== '' ?
                    <>
                      <a href={`${pintrest}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-pinterest" /></p>
                          <p className='text-white ms-auto mt-1'>My Pinterest Account</p>
                        </div>
                      </a>
                    </> : console.log('no pinterest avaible')
                }

                {
                  mail !== '' ?
                    <>
                      <a href={`${mail}`} target="_blank">
                        <div className='card-body d-flex mt-2 profileCard'>
                          <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-solid fa-envelope" /></p>
                          <p className='text-white ms-auto mt-1'>My Email Account</p>
                        </div>
                      </a>
                    </> : console.log('mail is not avaiable')
                }


              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'Portfolio') {
      return (
        <>
          <div>
            <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
            <h2 className='mt-2 text-center'>My Portfolio</h2>
            <div className="col-lg-12">
              <div className="row">
                <div className='col-lg-4 p-3'>
                  <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                </div>
                <div className='col-lg-4 p-3'>
                  <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                </div>
                <div className='col-lg-4 p-3'>
                  <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'About') {
      return (
        <>
          <div>
            <div className="row mt-3">
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />

                  {designation !== '' || bio !== '' ?
                    <>
                      <h1 className='mt-2'>Information about me</h1>
                    </>
                    : console.log('bio, designation , longbio')
                  }

                  {
                    designation !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Designation:</h3>
                        <p className='mt-3'>{designation}</p>
                      </>
                      :
                      console.log('no designation avaiable')
                  }

                  {
                    bio !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Bio:</h3>
                        <p className='mt-3'>{bio}</p>
                      </> :
                      console.log('no bio avaiable')
                  }

                  {
                    shortBio !== '' ?
                      <>
                        <h3 className='mt-3' style={{ color: "#7453fc" }}>Description:</h3>
                        <p className='mt-3'>{shortBio}</p>
                      </>
                      :
                      console.log('No describtion avaiable')
                  }

                </div>
              </div>
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'>Contact me</h1>

                  {
                    phone !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-phone" /></h2>
                          <p className='mt-3 ms-auto'>{phone}</p>
                        </div>
                      </> : console.log('no phone avaiable')
                  }

                  {
                    cnic !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-card" /></h2>
                          <p className='mt-2 ms-auto'>{cnic}</p>
                        </div>
                      </> : console.log('no cnic avaiable')
                  }

                  {
                    address !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-book" /></h2>
                          <p className='mt-3 ms-auto'>{address}</p>
                        </div>
                      </> : console.log('no address avaiable')
                  }

                  {
                    region !== '' ?
                      <>
                        <div className='d-flex mt-3'>
                          <h2><i className="fa-solid fa-location-dot" style={{ color: "#7453fc" }} /> <span style={{ fontSize: '13px' }}>Region</span></h2>
                          <p className='mt-2 ms-auto'>{region}</p>
                        </div>
                      </> : console.log('no region avaiable')
                  }

                </div>
                {
                  cv ?
                    <button onClick={saveFile} className='buttonx w-25 mt-4 p-3' >View CV</button> : console.log('no cv is avavialble')
                }
              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'Social') {
      return (
        <>
          <div>
            <div className="row">

              <div className="col-lg-6 mx-auto mt-4">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'>My Professional Accounts</h1>

                  {
                    whatsappBusiness !== '' ?
                      <>
                        <a href={`${whatsappBusiness}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-whatsapp" /></p>
                            <p className='text-white ms-auto mt-1'>My Business Whatsapp</p>
                          </div>
                        </a>
                      </> : console.log('whatsappBusiines is not avaiable')
                  }

                  {
                    linkedin !== '' ?
                      <>
                        <a href={`${linkedin}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-linkedin" /></p>
                            <p className='text-white ms-auto mt-1'>My LinkedIn Account</p>
                          </div>
                        </a>
                      </> : console.log('no linkdein avaiable')
                  }

                  {
                    github !== '' ?
                      <>
                        <a href={`${github}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-github" /></p>
                            <p className='text-white ms-auto mt-1'>My Github Account</p>
                          </div>
                        </a>
                      </> : console.log('no github available')
                  }

                  {
                    stackoverflow !== '' ?
                      <>
                        <a href={`${stackoverflow}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard'>
                            <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-stack-overflow" /></p>
                            <p className='text-white ms-auto mt-1'>My StackOverflow Account</p>
                          </div>
                        </a>
                      </> : console.log('stackoverflow is not avaible')
                  }

                  {
                    upwork !== '' ?
                      <>
                        <a href={`${upwork}`} target="_blank">
                          <div className='card-body d-flex mt-2 profileCard' style={{ height: "63px" }}>
                            <p style={{ color: "#7453fc" }}><img src="./source/assets/images/upwork.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                            <p className='text-white ms-auto mt-1'>My Upwork Account</p>
                          </div>
                        </a>
                      </> : console.log('no upwork avaiable')
                  }

                  {fiver !== '' ?
                    <>
                      <a href={`${fiver}`} target="_blank">
                        <div className='card-body d-flex mt-2  profileCard' style={{ height: "63px" }}>
                          <p style={{ color: "#7453fc" }}> <img src="./source/assets/images/fiverr.png" className='mt-1' style={{ height: "29px", width: "29px" }} alt="" /> </p>
                          <p className='text-white ms-auto mt-1'>My Fiver Account</p>
                        </div>
                      </a>
                    </> : console.log('no fiver avaiablle')
                  }


                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
    else {
      console.log('returnFunction')
    }
  }

  const saveFile = () => {
    saveAs(`${Imagesurl}${cv}`);
  };

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

  useEffect(() => { topFunction(); profileData() }, [])

  return (
    <div>
      <div className="CoverImage" style={{ backgroundImage: cover === '' ? 'url(./source/assets/images/heading-bg.jpg)' : `url(${Imagesurl}${cover})` }}>
      </div>

      <div className="darkbg" style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)" }}>
        <div className="container">
          <div className='col-lg-1 ms-auto mt-5 buttonProfile'>
            <button onClick={() => setProfile("userProfile")} className={profile === 'userProfile' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></button>
            <button onClick={() => setProfile("Portfolio")} className={profile === 'Portfolio' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></button>
            <button onClick={() => setProfile("About")} className={profile === 'About' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></button>
            <button onClick={() => setProfile("Social")} className={profile === 'Social' ? 'btn  buttonx actives rounded-pill me-2 mb-2' : 'btn hoverBtn buttonx rounded-pill me-2 mb-2'} style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></button>
          </div>

          <div className="row">

            <div className='col-lg-4' >
              <img src={`${Imagesurl}${pic}`} className='profileImage' alt="profile image" />
            </div>

            <div className="col-lg-6 me-auto">
              <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
              <h1 className='mt-2 text-center'>{name}</h1>
              <p className='text-center' style={{ fontSize: '12px' }}>{phone}</p>
              <h2 className='mt-3 text-center'>{profession}</h2>
              <p className='mt-3 text-center'>{bio}</p>
              {/* <button className='buttonx w-25 mt-4 p-3' >View CV</button> */}
            </div>
          </div>
          {
            loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        {/* <div className="loader">Loading...</div> */}
                        <div className="spinner-border" style={{ width: '5rem', height: '5rem', marginTop: '15em', color: '#7453fc' }} role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>
                <ReturnData />
              </>
          }

        </div>
      </div>
    </div >
  )
}

export default UserProfile