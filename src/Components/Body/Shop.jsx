import React from 'react'

const Shop = () => {
  return (
    <div>
        <div className="currently-market">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <div className="line-dec" />
            <h2><em>Items</em> Currently In The Market.</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="filters">
            <ul>
              <li data-filter="*" className="active">All Items</li>
              <li data-filter=".msc">Music Art</li>
              <li data-filter=".dig">Digital Art</li>
              <li data-filter=".blc">Blockchain</li>
              <li data-filter=".vtr">Virtual</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row grid">
            <div className="col-lg-6 currently-market-item all msc">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Music Art Super Item</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>2.03 ETH</strong><br /><em>($8,240.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>4D 08H 15M 42S</strong><br /><em>(July 24th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all dig">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Digital Crypto Artwork</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>2.03 ETH</strong><br /><em>($7,200.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>2D 06H 30M 25S</strong><br /><em>(July 26th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all blc">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Blockchain Item One</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>3.64 ETH</strong><br /><em>($6,600.00)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>6D 05H 40M 50S</strong><br /><em>(July 28th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all vtr">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Virtual Currency Art</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>2.44 ETH</strong><br /><em>($8,800.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>3D 05H 20M 58S</strong><br /><em>(July 14th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all vrt dig">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Digital Art Item</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>2.50 ETH</strong><br /><em>($8,400.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>4D 08H 32M 18S</strong><br /><em>(July 16th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 currently-market-item all msc blc">
              <div className="item">
                <div className="left-image">
                  <img src="./source/assets/images/market-01.jpg" alt style={{borderRadius: 20, minWidth: 195}} />
                </div>
                <div className="right-content">
                  <h4>Blockchain Music Design</h4>
                  <span className="author">
                    <img src="./source/assets/images/author.jpg" alt style={{maxWidth: 50, borderRadius: '50%'}} />
                    <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                  </span>
                  <div className="line-dec" />
                  <span className="bid">
                    Current Bid<br /><strong>2.44 ETH</strong><br /><em>($8,200.50)</em>
                  </span>
                  <span className="ends">
                    Ends In<br /><strong>5D 10H 22M 24S</strong><br /><em>(July 18th, 2022)</em>
                  </span>
                  <div className="text-button">
                    <a href="details.html">View Item Details</a>
                  </div>
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

export default Shop