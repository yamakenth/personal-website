import { useState } from 'react';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaGithub, 
  FaFileAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

import { email, linkedIn, gitHub, resume, sourceCode } from '../data/external-links';
import { useHover } from '../utilities';

// create social nav links
function SocialNavLinks() {
  // useHover to change text
  const [emailIsHovering, emailHoverProps] = useHover();
  const [linkedinIsHovering, linkedinHoverProps] = useHover();
  const [githubIsHovering, githubHoverProps] = useHover();
  const [resumeIsHovering, resumeHoverProps] = useHover();
  
  return (
    <ul className='flex flex-col items-center justify-between gap-4 text-xl'>
      <li>
        <a href={`mailto:${email}`} className='contact-navitem hover:text-sky-600' {...emailHoverProps}>
          <FaEnvelope size={24} />
          {(emailIsHovering) 
            ? <span className='contact-navitem-span'>yamakenth@gmail.com<FaExternalLinkAlt size={14} /></span> 
            : 'Email'
          }
        </a>
      </li>
      <li>
        <a href={linkedIn} target='_blank' rel='noreferrer' className='contact-navitem hover:text-sky-600' {...linkedinHoverProps}>
          <FaLinkedin size={24} />
          {(linkedinIsHovering) 
            ? <span className='contact-navitem-span'>yamakenth<FaExternalLinkAlt size={14} /></span>
            : 'LinkedIn'
          }
        </a>
      </li>
      <li>
        <a href={gitHub} target='_blank' rel='noreferrer' className='contact-navitem hover:text-sky-600' {...githubHoverProps}>
          <FaGithubSquare size={24} />
          {(githubIsHovering) 
            ? <span className='contact-navitem-span'>yamakenth<FaExternalLinkAlt size={14} /></span>
            : 'GitHub'
          }
        </a>
      </li>
      <li>
        <a href={resume} target='_blank' rel='noreferrer' className='contact-navitem hover:text-sky-600' {...resumeHoverProps}>
          <FaFileAlt size={24} />
          {(resumeIsHovering) 
            ? <span className='contact-navitem-span'>Open in new tab<FaExternalLinkAlt size={14} /></span>
            : 'Resume'
          }
        </a>
      </li>
    </ul>
  );
}

// create contact 
function Contact() {
  // current year for copyright 
  const curYear = new Date().getFullYear();

  return (
    <section id='contact' className='bg-neutral-100'>
      <div className='container py-16 flex flex-col items-center justify-between gap-10'>
        <h2 className='self-start'>Contact</h2>
        <SocialNavLinks />
        <footer>
          <p className='flex justify-start text-sm mt-5'>Copyright &copy; {curYear}&nbsp;
            yamakenth
            <a href={sourceCode} target='_blank' rel='noreferrer' className='flex gap-1 items-center ml-2'>
               <FaGithub size={18} />
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;