import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'
import { saveAs } from "file-saver";
import coverUrl from '../SourceFiles/coverUrl'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp'
import axios from 'axios';
import allImagesUrl from '../SourceFiles/baseimageurl';
import coverImage from '../SourceFiles/heading-bg.jpg'
import { useSearchParams, useParams } from 'react-router-dom';

const UserProfile = (id) => {
  console.log('UserProfileeee', id.id)
  const Id = id.id
  // const params = useParams();
  const { userId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  // const location = useLocation()
  // const id = location.state.ID

  // const queryParams = new URLSearchParams(window.location.search);
  // const id = queryParams.get('id');
  //   let { id } = useParams();
  // console.log(id)

  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)

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

  const [datas, setDatas] = useState([])
  const [userID, setUserID] = useState()






  useEffect(() => {
    profileData(); getImages();

  }, [Id]
  )





  const profileData = () => {
    setLoader(true)
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch(`${Baseurl}fetch_webdata_by_userid/${String(Id)}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setLoader(false)
        console.log(result)
        setDesignation(result.Data.designation)
        setProfession(result.Data.profession)
        setAdress(result.Data.address)
        setUpwork(result.Data.upword)
        setFiver(result.Data.fiverr)
        setStackOverflow(result.Data.stackoverflow)
        setCnic(result.Data.cnic)
        setRegion(result.Data.region)
        setReligion(result.Data.religion)
        setAge(result.Data.age)
        setPintrest(result.Data.printest)
        setSkype(result.Data.skype)
        setTiktok(result.Data.tiktok)
        setTelegram(result.Data.telegram)
        setWhatsapp(result.Data.whatsapp)
        setWhatsappBusiness(result.Data.whatsapp_b)
        setCv(result.Data.cv)
        setLongBio(result.Data.long_des)
        setShortBio(result.Data.short_bio)
        setBio(result.Data.bio)
        setFacebook(result.Data.facebook)
        setGithub(result.Data.github)
        setTwitter(result.Data.twiter)
        setTwitter(result.Data.tiwtter)
        setLinkedin(result.Data.linkedin)
        setInstagram(result.Data.instagram)
        setSnapchat(result.Data.snapchat)
        setEmail(result.Data.gmail)
        setPhone(result.Data.phone)
        setName(result.Data.name)
        setCover(result.Data.cover_photo)
        setPic(result.Data.profile_photo)
        setProfDesc(result.Data.professional_desc)
        setGender(result.Data.gender)

      })
      .catch(error => console.log('error', error));
  }

  const getImages = () => {
    // axios.get(`${Baseurl}get_image/${Id}`)
    //   .then((res) => {
    //     console.log(res)
    //     setDatas(res.data.Data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })



    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${Baseurl}get_image/${String(Id)}`, requestOptions)
      .then(response => response.json())
      .then(result => {

        setDatas(result.Data)
        console.log(result)
      })
      .catch(error => console.log('error', error));







  }

  // const SetLocalLogin = async () => {
  //   try {
  //     let user = await localStorage.getItem('user');
  //     let parsed_user = JSON.parse(user)
  //     if (parsed_user) {
  //       setUserID(parsed_user.id)
  //     }
  //   } catch {
  //     return null;
  //   }
  // }


  const ReturnData = () => {
    if (profile === 'userProfile') {
      return (
        <>
          <div>
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '50px' }} />
            <h2 className='mt-2 text-center'>My Social Accounts</h2>
            <div className='row mt-2'>
              <div className='col-lg-5 mx-auto'>

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
            <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc", marginTop: '50px' }} />
            <h2 className='mt-2 text-center'>My Portfolio</h2>
            <div className="col-lg-12">
              <div className="row">

                {
                  datas.map((items) => {
                    return (
                      <>
                        <div className='col-lg-4 p-3'>
                          <img src={`${allImagesUrl.itemImage}${items.image}`} style={{ height: "350px", borderRadius: "10px" }} alt="" />
                        </div>
                      </>
                    )
                  })
                }
                {
                  <div className='col-lg-4 p-3'>
                    <img src={`${allImagesUrl.itemImage}${pic}`} style={{ height: "350px", borderRadius: "10px" }} alt="" />
                  </div>
                }

              </div>
            </div>
          </div>
        </>
      )
    }
    else if (profile === 'About') {
      return (
        <>
          <div style={{ marginTop: '50px' }}>
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
                      </> : console.log('no CNIC avaiable')
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
                          <h2><i className="fa-solid fa-location-dot" style={{ color: "#7453fc" }} /> <span style={{ fontSize: '13px' }}></span></h2>
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
          <div style={{ marginTop: '50px' }}>
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
      return null;
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

  useEffect(() => {
    topFunction();





  }, [])

  return (
    <div>

      {/* Navbar */}
      <div>
        <header className="header-area header-sticky" >
          <div className='container'>
            <div className='container-fluid' style={{ borderRadius: '50px', backgroundColor: '#fff' }} >
              <nav className="navbar  navbar-expand-lg navbar-light " style={{ borderRadius: "50px", backgroundColor: '#fff' }}>
                <div className="container-fluid">
                  <p >
                    <Link to='/' className="logo">
                      <img src="./source/assets/images/logo.png" alt='icon_image' style={{ height: "54px" }} />
                    </Link>
                  </p>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav  ms-auto">
                      <li className="nav-item ">
                        <p className={'nav-link me-4 '} aria-current="page"><b><Link to='/' className='text-secondary' >Home</Link></b></p>
                      </li>
                      <li className="nav-item ">
                        <p className={'nav-link me-4 '} aria-current="page"><b> <Link state={{ values: 'Card' }} className='text-secondary' to='/ShopMain'>Shop</Link></b></p>
                      </li>
                      <li className="nav-item ">
                        <p className={'nav-link me-4 enjoy'} aria-current="page"><b> <Link to='/ProfileMain' className='text-secondary' >Profiles</Link> </b></p>
                      </li>

                      <li className="nav-item ">
                        <p className={'nav-link borderLogin  me-4 '} aria-current="page"><b> <p onClick={() => setOpenModal(true)} className='text-secondary' style={{ cursor: 'pointer' }}  >Login</p> </b></p>
                      </li>

                      <li className="nav-item ">
                        <p className={'nav-link borderSignup me-4 '} aria-current="page"><b> <p onClick={() => setOpenSignUp(true)} style={{ cursor: 'pointer' }} className='text-white' >SIgn up for free</p> </b></p>
                      </li>

                      <li className="nav-item dropdown" >
                        <a className="nav-link dropdown-toggle mt-1" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa-solid fa-gear" />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                          <li className='d-flex updateNav'><i className="fa-solid fa-pen mt-2 ms-2" />
                            <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">Update Profile</a>
                          </li>
                          <li className='d-flex updateNav'>
                            <i className="fa-solid fa-newspaper mt-2 ms-2" />
                            <a className="dropdown-item updateNav" target={'_blank'} href="https://digicarduserdashboard.netlify.app/">What`s New</a>
                          </li>
                          <li className='d-flex updateNav'>
                            <i className="fa-solid fa-question mt-2 ms-2" />
                            <Link className="dropdown-item updateNav" to='/WorkingVideo'>Need Help</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {openModal && < SignIn setOpenModal={setOpenModal} />}
        {openSignUp && <SignUp setOpenSignUp={setOpenSignUp} />}

      </div>

      <div className="CoverImage" style={{ backgroundImage: cover ? `url(${Imagesurl}${cover})` : "url(./source/assets/images/heading-bg.jpg)" }}>
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
              <img src={`${allImagesUrl.itemImage}${pic}`} className='profileImage' alt="profile image" />
            </div>

            <div className="col-lg-6 profileHeading">
              <hr className='w-75 ' style={{ height: "3px", color: "#7453fc" }} />
              <h1 className='mt-2'>{name}</h1>
              <p style={{ fontSize: '12px' }}>{phone}</p>
              <h2 className='mt-3'>{profession}</h2>
              <p className='mt-3'>{bio}</p>
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
                        <div className="spinner-border" style={{ width: '5rem', height: '5rem', marginTop: '15em', marginBottom: '10em', color: '#7453fc' }} role="status">
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