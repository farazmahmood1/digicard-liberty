import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'

const UserProfile = () => {

  const location = useLocation()
  const id = location.state.ID
  console.log(id)
  const [userData, setUserData] = useState([])
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [snapchat, setSnapchat] = useState('')
  const [telegram, setTelegram] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [skype, setSkype] = useState('')
  const [mail, setEmail] = useState('')
  const [pintrest, setPintrest] = useState('')
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [bio, setBio] = useState('')
  const [pic, setPic] = useState('')


  const getData = () => {
    axios.get(`${Baseurl}getdata/${id}`)
      .then((res) => {
        setUserData(res.data)
        console.log(res.data)
      })
      .then((err) => {
        console.log(err)
      })

  }

  const profileData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${Baseurl}getdata/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setName(result.name)
        setPic(result.profile_photo)
        setEmail(result.gmail)
        setFacebook(result.facebook)
        setInstagram(result.instagram)
        setSnapchat(result.snapchat)
        setTelegram(result.telegram)
        setPintrest(result.printest)
        setTiktok(result.tiktok)
        setSkype(result.skype)
        setTwitter(result.twiter)
        setProfession(result.profession)
        setBio(result.bio)
      })
      .catch(error => console.log('error', error));
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
            <Link to='/UserProfile' className='btn  buttonx actives rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></Link>
            <Link to='/Portfolio' className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></Link>
            <Link to='/About' className=' btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></Link>
            <Link to='/Social' className='btn hoverBtn buttonx  rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></Link>
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
      </div>
    </div >
  )
}

export default UserProfile