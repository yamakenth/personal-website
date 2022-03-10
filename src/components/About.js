// EDIT LATER
const ABOUT_TEXT = `Hello, my name is Ken! I am a business intelligence analyst transitioning into 
a software engineering role`;

function About() {
  
  return (
    <section id='about' className='h-fit bg-gradient-to-b from-black/70 to-white/40'>
      <div className='
        container 
        h-72 
        md:h-screen 
        flex 
        flex-col 
        items-center 
        justify-end
        md:pb-52
        md:text-2xl
      '>
        <p className='text-white text-center p-3 md:w-1/2'>{ABOUT_TEXT}</p>
      </div>
    </section>
  );
}

export default About;