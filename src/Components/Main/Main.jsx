import React, { useEffect } from 'react'
import './main.css'
import img from "../../assets/images/1 (1).jpg"
import img1 from "../../assets/images/1 (2).jpg"
import img2 from "../../assets/images/1 (3).jpg"
import img3 from "../../assets/images/1 (4).jpg"

import img5 from "../../assets/images/1 (6).jpg"
import img6 from "../../assets/images/1 (7).jpg"
import img7 from "../../assets/images/1 (8).jpg"
import img8 from "../../assets/images/1 (9).jpg"
import Aos from "aos";
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Paris',
    location: 'France',
    grade: 'A',
    fees: '$2000',
    description: 'Explore the city of lights with its iconic Eiffel Tower and rich cultural heritage.'
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'A+',
    fees: '$2500',
    description: 'Experience the perfect blend of tradition and modernity in the bustling capital of Japan.'
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: 'New York',
    location: 'USA',
    grade: 'A',
    fees: '$2200',
    description: 'Discover the city that never sleeps with its iconic skyline and vibrant culture.'
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'B+',
    fees: '$1800',
    description: 'Step back in time and explore the ancient ruins and rich history of the Eternal City.'
  },
  {
    id: 5,
    imgSrc: img2,
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'A',
    fees: '$2300',
    description: 'Enjoy the stunning beaches, iconic Opera House, and vibrant culture of Sydney.'
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: 'Cairo',
    location: 'Egypt',
    grade: 'B',
    fees: '$1500',
    description: 'Discover the ancient wonders of Egypt with a visit to the Pyramids and the Sphinx.'
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: 'London',
    location: 'UK',
    grade: 'A+',
    fees: '$2400',
    description: 'Explore the historic landmarks and vibrant culture of England\'s capital city.'
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: 'Rio de Janeiro',
    location: 'Brazil',
    grade: 'B+',
    fees: '$2100',
    description: 'Experience the vibrant culture and stunning beaches of Rio de Janeiro.'
  },
  {
    id: 9,
    imgSrc: img8,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'A',
    fees: '$1900',
    description: 'Discover the beauty of Cape Town with its stunning landscapes and rich history.'
  }
];

export default function Main() {
  useEffect(() => {

    Aos.init({duration:2000})
    
    }, [])

  return (
    <section className="main container section">
    
    <div className="secTitle">
      
        <h3 data-aos="fade-right" className="title">Most visited distinations</h3>
      </div>

      <div className="secContent grid">
      {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div data-aos="fade-up" key={id} className='singleDestination'>
              <img src={imgSrc} alt={destTitle} />
              <h4>{destTitle}</h4>
              {/* <p>{location}</p> */}
              {/* <p>{grade}</p> */}
              <p>price: {fees}</p>
              <p>{description}</p>
            </div>
          );
        })}
    </div>

      </section>
  )
}
