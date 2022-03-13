import { Link } from 'react-scroll';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

// create nav ul 
function HeaderNavLinks(props) {
  return (
    <ul className={`
      ${(props.isMobile) 
        ? 'flex flex-col justify-start text-xl' 
        : 'hidden md:flex justify-end'
      }
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
                className='pb-1 px-1 cursor-pointer navlink font-light uppercase hover:text-sky-600'
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

export default HeaderNavLinks;