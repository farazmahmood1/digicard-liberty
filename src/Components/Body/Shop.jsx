import React from 'react'
import { useState } from 'react';
import ItemModal from '../Modal/ItemModal';
import { Link } from 'react-router-dom';
const Shop = () => {

  const [openModal, setOpenModal] = useState(false);


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
                  <li data-filter=".msc">Digi Cards</li>
                  <li data-filter=".dig">Tattoos</li>
                  <li data-filter=".blc">Key Chains</li>
                  <li data-filter=".vtr">Jewelerry
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row grid">
                <div className="col-lg-6 currently-market-item all msc">
                  <div className="item">
                    <div className="left-image">
                      <img src="./source/assets/images/market-01.jpg" alt style={{ borderRadius: 20, minWidth: 195 }} />
                    </div>

                    <div className="right-content">
                      <h4>DigiCard</h4>
                      <hr className='bg-white lineBreaker' />
                      <div className='d-flex'>
                        <p>Color:</p>&nbsp;<button className='btn btnShop btn-primary'></button>
                      </div>
                      <h6 className='mt-2'>Describtion:</h6>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, aliquam!</p>
                      <hr className='bg-white lineBreaker' />
                      <div className='d-flex'>
                        <p>Price:</p><p className='ms-2 text-decoration-line-through form-text'>1599</p><h6 className='ms-1 mt-1 priceText'>999/-</h6>
                      </div>
                      <div className=''>
                        <button onClick={() => setOpenModal(true)} className='buttonx m-1 ms-auto'>View</button>
                        <Link  to='/Form' className='buttonx m-1 me-auto'>Buy</Link>
                        <button className='buttonx m-1 mx-auto'>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 currently-market-item all dig">
                  <div className="item">
                    <div className="left-image">
                      <img src="./source/assets/images/market-01.jpg" alt style={{ borderRadius: 20, minWidth: 195 }} />
                    </div>
                    <div className="right-content">
                      <h4>Digital Crypto Artwork</h4>

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

              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && < ItemModal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Shop