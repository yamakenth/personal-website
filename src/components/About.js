import { FaCode } from 'react-icons/fa';

import { aboutText } from '../data/external-links';

const About = () => {
  return (
    <section id='about' className='bg-neutral-50'>
      <div className='container py-16'>
        <h2 className='uppercase'>About</h2>
        
        <div className='mt-5 flex items-center justify-center gap-12 px-4'>
          <p className='text-justify md:w-2/3'>{aboutText}</p>
          <FaCode className='hidden md:block text-[10rem]' />
        </div>

      </div>
    </section>
  );
}

export default About;