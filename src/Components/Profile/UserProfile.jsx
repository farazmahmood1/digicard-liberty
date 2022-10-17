import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
const UserProfile = () => {

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
            <div className='col-lg-4 ms-auto' >
              <img src="./source/assets/images/collection-01.jpg" className=' profileImage' alt="item image" />
            </div>
            <div className="col-lg-6 me-auto">
              <hr className='mx-auto' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
              <h1 className='mt-2 text-center'><em>Solano</em> Milan Diaz.</h1>
              <h2 className='mt-3 text-center'> A Web Developer.</h2>
              <p className='mt-3 text-center'>I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!</p>
              {/* <button className='buttonx w-25 mt-4 p-3' >View CV</button> */}
            </div>
          </div>

          <hr className='mx-auto mt-4' style={{ width: "320px", height: "3px", color: "#7453fc" }} />
          <h2 className='mt-2 text-center'>My Social Accounts</h2>

          <div className='row mt-2'>
            <div className='col-lg-5 ms-auto'>
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
            </div>

            <div className='col-lg-5 me-auto'>
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
            </div>
          </div>


        </div>
      </div>
    </div >
  )
}

export default UserProfile