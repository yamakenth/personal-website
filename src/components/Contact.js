import { FaEnvelope, FaLinkedin, FaGithubSquare, FaGithub, FaFileAlt } from 'react-icons/fa';

// class constants 
const EMAIL ='yamakenth@gmail.com';
const LINKEDIN ='https://www.linkedin.com/in/yamakenth/';
const GITHUB='https://github.com/yamakenth';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';
const SOURCE_CODE = 'https://github.com/yamakenth/personal-website';

// create social nav links
function SocialNavLinks() {
  return (
    <ul className='flex flex-col gap-3 text-xl'>
      <li>
        <a href={`mailto:${EMAIL}`} className='flex gap-2 items-center hover:underline'>
          <FaEnvelope size={24} />
          Email
        </a>
      </li>
      <li>
        <a href={LINKEDIN} target='_blank' rel='noreferrer' className='flex gap-2 items-center hover:underline'>
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </li>
      <li>
        <a href={GITHUB} target='_blank' rel='noreferrer' className='flex gap-2 items-center hover:underline'>
          <FaGithubSquare size={24} />
          GitHub
        </a>
      </li>
      <li>
        <a href={RESUME} target='_blank' rel='noreferrer' className='flex gap-2 items-center hover:underline'>
          <FaFileAlt size={24} />
          Resume
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