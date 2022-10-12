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
              <div className="col-lg-6">
                <img src="./source/assets/images/collection-01.jpg" className='profileImage' alt="item image" />
              </div>
              <div className="col-lg-5 mt-4">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h1 className='mt-2'><em>Solano</em> Milan Diaz.</h1>
                  <h2 className='mt-3'> A Web Developer.</h2>
                  <p className='mt-3'>I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!</p>
                  <button className='buttonx w-25 mt-4 p-3' >View CV</button>
                </div>
              </div>
              <div className='col-lg-1 buttonProfile'>
              <Link to='/UserProfile' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-house p-2" /></Link>
                <Link to='/Portfolio' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-newspaper p-2" /></Link>
                <Link to='/About' className=' btn text-white border border-white rounded-pill'><i className="fa-solid fa-user p-2" /></Link>
                <Link to='/Social' className='btn text-white border border-white rounded-pill'><i className="fa-solid fa-envelope p-2" /></Link>

              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile