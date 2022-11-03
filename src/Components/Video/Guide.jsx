import React,{useEffect} from 'react'

const Guide = () => {

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

  useEffect(() => { topFunction()}, [])

  return (
    <div>
         <div className="page-heading normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h6>DigiCard Market</h6>
              <h2>Trouble while purchasing?</h2>
              <span className=''>Home &gt; <a href="#">Help</a></span>
              {/* <div className="buttons">
                <div className="main-button">
            <a href="explore.html">Explore Our Items</a>
          </div>
                <div   className="border-button btnAnimate">
                  <a ><i  className="fa-solid fa-arrow-down" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide