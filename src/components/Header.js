import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header id='header'>
      <nav className='container mx-auto px-4 py-2 flex justify-between items-center'>
        {/* logo */}
        <h1 className='uppercase text-2xl font-semibold tracking-widest'>
          <Link to='header' smooth={true} className='cursor-pointer'>Ken Yamada</Link>
        </h1>

        {/* nav */}
        <ul className='hidden sm:flex justify-end items-center gap-12 uppercase font-light text-slate-600'>
          <li>
            <Link to='about' spy={true} smooth={true} className='cursor-pointer hover:text-sky-900'>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' spy={true} smooth={true} className='cursor-pointer hover:text-sky-900'>
              Skills
            </Link>
          </li>
          <li>
            <Link to='projects' spy={true} smooth={true} className='cursor-pointer hover:text-sky-900'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='contact' spy={true} smooth={true} className='cursor-pointer hover:text-sky-900'>
              Contact
            </Link>
          </li>
        </ul>
        
        {/* mobile nav */}
        <FaBars className='block sm:hidden' size={24} />
      </nav>
    </header>
  );
}

export default Header;