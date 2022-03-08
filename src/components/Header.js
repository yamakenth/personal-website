import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
  // list of nav sections for rendering
  const sections = ['about', 'skills', 'projects', 'contact'];
  
  // scroll to top of page 
  function scrollToTop() {
    scroll.scrollToTop();
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
        <button type='button' className='block sm:hidden'><FaBars size={24} /></button>
      </nav>
    </header>
  );
}

export default Header;