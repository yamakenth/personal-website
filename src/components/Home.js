import { Link } from 'react-scroll';
import { FaExternalLinkAlt } from 'react-icons/fa';

const INTRO_TEXT = 'Hello! My name is Ken and I\'m a self-taught full-stack web developer.';
const RESUME ='https://drive.google.com/file/d/1bMAp7i-5VW5fCvf2T5T6E-TcE9nu7z17/view?usp=sharing';

function Home() {
  return (
    <section id='home' className='bg-gradient-to-b from-black/70 via-black/20 to-white/40'>
      <div className='
        container
        h-72
        xxs:h-80
        xs:h-96
        lg:h-[50vw]
        py-3
        flex
        flex-col
        items-center
        sm:items-start
        justify-end
        sm:justify-center
      '>
        <div className='
          flex 
          flex-col 
          justify-center 
          items-center 
          gap-3 
          lg:gap-5
          xl:gap-8
          p-2 
          xl:p-9
          border-2 
          border-solid 
          rounded-2xl 
          border-neutral-50/50
          md:ml-20
          lg:ml-38
          xl:ml-56
          md:mb-6
          lg:-mb-6
        '>
          <h4 className='
            text-neutral-50 
            text-center
            w-72
            lg:w-96
            lg:text-2xl
            xl:text-3xl
          '>
            {INTRO_TEXT}
          </h4>
          <div className='flex justify-center items-center gap-2'>
            <a href={RESUME} target='_blank' rel='noreferrer' className='btn btn-primary'>
              Resume&nbsp;&nbsp;<FaExternalLinkAlt size={16} />
            </a>
            <Link to='projects' smooth={true} offset={-50} className='btn btn-secondary'>Projects</Link> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;