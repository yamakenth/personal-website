import { FaCode } from 'react-icons/fa';

// CHANGE LATER
const ABOUT_TEXT = `I'm incoming uchicago cs student. graduated from ise at uw with honors. at college did ds research to quantify...
Joined shopee (largest ecommerce platform in greater SE asia) as bi analyst and was promoted to team lead within a year.
Decided to purse a more technical profession as I saw first hand how technology can amplify the impact and individual can have.
I also enjoy the enviornment of continuos learning in tech industry. Decided to learn full-stack web dev as it 
allows me to create a useful application. besides coding, I like to go the gym, read, follow tech news, and watch Formula 1.`

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