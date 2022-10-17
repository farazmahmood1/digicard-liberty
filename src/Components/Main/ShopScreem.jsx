import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'pretty-modal'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import CursorZoom from 'react-cursor-zoom';


const ShopScreem = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const [addCount, setAddCount] = useState(1);

    const incrementCount = () => {
        setAddCount(addCount + 1);

    }
    const decrementCount = () => {
        setAddCount(addCount - 1)
    }

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
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
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

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className='col-lg-12 mb-4'>
                                        <CursorZoom
                                            image={{
                                                src: "./source/assets/images/zoomImg.jpg",
                                                width: 650,
                                                height: 250
                                            }}
                                            zoomImage={{
                                                src: "./source/assets/images/zoomImg.jpg",
                                                width: 1800,
                                                height: 1000
                                            }}
                                            cursorOffset={{ x: 50, y: -50 }}
                                        />
                                    </div>

                                    <Slider {...settings}>
                                        <div>
                                            <div className='card-body'>
                                                <img className='rounded-3' style={{ height: "270px" }} src="./source/assets/images/collection-01.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card-body'>
                                                <img className='rounded-3' style={{ height: "270px" }} src="./source/assets/images/item-details-01.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card-body'>
                                                <img className='rounded-3' style={{ height: "270px" }} src="./source/assets/images/collection-01.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card-body'>
                                                <img className='rounded-3' style={{ height: "270px" }} src="./source/assets/images/discover-03.jpg" alt="" />
                                            </div>
                                        </div>
                                    </Slider>

                                </div>
                                <div className="col-lg-5 ps-4 pe-4">

                                    <h3>Men Silver Rings</h3>
                                    <h5 className='mt-2'>Rs. <span style={{ fontSize: "12px" }} className='text-secondary text-decoration-line-through'>1800.00</span>1999.00</h5>
                                    <hr style={{ width: "320px", height: "1px", color: "#7453fc" }} />
                                    <h6 style={{ color: "#7453fc" }}>Quantity:</h6>
                                    <div className='mt-2'>
                                        {
                                            addCount > 1 ?
                                                <button className='btn btn-secondary me-2 btn-sm' style={{ backgroundColor: "#7453fc" }} onClick={decrementCount}><i className="fa-solid fa-angle-left" /></button> : console.log(".-.")
                                        }
                                        <label className='text-white' htmlFor="exampleInputPassword1">{addCount}</label>
                                        <button className='btn btn-secondary ms-2 btn-sm' style={{ backgroundColor: "#7453fc" }} onClick={incrementCount}><i className="fa-solid fa-angle-right" /></button>
                                    </div>

                                    <hr style={{ width: "320px", height: "1px", color: "#7453fc" }} />
                                    <h6 style={{ color: "#7453fc" }} className='mt-2 mb-2'>Color Avaiblable;</h6>
                                    <button className='btnShop bg-danger' ></button>
                                    <button className='btnShop bg-secondary'></button>

                                    <h6 className='mt-3' style={{ color: "#7459fc" }}>Describtion:</h6>
                                    <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus sunt ipsa corrupti sed corporis aspernatur voluptatem deserunt, temporibus aperiam assumenda similique praesentium dolores nobis! Rerum voluptate odit minus. Amet possimus deserunt voluptate nulla porro!</p>

                                    <div className='mt-2 d-flex'><Link to='/ItemForm' className='text-center buttonx col-11'>BUY NOW</Link> <i className="fa-2x ms-2 mt-1 fa-solid fa-heart text-danger" />
                                    </div>
                                    <p style={{ fontSize: "11px" }} className='text-secondary text-center'>Pyament method is COD, other methods are comming soon!</p>
                                </div>
                            </div>
                            <hr className='bg-secondary' />
                            <div className="buttons  mt-5 d-flex justify-content-center">
                                <div className="main-button ">
                                    <Link to='/ShopMain' className='p-3 mt-1 me-2'>Explore Our Products</Link>
                                </div>
                                <Link to='/ProfileMain' className='buttonx p-4 ms-2'>View Profiles</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopScreem