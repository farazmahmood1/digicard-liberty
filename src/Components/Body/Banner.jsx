import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Liberty NFT Market</h6>
                <h2>Create, Sell &amp; Collect Top NFT’s.</h2>
                <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                <div className="buttons">
                  <div className="border-button">
                    <a href="explore.html">Explore Top NFTs</a>
                  </div>
                  <div className="main-button">
                    <a href="https://youtube.com/templatemo" target="_blank">Watch Our Videos</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              {/* <div className="owl-banner">
            <div className="item">
              <img src="./source/assets/images/banner-01.png" alt />
            </div>
          </div> */}

              <div id="carouselExampleControls " className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./source/assets/images/banner-01.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./source/assets/images/banner-02.png" className="d-block w-100" alt="..." />
                  </div>
                  {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon " aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden bg-dark">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner