import { useState } from 'react';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithubSquare, 
  FaGithub, 
  FaFileAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

// class constants 
const EMAIL ='yamakenth@gmail.com';
const LINKEDIN ='https://www.linkedin.com/in/yamakenth/';
const GITHUB='https://github.com/yamakenth';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';
const SOURCE_CODE = 'https://github.com/yamakenth/personal-website';

// create useHover hook
function useHover() {
  const [hovering, setHovering] = useState(false);

  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false)
  }

  return [hovering, onHoverProps];
}

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
        <a href={`mailto:${EMAIL}`} className='contact-navitem' {...emailHoverProps}>
          <FaEnvelope size={24} />
          {(emailIsHovering) 
            ? <span className='flex gap-2 items-center'>yamakenth@gmail.com<FaExternalLinkAlt size={14} /></span> 
            : 'Email'
          }
        </a>
      </li>
      <li>
        <a href={LINKEDIN} target='_blank' rel='noreferrer' className='contact-navitem' {...linkedinHoverProps}>
          <FaLinkedin size={24} />
          {(linkedinIsHovering) 
            ? <span className='flex gap-2 items-center'>yamakenth<FaExternalLinkAlt size={14} /></span>
            : 'LinkedIn'
          }
        </a>
      </li>
      <li>
        <a href={GITHUB} target='_blank' rel='noreferrer' className='contact-navitem' {...githubHoverProps}>
          <FaGithubSquare size={24} />
          {(githubIsHovering) 
            ? <span className='flex gap-2 items-center'>yamakenth<FaExternalLinkAlt size={14} /></span>
            : 'GitHub'
          }
        </a>
      </li>
      <li>
        <a href={RESUME} target='_blank' rel='noreferrer' className='contact-navitem' {...resumeHoverProps}>
          <FaFileAlt size={24} />
          {(resumeIsHovering) 
            ? <span className='flex gap-2 items-center'>Open in new tab<FaExternalLinkAlt size={14} /></span>
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
    <section id='contact' className='bg-neutral-50'>
      <div className='container py-6 flex flex-col items-center justify-between gap-10'>
        <h2 className='uppercase text-2xl self-start'>Contact</h2>
        <SocialNavLinks />
        <footer>
          <p className='flex justify-start text-sm mt-5'>Copyright &copy; {curYear}&nbsp;
            <a href={SOURCE_CODE} target='_blank' rel='noreferrer' className='flex gap-1 items-center'>
              yamakenth 
              <FaGithub size={18} />
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;