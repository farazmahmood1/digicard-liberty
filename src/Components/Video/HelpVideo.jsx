import React from 'react'

const HelpVideo = () => {


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
                                            <h2>Something wrong while <em>Purshasing</em> products.</h2>
                                            <h5 className='mt-2'><em> Here's a tutorial Video for you </em></h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-6 mx-auto '>
                                            <iframe width="560" height="315" autoplay="on" src="https://www.youtube.com/embed/el3N6qQjr-I?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-5">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Something's wrong <em>Tell</em> us</h2>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <h4>Call us</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope" />
                                            </div>
                                            <h4>Email</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-comment" />
                                            </div>
                                            <h4>Whatsapp</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-sm-6">
                                        <div className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-address-book" />
                                            </div>
                                            <h4>Address</h4>
                                            <div className="icon-button">
                                                <a href="#"><i className="fa fa-angle-right" /></a>
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

export default HelpVideo