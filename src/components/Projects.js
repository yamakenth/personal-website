import { useState } from 'react';
import { FaGithub, FaEye, FaCaretLeft, FaCaretRight, FaCircle } from 'react-icons/fa';

import projects from '../data/projects';

const Projects = () => {
  const [curSlide, setCurSlide] = useState(0);

  const getNextSlide = () => {
    return (curSlide === projects.length - 1) ? setCurSlide(0) : setCurSlide(curSlide + 1);
  }

  const getPrevSlide = () => {
    return (curSlide === 0) ? setCurSlide(projects.length - 1) : setCurSlide(curSlide - 1);
  }
  
  return (
    <section id='projects' className='bg-neutral-50'>
      <div className='container py-16'>
        <h2 className='mb-5'>Projects</h2>

        {/* carousel */}
        <div className='border border-solid border-neutral-200 rounded-xl drop-shadow-md p-6 w-full grid grid-cols-2 gap-x-3 gap-y-6 md:gap-y-0 relative'>
          
          {/* demo */}
          <div className='border border-solid border-green-300 col-span-full md:col-span-1'>
            {
              projects
                .map(project => project.demoGif)
                .map((src, i) => {
                  return ( 
                    <img key={i} src={src} alt={`Live demo of project`} className={`rounded-lg ${(i === curSlide) ? null : 'hidden'}`} />
                  );
                })
            }
          </div>

          {/* text & button */}
          <div className='border border-solid border-green-300 col-span-full md:col-span-1'>
            {
              projects.map((project, i) => {
                return (
                  <div key={i} className={`${(i === curSlide) ? null : 'hidden'}`}>
                    {/* text */}
                    <div>
                      <h3 className='underline font-bold mb-2'>{project.name}</h3>
                      <p className='mb-1'><span className='font-bold'>Summary:&nbsp;</span>{project.summary}</p>
                      <p className='mb-1'><span className='font-bold'>Features:&nbsp;</span>{project.features}</p>
                      <p className='mb-1'><span className='font-bold'>Technologies Used:&nbsp;</span>{project.technologies}</p>
                    </div>
                    {/* button */}
                    <div className='flex justify-center items-center'>
                      <a href={project.demoLink} target='_blank' rel='noreferrer' className='btn btn-secondary'>
                        <FaEye />&nbsp;Demo
                      </a>
                      <a href={project.repoLink} target='_blank' rel='noreferrer' className='btn btn-secondary'>
                        <FaGithub />&nbsp;Repo
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </div>

          {/* dots navigation */}
          <div className='border border-solid border-green-300 col-span-full flex items-center justify-center gap-3 py-3'>
            {
              [...Array(projects.length)].map((e, i) => {
                return (
                  <button type='button' key={i} onClick={() => console.log('clicked')}>
                    <FaCircle className={`text-[0.5rem] text-neutral-500 hover:text-neutral-400 hover:scale-125`}/>
                  </button>
                );
              })
            }
          </div>
        
          {/* carousel left/right controls */}
          <div className='group md:hover:bg-neutral-900/40 absolute top-0 left-0 h-full w-fit rounded-l-xl flex justify-center items-center'>
            <button type='button' onClick={getPrevSlide}>
              <FaCaretLeft className='text-5xl text-neutral-500/60 md:group-hover:text-neutral-50/80' />
            </button>
          </div>
          <div className='group md:hover:bg-neutral-900/40 absolute top-0 right-0 h-full w-fit rounded-r-xl flex justify-center items-center'>
            <button type='button' onClick={getNextSlide}>
              <FaCaretRight className='text-5xl text-neutral-500/60 md:group-hover:text-neutral-50/80' />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;