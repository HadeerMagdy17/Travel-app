import React, { useEffect } from 'react';
import './footer.css';
import videoBg from '../../assets/images/footer.mp4';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Footer() {

  useEffect(() => {

    Aos.init({duration:2000})
    
    }, [])

  return (
    <footer className="footer">
      <div className="videoOverlay">
        <video src={videoBg} autoPlay loop muted playsInline type="video/mp4"></video>
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="footerContent">
          <div data-aos="fade-up" className="footerSection">
            <h4>Travel with Us</h4>
            <p>
              We are a travel company dedicated to providing the best experiences and adventures
              around the world. Explore with us and make unforgettable memories.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration='3000' className="footerSection">
            <h4>Contact Us</h4>
            <p>Email: info@travelcompany.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
         
          <div data-aos="fade-up" data-aos-duration='4000'className="footerSection">
            <h4>Useful Links</h4>
            <ul className="usefulLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; 2024 Travel Company. All rights reserved to Hadeer Magdy.</p>
        </div>
      </div>
    </footer>
  );
}
