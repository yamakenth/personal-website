import blogApi from '../assets/img/projects/blog-api.png';
import { FaGithub, FaEye, FaCaretLeft, FaCaretRight, FaCircle } from 'react-icons/fa';

function Projects() {
  return (
    <section id='projects' className='bg-neutral-50'>
      <div className='container py-16 flex flex-col justify-center items-center gap-6'>
        <h2 className='self-start'>Projects</h2>
        <div className='
          border-solid 
          border 
          border-neutral-200 
          rounded-xl 
          drop-shadow-md 
          p-6 
        '>
          <div className='group hover:bg-neutral-900/40 absolute top-0 left-0 h-full rounded-l-xl flex flex-col items-center justify-center'>
            <button type='button'>
              <FaCaretLeft className='text-5xl text-neutral-500/60 group-hover:text-neutral-50/80' />
            </button>
          </div>
          <div className='group hover:bg-neutral-900/40 absolute top-0 right-0 h-full rounded-r-xl flex flex-col items-center justify-center'>
            <button type='button'>
              <FaCaretRight className='text-5xl text-neutral-500/60 group-hover:text-neutral-50/80' />
            </button>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
            <img src={blogApi} alt='' className='w-full lg:w-3/5 2xl:w-1/2 h-fit rounded-lg'/>
            
            <div>
              <h3 className='underline font-bold mb-2'>Members Only</h3>

              <p className='mb-1'><span className='font-bold'>Summary:&nbsp;</span>This is a React client frontend for a blog web app built using the MERN stack.</p>

              <p className='mb-1'><span className='font-bold'>Features:&nbsp;</span>A blog post contains a title, an author, a published date, blog content, and a list of comments. A comment contains a username (manual entry) of the author and comment content. Users can read blog posts (only published posts). Users can create and read comments.</p>

              <p className='mb-1'><span className='font-bold'>Tech Stack:&nbsp;</span>JavaScript, React.js, Node.js, Express.js, Passport.js, MongoDB, Mongoose, HTML5, CSS3, Bootstrap</p>

              <div className='flex justify-center items-center gap-2 mt-8'>
                <a href='https://tailwindcss.com/docs/width' target='_blank' rel='noreferrer' className='btn btn-secondary'>
                  <FaEye />&nbsp;Demo
                </a>
                <a href='https://tailwindcss.com/docs/width' target='_blank' rel='noreferrer' className='btn btn-secondary'>
                  <FaGithub />&nbsp;Repo
                </a>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center gap-3 p-3 mt-6'>
            {
              [...Array(6)].map((e, i) => {
                return (
                  <button type='button'>
                    <FaCircle key={i} className='text-[0.5rem] text-neutral-500 hover:text-neutral-400 hover:scale-125' />
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;