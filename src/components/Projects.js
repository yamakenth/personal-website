import { useState } from 'react';
import { FaGithub, FaEye, FaCaretLeft, FaCaretRight, FaCircle } from 'react-icons/fa';

import projects from '../project-data';

// left and right arrow for carousel
function Control(props) {
  return (
    <>
      <div className='group hover:bg-neutral-900/40 absolute top-0 left-0 h-full rounded-l-xl flex flex-col items-center justify-center'>
        <button type='button' onClick={props.getPrevSlide}>
          <FaCaretLeft className='text-5xl text-neutral-500/60 group-hover:text-neutral-50/80' />
        </button>
      </div>
      <div className='group hover:bg-neutral-900/40 absolute top-0 right-0 h-full rounded-r-xl flex flex-col items-center justify-center'>
        <button type='button' onClick={props.getNextSlide}>
          <FaCaretRight className='text-5xl text-neutral-500/60 group-hover:text-neutral-50/80' />
        </button>
      </div>
    </>
  );
}

// project details
function Details(props) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
      <img src={projects[props.curSlide].demoGif} alt='' className='w-full lg:w-3/5 2xl:w-1/2 rounded-lg'/>
      <div className='h-full flex flex-col justify-between'>
        <div>
          <h3 className='underline font-bold mb-2'>{projects[props.curSlide].name}</h3>
          <p className='mb-1'>
            <span className='font-bold'>Summary:&nbsp;</span>{projects[props.curSlide].summary}
          </p>
          <p className='mb-1'>
            <span className='font-bold'>Features:&nbsp;</span>{projects[props.curSlide].features}
          </p>
          <p className='mb-1'>
            <span className='font-bold'>Technologies Used:&nbsp;</span>{projects[props.curSlide].technologies}
          </p>
        </div>
        <div className='flex justify-center items-center gap-2 mt-8'>
          <a href={projects[props.curSlide].demoLink} target='_blank' rel='noreferrer' className='btn btn-secondary'>
            <FaEye />&nbsp;Demo
          </a>
          <a href={projects[props.curSlide].repoLink} target='_blank' rel='noreferrer' className='btn btn-secondary'>
            <FaGithub />&nbsp;Repo
          </a>
        </div>
      </div>
    </div>
  );
}

// carousel dot nav
function DotNav(props) {
  function setSlide(e, i) {
    props.setCurSlide(i);
  }
  
  return (
    <div className='flex items-center justify-center gap-3 p-3'>
      {
        [...Array(projects.length)].map((e, i) => {
          return (
            <button type='button' key={i} onClick={e => setSlide(e, i)}>
              <FaCircle className={`
                text-[0.5rem] 
                text-neutral-500 
                hover:text-neutral-400 
                hover:scale-125
                ${(i === props.curSlide) ? 'text-neutral-400 scale-125' : null}
              `} />
            </button>
          )
        })
      }
    </div>
  );
}

// project
function Projects() {
  const [curSlide, setCurSlide] = useState(0);

  function getNextSlide() {
    return (curSlide === projects.length - 1) ? setCurSlide(0) : setCurSlide(curSlide + 1);
  }

  function getPrevSlide() {
    return (curSlide === 0) ? setCurSlide(projects.length - 1) : setCurSlide(curSlide - 1);
  }
  
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
          flex
          flex-col
          justify-between
          h-[50rem]
          md:h-[58rem]
          lg:h-[32rem]
          xl:h-[34rem]
          2xl:h-[36rem]
          w-full
        '>
          {/* Carousel control */}
          <Control getNextSlide={getNextSlide} getPrevSlide={getPrevSlide} />
          {/* Project details */}
          <Details curSlide={curSlide} />
          {/* Carousel Nav */}
          <DotNav curSlide={curSlide} setCurSlide={setCurSlide} />
        </div>
      </div>
    </section>
  );
}

export default Projects;