import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'

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


  const profileData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${Baseurl}getdata/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
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
        setCover(result.cover)
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
                <a href={`${facebook}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-facebook" /></p>
                    <p className='text-white ms-auto mt-1'>My facebook Page</p>
                  </div>
                </a>
                <a href={`${instagram}`} target="_blank" >
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-instagram" /></p>
                    <p className='text-white ms-auto mt-1'>faraz.mahmood.1</p>
                  </div>
                </a>
                <a href={`${twitter}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-twitter" /></p>
                    <p className='text-white ms-auto mt-1'>faraz.mahmood@twitter.com</p>
                  </div>
                </a>
                <a href={`${snapchat}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-snapchat" /></p>
                    <p className='text-white ms-auto mt-1'>username.user</p>
                  </div>
                </a>
                <a href={`${telegram}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-telegram" /></p>
                    <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                  </div>
                </a>
              </div>

              <div className='col-lg-5 me-auto'>
                <a href={`${tiktok}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-tiktok" /></p>
                    <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                  </div>
                </a>

                <a href={`${skype}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-skype" /></p>
                    <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                  </div>
                </a>
                <a href={`${pintrest}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-brands fa-pinterest" /></p>
                    <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                  </div>
                </a>
                <a href={`${mail}`} target="_blank">
                  <div className='card-body d-flex mt-2 profileCard'>
                    <p style={{ color: "#7453fc" }}><i className="fa-2x mt-1 fa-solid fa-envelope" /></p>
                    <p className='text-white ms-auto mt-1'>user.user@xyz</p>
                  </div>
                </a>
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
            <div className="row">
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'>Information about me</h1>
                  <h3 className='mt-3' style={{ color: "#7453fc" }}>Bio:</h3>
                  <p className='mt-3'>I'm a Web Developer, I love to create beautiful and functional websitesit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. amet consectetur adipisicing.</p>
                  <h3 className='mt-3' style={{ color: "#7453fc" }}>Description:</h3>
                  <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est quae vel architecto magni odit eligendi, temporibus accusantium qui maiores maxime. Quo repellat numquam, maxime ullam quidem soluta fugit fugiat dolorem voluptatem impedit provident officia facere accusamus earum repellendus culpa optio porro consequuntur harum cumque. Culpa deserunt reiciendis quasi labore.</p>
                  <button className='buttonx w-25 mt-4 p-3' >View CV</button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'>Contact me</h1>
                  <div className='d-flex mt-3'>
                    <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-phone" /></h2>
                    <p className='mt-3 ms-auto'>+923034450790</p>
                  </div>
                  <div className='d-flex mt-3'>
                    <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-book" /></h2>
                    <p className='mt-3 ms-auto'>335-C Guldasht Town, Lahore</p>
                  </div>
                  <div className='d-flex mt-3'>
                    <h2 style={{ color: "#7453fc" }}><i className="fa-solid fa-address-card" /></h2>
                    <p className='mt-2 ms-auto'>36402-8953372-1</p>
                  </div>
                  <div className='d-flex mt-3'>
                    <h2 className='' style={{ color: "#7453fc" }}><i className="fa-solid fa-location-dot" /></h2>
                    <p className='mt-2 ms-auto'>Lahore, Pakistan</p>
                  </div>
                </div>
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
            </div>
          </div>
        </>
      )
    }
    else {
      console.log('returnFunction')
    }
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

  useEffect(() => { topFunction(); profileData() }, [])

  return (
    <div>
      <div className="CoverImage" style={{ backgroundImage: "url(./source/assets/images/heading-bg.jpg)" }}>
      </div>

      <div className="darkbg" style={{ backgroundImage: "url(./source/assets/images/dark-bg.jpg)" }}>
        <div className="container">
          <div className='col-lg-1 ms-auto mt-5 buttonProfile'>
            <button onClick={() => setProfile("userProfile")} className='btn  buttonx actives rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></button>
            <button onClick={() => setProfile("Portfolio")} className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></button>
            <button onClick={() => setProfile("About")} className=' btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></button>
            <button onClick={() => setProfile("Social")} className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></button>
          </div>

          <div className="row">

            <div className='col-lg-4' >
              <img src={`${Imagesurl}${pic}`} className='profileImage' alt="profile image" />
            </div>

            <div className="col-lg-6 me-auto">
              <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
              <h1 className='mt-2 text-center'>{name}</h1>
              <h2 className='mt-3 text-center'>{profession}</h2>
              <p className='mt-3 text-center'>{bio}</p>
              {/* <button className='buttonx w-25 mt-4 p-3' >View CV</button> */}
            </div>
          </div>

          <ReturnData />

        </div>
      </div>
    </div >
  )
}

export default UserProfile