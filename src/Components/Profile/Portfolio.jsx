import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <div className="page-heading normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h6>DigiCard Market</h6>
                            <h2>Your Portfolio</h2>
                            <span className=''>Home &gt; <a href="#">Portfolio</a></span>
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
                                <h2><em>Your</em> Portfolio:</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className='col-lg-4'>
                                    <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                                </div>
                                <div className='col-lg-4'>
                                    <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                                </div>
                                <div className='col-lg-4'>
                                    <img src="./source/assets/images/market-01.jpg" style={{ height: "350px", borderRadius: "10px" }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio