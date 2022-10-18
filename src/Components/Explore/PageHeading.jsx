import React, { useEffect } from 'react'
import Slider from "react-slick";


const PageHeading = () => {

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
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>DigiCard Market</h6>
              <h2>Discover Our Top Buyers</h2>
              <span>Home &gt; <a href="#">Profiles</a></span>
            </div>
          </div>
        </div>
        <div className="featured-explore">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">

                <Slider className=' owl-carousel' {...settings}>
                  <div >
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6 className='mt-2'>Liberty Artist</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item p-3">
                      <div className="thumb">
                        <img src="./source/assets/images/featured-04.jpg" alt style={{ borderRadius: 20 }} />
                        <div className="hover-effect">
                          <div className="content">
                            <h4>Crypto Aurora Guy</h4>
                            <span className="author">
                              <img src="./source/assets/images/author.jpg" alt style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                              <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading