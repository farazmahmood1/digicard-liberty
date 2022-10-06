import React from 'react'

const ItemModal = () => {
    return (
        <div>
            <div className="item-details-page">
                <div className="container">
                    <div className=''>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <div className="line-dec" />
                                    <h2>This Is <em>Your Item</em> Preview.</h2>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="left-image">
                                    <img src="./source/assets/images/create-yours.jpg" alt style={{ borderRadius: 20 }} />
                                </div>
                            </div>
                            <div className="col-lg-5 align-self-center">
                                <h4>Dolores Haze Westworld Eye</h4>
                                <span className="author">
                                    <img src="./source/assets/images/author-02.jpg" alt style={{ maxWidth: 50, borderRadius: '50%' }} />
                                    <h6>Kataleya Smithee<br /><a href="#">@kataleey</a></h6>
                                </span>
                                <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col-3">
                                        <span className="bid">
                                            Current Bid<br /><strong>0.06 ETH</strong><br /><em>($8055,35)</em>
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="owner">
                                            Owner<br /><strong>Alan Smithee</strong><br /><em>(@asmithee)</em>
                                        </span>
                                    </div>
                                    <div className="col-5">
                                        <span className="ends">
                                            Ends In<br /><strong>3D 05H 20M 58S</strong><br /><em>(January 22nd, 2021)</em>
                                        </span>
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

export default ItemModal