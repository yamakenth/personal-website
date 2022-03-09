import { FaEnvelope, FaLinkedin, FaGithubSquare, FaGithub, FaFileAlt } from 'react-icons/fa';

// class constants 
const EMAIL ='yamakenth@gmail.com';
const LINKEDIN ='https://www.linkedin.com/in/yamakenth/';
const GITHUB='https://github.com/yamakenth';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';

// create social nav links
function SocialNavLinks() {
  return (
    <ul>
      <li>
        <a href={`mailto:${EMAIL}`}><FaEnvelope size={24} />Email</a>
      </li>
      <li>
        <a href={LINKEDIN} target='_blank' rel='noreferrer'><FaLinkedin size={24} />GitHub</a>
      </li>
      <li>
        <a href={GITHUB} target='_blank' rel='noreferrer'><FaGithubSquare size={24} />LinkedIn</a>
      </li>
      <li>
        <a href={RESUME} target='_blank' rel='noreferrer'><FaFileAlt size={24} />Resume</a>
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
      <div className='container h-96'>
        <h2 className='uppercase text-2xl'>Contact</h2>
        <SocialNavLinks />
        <footer>Copyright &copy; {curYear} yamakenth <FaGithub size={24} /></footer>
      </div>
    </section>
  );
}

export default Contact;