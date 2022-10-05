import React from 'react'

const TrendItem = () => {
    return (
        <div>
            <div className="categories-collections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="collections">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <div className="line-dec" />
                                            <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="owl-collection owl-carousel">
                                            <div className="item">
                                                <img src="./source/assets/images/collection-01.jpg" alt />
                                                <div className="down-content">
                                                    <h4>Mutant Bored Ape Yacht Club</h4>
                                                    <span className="collection">Items In Collection:<br /><strong>310/340</strong></span>
                                                    <span className="category">Category:<br /><strong>Digital Crypto</strong></span>
                                                    <div className="main-button">
                                                        <a href="explore.html">Explore Mutant</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src="./source/assets/images/collection-01.jpg" alt />
                                                <div className="down-content">
                                                    <h4>Bored Ape Kennel Club</h4>
                                                    <span className="collection">Items In Collection:<br /><strong>324/324</strong></span>
                                                    <span className="category">Category:<br /><strong>Visual Art</strong></span>
                                                    <div className="main-button">
                                                        <a href="explore.html">Explore Bored Ape</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src="./source/assets/images/collection-01.jpg" alt />
                                                <div className="down-content">
                                                    <h4>Genesis Collective Statue</h4>
                                                    <span className="collection">Items In Collection:<br /><strong>380/394</strong></span>
                                                    <span className="category">Category:<br /><strong>Music Art</strong></span>
                                                    <div className="main-button">
                                                        <a href="explore.html">Explore Genesis</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src="./source/assets/images/collection-01.jpg" alt />
                                                <div className="down-content">
                                                    <h4>Worldwide Artwork Ground</h4>
                                                    <span className="collection">Items In Collection:<br /><strong>426/468</strong></span>
                                                    <span className="category">Category:<br /><strong>Blockchain</strong></span>
                                                    <div className="main-button">
                                                        <a href="explore.html">Explore Worldwide</a>
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
        </div>
    )
}

export default TrendItem