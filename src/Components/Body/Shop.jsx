import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Baseurl from '../SourceFiles/url';
import Imagesurl from '../SourceFiles/Imageurl';
import ShopScreem from '../Main/ShopScreem';
import { useLocation } from 'react-router-dom';
import coverUrl from '../SourceFiles/coverUrl'

import allImagesUrl from '../SourceFiles/baseimageurl';

const Shop = () => {


  const location = useLocation();
  const { values } = location.state;

  const [card, setCard] = useState([])
  const [type, setType] = useState(values ? 'Card' : values);
  const [loader, setLoader] = useState(false)

  const dataRender = () => {
    setLoader(true)
    axios.get(`${Baseurl}getallitems`)
      .then((res) => {
        setLoader(false)
        setCard(res.data.items)
        // console.log(res.data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(values)

  const filtered = card.filter((item) => item.item_type === type)

  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => { topFunction(); dataRender() }, [])

  return (
    <div>
      <div className="page-heading normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h6 className=''>DigiCard Market</h6>
              <h2>Buy Your DigiCard Now.</h2>
              <span className=''> Home &gt; <a href=''>Shop</a></span>
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


            {loader === true ?
              <>
                <div className='col-lg-12'>
                  <div className='row loaderSizing'>
                    <div className='d-flex justify-content-center'>
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        {/* <div className="loader">Loading...</div> */}
                        <div className="spinner-border" style={{ width: '5rem', height: '5rem', marginTop: '15em', color: '#7453fc' }} role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </> :
              <>
                <div className="col-lg-6">
                  <div className="filters">
                    <ul>
                      {/* <li onClick={() => setType("All")} data-filter="*" className="active">All Items</li> */}
                      <li onClick={() => setType("Card")} className={type === "Card" ? "active" : "kuchNai"} data-filter=".msc" >Digi Cards</li>
                      <li onClick={() => setType("Tattos")} className={type === "Tattos" ? "active" : "kuchNai"} data-filter=".dig">Tattoos</li>
                      <li onClick={() => setType("Jewellery")} className={type === "Jewellery" ? "active" : "kuchNai"} data-filter=".vtr">Jewelerry
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    {
                      card.filter((item) => item.item_type === type).map((items) => {
                        return (
                          <>
                            <div className="col-lg-4">
                              <div className='card mb-5 bg-dark' style={{ borderRadius: "20px" }} >
                                <div>
                                  <img className='shopItemImg' src={`${allImagesUrl.itemImage}${items.item_pic}`} alt="item image" />
                                </div>
                                <div className='card-body shopItemBody'  >
                                  <h4 className='mt-2 ms-2' >{items.item_name}</h4>
                                  <hr className='bg-secondary' />
                                  <div className='d-flex justify-content-between'>
                                    <div>
                                      <p>Price</p>
                                      <h5>{items.item_price}</h5>
                                    </div>
                                    <div>
                                      <p className='ms-3'>Item type</p>
                                      <h5>{items.category}</h5>
                                    </div>
                                  </div>
                                  <div className='d-flex justify-content-center '>
                                    <div className="main-button ms-2 itemBtn">
                                      <Link state={{ items: items }} to='/ShopScreem'>View</ Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop