import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'pretty-modal';


const Shop = () => {

  const [openModal, setOpenModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const [addCount, setAddCount] = useState(1);

  const incrementCount = () => {
    setAddCount(addCount + 1);

  }
  const decrementCount = () => {
    setAddCount(addCount - 1)
  }

  function oncloseModal() {
    setShouldShow((prev) => !prev)
  }
  return (
    <div>
      <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6 className=''>DigiCard Market</h6>
                            <h2>Buy Your DigiCard Now.</h2>
                            <span className=''>Home &gt; <a href="#">Shop</a></span>
                        </div>
                    </div>
                </div>
            </div>
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
              <div className="row">
                {/* <div className="col-lg-6 currently-market-item all msc">
                      <img src="./source/assets/images/market-01.jpg" alt style={{ borderRadius: 20, minWidth: 195 }} />
                </div> */}
                <div className="col-lg-4">
                  <div className='card bg-dark' style={{ borderRadius: "20px" }} >
                    <div>
                      <img className='shopItemImg' src="./source/assets/images/collection-01.jpg" alt="item image" />
                    </div>
                    <div className='card-body shopItemBody'  >
                      <h4 className='mt-2 ms-2' >Bored Ape</h4>
                      <hr className='bg-secondary' />
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p>Items in collection</p>
                          <h5>2000</h5>
                        </div>

                        <div>
                          <p className='ms-3'>Category</p>
                          <h5>DigiCard</h5>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center '>
                        <div className="main-button itemBtn">
                          <Link to='/Form' className='text-white'>Buy</Link>
                        </div>
                        <div className="main-button ms-2 itemBtn">
                          <Link to='/ShopScreem' className='text-white'>View</ Link>
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
    </div>
  )
}

export default Shop