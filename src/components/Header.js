import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
  // list of nav sections for rendering
  const sections = ['about', 'skills', 'projects', 'contact'];

  // state for mobile navbar 
  const [showNav, setShowNav] = useState(false);
  
  // scroll to top of page 
  function scrollToTop() {
    scroll.scrollToTop();
  }

  // handleShowNavClick
  function handleShowNavClick() {
    setShowNav(!showNav);
  }
  
  return (
    <header id='header' className='sticky top-0 bg-white drop-shadow'>
      <nav className='container py-2 flex justify-between items-center'>
        {/* logo */}
        <h1>
          <button 
            type='button' 
            className='uppercase text-2xl font-semibold tracking-widest' 
            onClick={scrollToTop}
          >
            Ken Yamada
          </button>  
        </h1>

        {/* nav */}
        <ul className='hidden sm:flex justify-end items-center gap-8 uppercase font-light text-neutral-600'>
          {
            sections.map(section => {
              return (
                <li key={section}>
                  <Link 
                    to={section}
                    smooth={true} 
                    offset={-50} 
                    className='pb-1 px-1 cursor-pointer navlink hover:text-sky-600'
                  >
                    {section}
                  </Link>
                </li>               
              );
            })
          }
        </ul>

        {/* mobile nav */}
        <button type='button' className='block sm:hidden' onClick={handleShowNavClick}>
          {(!showNav) ? <FaBars size={24} /> : <FaTimes size={24} />}
        </button>
        {showNav &&
          <div className='bg-white text-neutral-600 fixed top-12 right-0 h-screen w-3/5 flex flex-col items-center'> 
            <ul className='py-8 flex flex-col items-center gap-8 text-xl uppercase font-light text-neutral-600'>
              {
                sections.map(section => {
                  return (
                    <li key={section}>
                      <Link
                        to={section}
                        smooth={true}
                        offset={-50}
                        className='pb-1 px-1 cursor-pointer navlink hover:text-sky-600'
                      >
                        {section}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
            <ul className='flex justify-between gap-5'>
              <li>E</li>
              <li>G</li>
              <li>L</li>
              <li>R</li>
            </ul>
          </div>
        }
      </nav>
    </header>
  );
}

export default Header;