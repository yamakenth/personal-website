import { FaTimes, FaEnvelope, FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa';

import NavLinks from './NavLinks';
import { email, linkedIn, gitHub, resume } from '../data/external-links';

// create mobile nav 
const SideNav = (props) => {
  const closeSideNav = () => props.setShowSideNav(false);
  
  return (
    <div className={`bg-white text-neutral-900 absolute top-0 right-0 px-6 py-3 min-w-[50vw] h-screen flex flex-col items-center justify-start`}>
      
      {/* close button */}
      <button type='button' className='self-start' onClick={closeSideNav}>
        <FaTimes className='text-2xl' />
      </button>

      {/* page nav links */}
      <NavLinks isMobile={true} />

      {/* soccial navs */}
      <ul className='flex justify-between gap-5 pt-14'>
        <li><a href={`mailto:${email}`}><FaEnvelope className='text-2xl' /></a></li>
        <li><a href={linkedIn} target='_blank' rel='noreferrer'><FaLinkedin className='text-2xl' /></a></li>
        <li><a href={gitHub} target='_blank' rel='noreferrer'><FaGithubSquare className='text-2xl' /></a></li>
        <li><a href={resume} target='_blank' rel='noreferrer'><FaFileAlt className='text-2xl' /></a></li>
      </ul>
    
    </div>
  );
}

export default SideNav;