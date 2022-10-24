import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Imagesurl from '../SourceFiles/Imageurl'
import Baseurl from '../SourceFiles/url'

const Discover = () => {

  const [userData, setUserData] = useState([])

  const renderData = () => {
    axios.get(`${Baseurl}fetchwithreview`)
      .then(res => {
        setUserData(res.data.ready_to_review)
        console.log(res.data.ready_to_review)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => { renderData() }, [])
  return (
    <div>
      <div className="discover-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>Our Top <em>Buyers</em>.</h2>
              </div>
            </div>

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
                            <img src={`${Imagesurl}${items.profile_photo}`} alt='userphoto' style={{ borderRadius: 20 , height:'228px'}} />
                            <h4>Saqib Hussain</h4>
                          </div>
                          <div className="col-lg-12">
                            <div className="line-dec" />
                            <div className="row">
                              <div className="col-6">
                                <span>Profession: <br /> <strong>Designer</strong></span>
                              </div>
                              <div className="col-6">
                                <span>From: <br /> <strong>{items.region}</strong></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="main-button">
                              <Link to='/UserProfile'>View</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover