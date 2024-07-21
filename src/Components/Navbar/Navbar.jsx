import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import { IoIosCloseCircle } from 'react-icons/io';
import './navbar.css';
import { Link } from 'react-router-dom'; // If using React Router

export default function Navbar() {
  const [active, setActive] = useState('navBar');

  // Toggle nav
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // Remove nav
  const removeNav = () => {
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <Link to="/" className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </Link>
        </div>
        <nav className={active}>
          <ul className='navList flex'>
            <li className='navItem'>
              <Link to="/" className='navLink'>Home</Link>
            </li>
            <li className='navItem'>
              <Link to="/packages" className='navLink'>Packages</Link>
            </li>
            <li className='navItem'>
              <Link to="/shop" className='navLink'>Shop</Link>
            </li>
            <li className='navItem'>
              <Link to="/about" className='navLink'>About</Link>
            </li>
            <li className='navItem'>
              <Link to="/news" className='navLink'>News</Link>
            </li>
            <li className='navItem'>
              <Link to="/contact" className='navLink'>Contact</Link>
            </li>
            <button className='btn'>
              <Link to="/book">BOOK NOW</Link>
            </button>
          </ul>
          <div onClick={removeNav} className='closeNavbar'>
            <IoIosCloseCircle className="icon" />
          </div>
        </nav>
        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}
