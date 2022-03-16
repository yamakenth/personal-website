import { Link } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { resume, homeText } from '../data/external-links';

const Home = () => {
  return (
    <section id='home' className='bg-gradient-to-b from-black/70 via-black/20 to-white/40'>
      <div className='container h-[21rem] xxs:h-96 xs:h-[26rem] lg:h-[50vw] xl:h-screen py-3 flex flex-col items-center justify-end
      '>
        {/* flex flex-col items-center sm:items-start justify-end sm:justify-center */}
        
        <div className='flex flex-col justify-center items-center border-2 border-solid rounded-2xl border-neutral-50/50'>
          
          {/* intro text */}
          <h4 className='text-neutral-50 text-center'>{homeText}</h4>
          
          {/* button navs */}
          <div className='flex justify-center items-center'>
            <a href={resume} target='_blank' rel='noreferrer' className='btn btn-primary'>Resume&nbsp;<FaExternalLinkAlt /></a>
            <Link to='projects' smooth={true} offset={-40} className='btn btn-secondary'>Projects</Link> 
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;