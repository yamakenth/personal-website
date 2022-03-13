import { 
  FaTimes, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaFileAlt 
} from 'react-icons/fa';

import HeaderNavLinks from './Header.NavLinks';

const EMAIL ='yamakenth@gmail.com';
const LINKEDIN ='https://www.linkedin.com/in/yamakenth/';
const GITHUB='https://github.com/yamakenth';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';

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

export default HeaderMobileNav;