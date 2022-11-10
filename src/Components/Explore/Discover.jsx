import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'

const Discover = () => {

  const [userData, setUserData] = useState([])
  const [visible, setVisible] = useState(false)
  const [loader, setLoader] = useState(false)

  const renderData = () => {
    setLoader(true)
    axios.get(`${Baseurl}fetchalldata`)
      .then(res => {
        setUserData(res.data.Data)
        console.log(res.data.Data)
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //Scroll to top function
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1800) {
      setVisible(true)
    }
    else if (scrolled <= 1800) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => { renderData() }, [])
  return (
    <div>
      <div className="discover-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <div className='d-flex'>

                  <h2>Our Top <em>Buyers</em></h2>
                  <div className="main-button ms-auto">
                    <Link to='/ShopMain'>Create Yours</Link>
                  </div>
                </div>
              </div>
            </div>
            {loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        {/* <div className="loader">Loading...</div> */}
                        <div className="spinner-border" style={{ width: '5rem', height: '5rem', marginTop: '25em', color: '#7453fc' }} role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>

                <button className='buttonx scroolToTop' style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
                  <i className="fa-solid fa-chevron-up imgx" />
                </button>
                {
                  userData.map((items) => {
                    return (
                      <>
                        <div className="col-lg-3">
                          <div className="item">
                            <div className="row">
                              <div className="col-lg-12">
                                <span className="author">
                                </span>
                                <img src={`${Imagesurl}${items.profile_photo}`} alt='userphoto' style={{ borderRadius: 20, height: '228px' }} />
                                <h4>{items.name}</h4>
                              </div>
                              <div className="col-lg-12">
                                <div className="line-dec" />
                                <div className="row">
                                  <div className="col-6">
                                    <span>Profession: <br /> <strong>{items.profession}</strong></span>
                                  </div>
                                  <div className="col-6">
                                    <span>From: <br /> <strong>{items.region}</strong></span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="main-button">
                                  <Link to='/UserProfile' state={{ ID: items.id }}>View</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }


              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover