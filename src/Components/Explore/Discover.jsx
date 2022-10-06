import React from 'react'

const Discover = () => {
  return (
    <div>
      <div className="discover-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>Our Top <em>Buyers</em>.</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                {/* <div className="row">
              <div className="col-lg-4">
                <fieldset>
                  <input type="text" name="keyword" className="searchText" placeholder="Type Something..." autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                  <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                    <option selected>All Categories</option>
                    <option type="checkbox" name="option1" value="Music">Music</option>
                    <option value="Digital">Digital</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Virtual">Virtual</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                  <select name="Price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                    <option selected>Available</option>
                    <option value="Ending-Soon">Ending Soon</option>
                    <option value="Coming-Soon">Coming Soon</option>
                    <option value="Closed">Closed</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-2">                        
                <fieldset>
                  <button className="main-button">Search</button>
                </fieldset>
              </div>
            </div> */}
              </form>
            </div>

            <div className="col-lg-3">
              <div className="item">
                <div className="row">
                  <div className="col-lg-12">
                    <span className="author">
                    </span>
                    <img src="./source/assets/images/discover-03.jpg" alt style={{ borderRadius: 20 }} />
                    <h4>Genesis Meta Boom</h4>
                  </div>
                  <div className="col-lg-12">
                    <div className="line-dec" />
                    <div className="row">
                      <div className="col-6">
                        <span>Current Bid: <br /> <strong>5.15 ETH</strong></span>
                      </div>
                      <div className="col-6">
                        <span>Ends In: <br /> <strong>26th Nov</strong></span>
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