import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import HeaderNavLinks from './Header.NavLinks';
import HeaderMobileNav from './Header.MobileNav';

// create logo for header 
function HeaderLogo() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <h1>
      <button type='button' onClick={scrollToTop} className='uppercase font-semibold tracking-widest'>
        Ken Yamada
      </button>  
    </h1>
  );
}

// create header
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  window.addEventListener('scroll', changeNavColor);

  function changeNavColor() {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  function handleShowMobileNavClick() {
    setShowMobileNav(!showMobileNav);
  }
  
  return (
    <header 
      id='header' 
      className={`
        sticky 
        top-0 
        z-50 
        ${(!scrolled) 
          ? 'bg-black/70 text-neutral-50 ' 
          : 'bg-neutral-50 text-neutral-900 drop-shadow-md'}
      `}
    >
      <nav className='container py-2 flex justify-between items-center'>
        <HeaderLogo />
        
        <div className='lg:hidden'>
          <button type='button' onClick={handleShowMobileNavClick} className='flex justify-center items-center'>
            <FaBars size={24} />
          </button>
          <HeaderMobileNav showNav={showMobileNav} handleShowNav={handleShowMobileNavClick} />
        </div>
        
        <div className='hidden lg:block'>
          <HeaderNavLinks isMobile={false} />
        </div>
      </nav>
    </header>
  );
}

export default Header;