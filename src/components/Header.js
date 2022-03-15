import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import NavLinks from './NavLinks';
import SideNav from './SideNav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  
  const handleMenuButtonClick = () => setShowSideNav(true);
  const handleLogoClick = () => scroll.scrollToTop();
  
  window.addEventListener('scroll', () => {
    (window.scrollY > 0) ? setScrolled(true) : setScrolled(false)
  });
  
  return (
    <header id='header' className={`sticky top-0 z-50 ${(!scrolled) ? 'bg-black/70 text-neutral-50' : 'bg-neutral-50 drop-shadow-md'}`}>
      <nav className='container py-2 flex justify-between items-center'>
         {/* top-left logo */}
        <button type='button' onClick={handleLogoClick}>
          <h1 className='font-semibold tracking-widest'>Ken Yamada</h1>
        </button>
        
        {/* mainnav */}
        <NavLinks isMobile={false} className='hidden md:block' />
        {/* menu/hamburger button */}
        <button type='button' onClick={handleMenuButtonClick} className='md:hidden flex justify-center items-center'>
          <FaBars className='text-2xl' />
        </button>
        
        {/* sidenav */}
        <div className={(showSideNav) ? 'block' : 'hidden'}>
          <SideNav />
        </div>

      </nav>
    </header>
  );
}

export default Header;