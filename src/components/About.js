import { FaCode } from 'react-icons/fa';

// CHANGE LATER
const ABOUT_TEXT = `I'm currently an undergraduate looking to improve my software and web 
development knowledge. I study at UC Berkeley, and I'm majoring in data science. My programming 
journey kickstarted when learning to make a simple HTML website on Window's notepad program. The 
Odin Project's Full Stack JavaScript Curriculum is just one of the ways I'm learning to code now. 
Besides coding, I like to play board games and video games, watch MMA, and learn Spanish.`

function About() {
  
  return (
    <section id='about' className='bg-neutral-50'>
      <div className='container py-16'>
        <h2 className='uppercase'>About</h2>
        <div className='mt-5 flex items-center justify-center gap-12 px-12'>
          <div className='w-1/2'>
            <p>{ABOUT_TEXT}</p>
          </div>
          <FaCode size={180} />
        </div>
      </div>
    </section>
  );
}

export default About;