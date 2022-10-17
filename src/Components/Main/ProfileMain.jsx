import React,{useEffect} from 'react'
import PageHeading from '../Explore/PageHeading'
import Discover from '../Explore/Discover'


const ProfileMain = () => {
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
            <PageHeading />
            <Discover />
        </div>
    )
}

export default ProfileMain