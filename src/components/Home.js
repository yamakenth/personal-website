import { Link } from 'react-scroll';

const INTRO_TEXT = 'Hello! My name is Ken and I\'m a self-taught full-stack web developer.';

function Home() {
  return (
    <section id='home' className='bg-gradient-to-b from-neutral-900/70 to-neutral-50/40'>
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
          <p className='
            text-neutral-50 
            text-center
            w-72
            lg:w-96
            lg:text-2xl
            xl:text-3xl
          '>
            {INTRO_TEXT}
          </p>
          <div>
            <Link to='skills' smooth={true} offset={-50} type='button' className='btn btn-primary'>Skills</Link>
            <Link to='projects' smooth={true} offset={-50} type='button' className='btn btn-secondary'>Projects</Link> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;