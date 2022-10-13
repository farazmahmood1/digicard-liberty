import React from 'react'
import { Link } from 'react-router-dom'
const UserProfile = () => {
  return (
    <div>
      <div className="CoverImage" style={{ backgroundImage: "url(./source/assets/images/heading-bg.jpg)" }}>
      </div>
      <div>

        <div className="currently-market">
          <div className="container">
            <div className="row">

              <div className="col-lg-5 mx-auto">
                <img src="./source/assets/images/collection-01.jpg" className='profileImage' alt="item image" />
                <div className="text-center">
                  <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                  <h1 className='mt-2'><em>Solano</em> Milan Diaz.</h1>
                  <h2 className='mt-3'> A Web Developer.</h2>
                  <p className='mt-3'>I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!</p>
                  {/* <button className='buttonx w-25 mt-4 p-3' >View CV</button> */}
                  <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                  <h5>My Social</h5>

                  <div className='d-flex' style={{ width: "450px" }}>
                    <div className='card-body'>
                      <img src="./source/assets/images/facebook-app-icon.png" alt="" />
                    </div>
                    <div className='card-body'>
                      <img src="./source/assets/images/instagram-square-color-icon.png" alt="" />
                    </div>
                    <div className='card-body'>
                      <img src="./source/assets/images/twitter-app-icon.png" alt="" />
                    </div>
                    <div className='card-body'>
                      <img src="./source/assets/images/snapchat-square-color-icon.png" alt="" />
                    </div>

                    <div className='card-body'>
                      <img src="./source/assets/images/pinterest-square-color-icon.png" alt="" />
                    </div>
                  </div>
                  <div className='d-flex justify-content-center' style={{ width: "320px" }}>
                    <div className='card-body'>
                      <img src="./source/assets/images/tiktok-app-icon.png" alt="" />
                    </div>

                    <div className='card-body'>
                      <img src="./source/assets/images/skype-icon.png" alt="" />
                    </div>

                    <div className='card-body mt-2'>
                      <img src="./source/assets/images/telegram-icon.png" alt="" />
                    </div>
                    <div className='card-body'>
                      <img src="./source/assets/images/gmail-icon.png" alt="" />
                    </div>
                  </div>
                  <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
                  <h5>My Bussiness</h5>




                </div>
              </div>
              <div className='col-lg-1 ms-auto buttonProfile'>
                <Link to='/UserProfile' className='btn hoverBtn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }}><i className="fa-solid fa-house p-2" /></Link>
                <Link to='/Portfolio' className='btn hoverBtn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-newspaper p-2" /></Link>
                <Link to='/About' className=' btn hoverBtn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: " #7453fc" }} ><i className="fa-solid fa-user p-2" /></Link>
                <Link to='/Social' className='btn hoverBtn buttonx rounded-pill me-2 mb-2' style={{ color: "white", borderColor: "#7453fc" }} ><i className="fa-solid fa-envelope p-2" /></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile