import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* <header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          <a href="index.html" className="logo">
            <img src="./source/assets/images/logo.png" alt />
          </a>
          <ul className="nav">
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="explore.html">Explore</a></li>
            <li><a href="details.html">Item Details</a></li>
            <li><a href="author.html">Author</a></li>
            <li><a href="create.html">Create Yours</a></li>
          </ul>   
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</header> */}


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
                                            <a className="nav-link active me-4" aria-current="page" href="#" ><b> Home</b></a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link active me-4" aria-current="page" href="#"><b> Shop</b></a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link active me-4" aria-current="page" href="#"><b> Profile</b></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Navbar