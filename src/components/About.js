import { FaCode } from 'react-icons/fa';

// CHANGE LATER
const ABOUT_TEXT = `I'm an incoming masters of computer science student at the University of 
Chicago. I graduated from the University of Washington with a degree in industrial engineering and 
worked as a business intelligence analyst at Shopee (largest e-commerce platform in greater 
Southeast Asia). I decided to learn web development as I observed how technical skills can amplify 
the amount of impact an individual can have on businesses. I also enjoy the environment of 
continuous learning in tech industry. Besides coding, I enjoy going to the gym, reading, following 
tech news, and watching Formula 1.`;

function About() {
  return (
    <section id='about' className='bg-neutral-50'>
      <div className='container py-16'>
        <h2 className='uppercase'>About</h2>
        <div className='mt-5 flex items-center justify-center gap-12 px-4'>
          <p className='text-justify md:w-1/2 lg:w-7/12'>{ABOUT_TEXT}</p>
          <FaCode size={180} className='hidden md:block' />
        </div>
      </div>
    </section>
  );
}

export default About;