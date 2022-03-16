import { Link } from 'react-scroll';

const section = ['home', 'about', 'skills', 'projects', 'contact'];

const NavLinks = (props) => {
  return (
    <ul className={`flex justify-end items-center gap-8 ${(props.isMobile) ? 'flex-col py-6' : null}`}>
      {
        section.map(section => {
          return (
            <li key={section}>
              <Link to={section} smooth={true} offset={-40} className='pb-1 px-1 font-light uppercase cursor-pointer navlink-effect hover:text-sky-600'>
                {section}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default NavLinks;