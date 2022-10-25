import React from 'react'
import Slider from "react-slick";
import data from '../SourceFiles/CardCrousel';

const Categories = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
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

    return (
        <div>
            <div className="categories-collections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="categories">
                                <div className="row d-flex justify-content-center ">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Browse Through Our <em>Categories</em> Here.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <img src="./source/assets/images/icon-01.png" alt />
                                            </div>
                                            <h4>Tattoos</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <img src="./source/assets/images/icon-02.png" alt />
                                            </div>
                                            <h4>Digi Cards</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <img src="./source/assets/images/icon-03.png" alt />
                                            </div>
                                            <h4>Key Chains</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <img src="./source/assets/images/icon-05.png" alt />
                                            </div>
                                            <h4>Jewelerry</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <img src="./source/assets/images/icon-06.png" alt />
                                            </div>
                                            <h4>Triple NFT</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="collections">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Our Hot <em>Collections</em> In Market.</h2>
                                        </div>
                                    </div>

                                    <Slider {...settings}>
                                        {
                                            data.map((items) => {
                                                return (
                                                    <div className='owl-collection p-2'>
                                                        <div className="item">
                                                            <img src="./source/assets/images/collection-01.jpg" alt />
                                                            <div className="down-content">
                                                                <h4>{items.name}</h4>
                                                                <span className="collection">Items In Collection:<br /><strong>{items.price}</strong></span>
                                                                <span className="category">Category:<br /><strong>{items.category}</strong></span>
                                                                <div className='d-flex justify-content-center'>

                                                                    <div className="main-button">
                                                                        <a href="explore.html">View</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories