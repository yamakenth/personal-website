// EDIT LATER
const ABOUT_TEXT = `Hello, my name is Ken! I am a business intelligence analyst transitioning into 
a software engineering role`;

function About() {
  
  return (
    <section id='about' className='bg-gradient-to-b from-black/70 to-white/40'>
      <div className='
        container 
        h-72 
        md:h-96
        xl:h-[80vh]
        flex 
        flex-col 
        items-center 
        justify-end
        xl:justify-center
        md:pb-40
        md:text-2xl
      '>
        <p className='
          text-white 
          text-center 
          md:text-left 
          md:mr-40 
          xl:mr-96
          p-3 
          md:w-1/2
        '>
          {ABOUT_TEXT}
        </p>
      </div>
    </section>
  );
}

export default About;