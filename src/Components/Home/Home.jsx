import React,{useEffect} from "react";
import "./home.css";
import video from "../../assets/images/header.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Home() {
//add scroll animation
useEffect(() => {

Aos.init({duration:2000})

}, [])


  return (
    <section className="home">
      <video src={video} muted autoPlay loop playsInline type="video/mp4"></video>
      <div className="overlay"></div>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h2 data-aos="fade-up" className="homeTitle">Search your holiday</h2>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
          <div className="input flex">
          <input type="text" placeholder="Enter name here ..."/>
          <GrLocation className="icon" />
          </div>
           
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
            <input type="date"/>
            </div>
          </div>

          <div className="priceInput">
         <div className="label_total flex">
         <label htmlFor="price">Max price:</label>
         <h3 className="total">$5000</h3>
         <div className="input flex">
            <input type="range" min="1000" max="5000"/>
            </div>
         </div>
         <div className="searchoption flex">
         <HiFilter className="icon" />
         <span>More Filters</span>
         </div>
          </div>
        </div>
      </div>
    </section>
  );
}
