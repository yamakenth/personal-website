import { 
  FaTimes, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaFileAlt 
} from 'react-icons/fa';

import HeaderNavLinks from './NavLinks';
import { email, linkedIn, gitHub, resume } from '../data/external-links';

// create social nav ul
function SocialNavLinks() {
  return (
    <ul className='flex justify-between gap-5 pt-14'>
      <li><a href={`mailto:${email}`}><FaEnvelope size={24} /></a></li>
      <li><a href={linkedIn} target='_blank' rel='noreferrer'><FaLinkedin size={24} /></a></li>
      <li><a href={gitHub} target='_blank' rel='noreferrer'><FaGithubSquare size={24} /></a></li>
      <li><a href={resume} target='_blank' rel='noreferrer'><FaFileAlt size={24} /></a></li>
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
      ease-linear duration-300
      `}>
      {/* ${(props.showNav) ? 'translate-x-0' : 'translate-x-full hidden'} */}
      <button type='button' className='absolute top-2 right-40 md:right-48' onClick={props.handleShowNav}>
        <FaTimes size={24} />
      </button>
      <HeaderNavLinks isMobile={true} />
      <SocialNavLinks />
    </div>
  );
}

export default HeaderMobileNav;