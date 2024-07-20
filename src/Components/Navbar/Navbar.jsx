import React,{useState} from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import { IoIosCloseCircle } from 'react-icons/io';
import './navbar.css';

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
          <a href="#" className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <nav className={active}>
          <ul className='navList flex'>
            <li className='navItem'>
              <a href="#" className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>Packages</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>Shop</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href="#">BOOK NOW</a>
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

