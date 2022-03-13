import { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaFileAlt 
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import HeaderNavLinks from './Header.NavLinks';

// class constants 
const EMAIL ='yamakenth@gmail.com';
const LINKEDIN ='https://www.linkedin.com/in/yamakenth/';
const GITHUB='https://github.com/yamakenth';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';

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

// create social nav ul
function SocialNavLinks() {
  return (
    <ul className='flex justify-between gap-5 pt-14'>
      <li><a href={`mailto:${EMAIL}`}><FaEnvelope size={24} /></a></li>
      <li><a href={LINKEDIN} target='_blank' rel='noreferrer'><FaLinkedin size={24} /></a></li>
      <li><a href={GITHUB} target='_blank' rel='noreferrer'><FaGithubSquare size={24} /></a></li>
      <li><a href={RESUME} target='_blank' rel='noreferrer'><FaFileAlt size={24} /></a></li>
    </ul>
  );
}

// create mobile nav 
function HeaderMobileNav(props) {
  return (
    <div className={`
    bg-white 
    text-neutral-900 
      absolute 
      top-0
      right-0 
      px-6
      py-12
      md:px-10
      w-fit 
      h-screen
      ${(props.showNav) ? 'translate-x-0' : 'translate-x-full hidden'}
      ease-linear duration-300
    `}>
      <button type='button' className='absolute top-2 right-40 md:right-48' onClick={props.handleShowNav}>
        <FaTimes size={24} />
      </button>
      <HeaderNavLinks isMobile={true} />
      <SocialNavLinks />
    </div>
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
          {/* <HeaderWebNav /> */}
          <HeaderNavLinks isMobile={false} />
        </div>
      </nav>
    </header>
  );
}

export default Header;