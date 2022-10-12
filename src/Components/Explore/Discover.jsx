import React from 'react'
import { Link } from 'react-router-dom'

const Discover = () => {
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

            <div className="col-lg-3">
              <div className="item">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="author">
                    </span>
                    <img src="./source/assets/images/discover-03.jpg" alt style={{ borderRadius: 20 }} />
                    <h4>Saqib Hussain</h4>
                  </div>
                  <div className="col-lg-12">
                    <div className="line-dec" />
                    <div className="row">
                      <div className="col-6">
                        <span>Profession: <br /> <strong>Designer</strong></span>
                      </div>
                      <div className="col-6">
                        <span>From: <br /> <strong>Lahore</strong></span>
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
            <div className="col-lg-3">
              <div className="item">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="author">
                    </span>
                    <img src="./source/assets/images/discover-04.jpg" alt style={{ borderRadius: 20 }} />
                    <h4>Another Half Ape</h4>
                  </div>
                  <div className="col-lg-12">
                    <div className="line-dec" />
                    <div className="row">
                      <div className="col-6">
                        <span>Current Bid: <br /> <strong>3.63 ETH</strong></span>
                      </div>
                      <div className="col-6">
                        <span>Ends In: <br /> <strong>24th Nov</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="details.html">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="author">
                    </span>
                    <img src="./source/assets/images/discover-03.jpg" alt style={{ borderRadius: 20 }} />
                    <h4>Pixel Sand Box</h4>
                  </div>
                  <div className="col-lg-12">
                    <div className="line-dec" />
                    <div className="row">
                      <div className="col-6">
                        <span>Current Bid: <br /> <strong>4.68 ETH</strong></span>
                      </div>
                      <div className="col-6">
                        <span>Ends In: <br /> <strong>28th Nov</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="details.html">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="author">
                    </span>
                    <img src="./source/assets/images/discover-04.jpg" alt style={{ borderRadius: 20 }} />
                    <h4>Another Half Ape</h4>
                  </div>
                  <div className="col-lg-12">
                    <div className="line-dec" />
                    <div className="row">
                      <div className="col-6">
                        <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                      </div>
                      <div className="col-6">
                        <span>Ends In: <br /> <strong>25th Nov</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="details.html">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover