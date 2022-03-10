// EDIT LATER
const ABOUT_TEXT = `Hello, my name is Ken! I am a business intelligence analyst transitioning into 
a software engineering role`;

function About() {
  
  return (
    <section id='about' className='h-fit bg-gradient-to-b from-black/70 to-white/40'>
      <div className='container h-72 flex flex-col items-center justify-end'>
        <p className='text-white text-center p-3'>{ABOUT_TEXT}</p>
      </div>
    </section>
  );
}

export default About;