import { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaFileAlt 
} from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

// class constants 
const SECTIONS = ['about', 'skills', 'projects', 'contact'];
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
      <button 
        type='button' 
        className='uppercase text-2xl font-semibold tracking-widest' 
        onClick={scrollToTop}
      >
        Ken Yamada
      </button>  
    </h1>
  );
}

// create nav ul 
function HeaderNavLinks(props) {
  return (
    <ul className={`
      ${(props.isMobile) ? 'pt-8 flex flex-col text-xl' : 'hidden sm:flex justify-end'}
      items-center 
      gap-8
    `}>
      {
        SECTIONS.map(section => {
          return (
            <li key={section}>
              <Link 
                to={section}
                smooth={true} 
                offset={-50} 
                className='pb-1 px-1 cursor-pointer navlink text-neutral-600 font-light uppercase hover:text-sky-600'
              >
                {section}
              </Link>
            </li>               
          );
        })
      }
    </ul>
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

// create web nav 
function HeaderWebNav() {
  return (
    <HeaderNavLinks isMobile={false} />
  );
}

// create mobile nav 
function HeaderMobileNav() {
  const [showNav, setShowNav] = useState(false);
  
  function handleShowNavClick() {
    setShowNav(!showNav);
  }

  return (
    <>
      <button type='button' className='block sm:hidden' onClick={handleShowNavClick}>
        {(!showNav) ? <FaBars size={24} /> : <FaTimes size={24} />}
      </button>

      <div className={`
        bg-white 
        absolute 
        top-12 
        right-0 
        h-screen 
        w-3/5
        flex 
        flex-col 
        items-center
        sm:hidden
        translate-x-full
        ${(showNav) ? 'show-nav' : null}
        ease-linear duration-300
      `}> 
        <HeaderNavLinks isMobile={true} />
        <SocialNavLinks />
      </div>
    </>
  );
}

// create header
function Header() {
  return (
    <header id='header' className='sticky top-0 bg-white drop-shadow'>
      <nav className='container py-2 flex justify-between items-center'>
        <HeaderLogo />
        <HeaderWebNav />
        <HeaderMobileNav />
      </nav>
    </header>
  );
}

export default Header;