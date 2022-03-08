import { FaBars } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <nav className='container mx-auto px-4 py-2 flex justify-between items-center'>
        {/* logo */}
        <h1 className='uppercase text-2xl font-semibold tracking-widest'>Ken Yamada</h1>
        {/* nav */}
        <ul className='hidden sm:flex justify-end items-center gap-12 uppercase font-light text-slate-600'>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        {/* mobile nav */}
        <FaBars className='block sm:hidden' size={24} />
      </nav>
    </header>
  );
}

export default Header;