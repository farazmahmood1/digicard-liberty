import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp'


const Navbar = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)

  const [navbar, setNavbar] = useState("Home");

  const navbarDesign = () => {
    if (navbar === 'Home') {
      return (
        <>
          <navbar-nav style={{ fontSize: '10px' }}></navbar-nav>
        </>
      )
    }
    else if (navbar === 'Shop') {
      return (
        <>
          <navbar-nav style={{ backgroundColor: 'pink' }}></navbar-nav>
        </>
      )
    }
    else if (navbar === 'Profiles') {
      return (
        <>
          <navbar-nav style={{ backgroundColor: 'orange' }}></navbar-nav>
        </>
      )
    }
  }

  // Add active class to the current button (highlight it)
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // useEffect(() => { navbarDesign() }, [])

  return (
    <div>
      <header className="header-area header-sticky" >
        <div className='container'>
          <div className='container-fluid' >
            <nav className="navbar  navbar-expand-lg navbar-light bg-light " style={{ borderRadius: "50px" }}>
              <div className="container-fluid">
                <a href="index.html" className="logo">
                  <img src="./source/assets/images/logo.png" alt='icon_image' style={{ height: "54px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav  ms-auto">
                    <li className="nav-item ">
                      <Link to='/' className="nav-link me-4 active" aria-current="page"><b> Home</b></Link>
                    </li>
                    <li className="nav-item ">
                      <Link to='/ShopMain' state={{ values: 'Card' }} className="nav-link active me-4" aria-current="page"><b> Shop</b></Link>
                    </li>
                    <li className="nav-item ">
                      <Link to='/ProfileMain' className="nav-link active me-4" aria-current="page"><b> Profiles</b></Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-gear" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                        <button onClick={() => setOpenModal(true)} className='buttonx d-flex'><i className="fa-solid fa-user mt-2 ms-2 text-dark" />
                          &nbsp;&nbsp;<p className="text-dark">Sign In</p>
                        </button>

                        <button onClick={() => setOpenSignUp(true)} className='buttonx d-flex mt-1'><i className="fa-solid fa-user-plus mt-2 ms-2 text-dark" />
                          &nbsp;&nbsp;<p className='text-dark'>Sign Up</p>
                        </button>
                        <hr />
                        <li className='d-flex'><i className="fa-solid fa-pen mt-2 ms-2" />
                          <a className="dropdown-item" href="#">Update Profile</a>
                        </li>
                        <li className='d-flex'>
                          <i className="fa-solid fa-newspaper mt-2 ms-2" />

                          <a className="dropdown-item" href="#">What`s New</a>
                        </li>
                        <li className='d-flex'>
                          <i className="fa-solid fa-question mt-2 ms-2" />
                          <Link className="dropdown-item" to='/WorkingVideo'>Need Help</Link>
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
  )
}

export default Navbar