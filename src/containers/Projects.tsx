// @ts-nocheck
import { useState } from "react";
import {
  FaGithub,
  FaEye,
  FaCaretLeft,
  FaCaretRight,
  FaCircle,
} from "react-icons/fa";

import projects from "../data/projects";

// carousel demo section
const CarouselDemo = (props) => {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-5">
      {projects
        .map((project) => project.demoGif)
        .map((src, i) => {
          return (
            <img
              key={i}
              src={src}
              alt={`Live demo of project`}
              className={`rounded-lg ${
                i === props.curSlide ? null : "hidden"
              } xl:h-full`}
            />
          );
        })}
    </div>
  );
};

// carousel text & button section
const CarouselDetails = (props) => {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-3 h-[33rem] xxs:h-[28rem] xs:h-[24rem] sm:h-[18rem] md:h-[24rem] xl:h-auto">
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className={`${
              i === props.curSlide ? null : "hidden"
            } h-full flex flex-col justify-between items-center`}
          >
            {/* text */}
            <div>
              <h3 className="underline font-bold mb-2">{project.name}</h3>
              <p className="mb-1">
                <span className="font-bold">Summary:&nbsp;</span>
                {project.summary}
              </p>
              <p className="mb-1">
                <span className="font-bold">Features:&nbsp;</span>
                {project.features}
              </p>
              <p className="mb-1">
                <span className="font-bold">Technologies Used:&nbsp;</span>
                {project.technologies}
              </p>
            </div>
            {/* button */}
            <div className="flex justify-center items-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FaEye />
                &nbsp;Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub />
                &nbsp;Repo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// carousel left/right controls
const CarouselControls = (props) => {
  const getNextSlide = () => {
    return props.curSlide === projects.length - 1
      ? props.setCurSlide(0)
      : props.setCurSlide(props.curSlide + 1);
  };

  const getPrevSlide = () => {
    return props.curSlide === 0
      ? props.setCurSlide(projects.length - 1)
      : props.setCurSlide(props.curSlide - 1);
  };

  return (
    <>
      <div className="group md:hover:bg-neutral-900/40 absolute top-0 left-0 h-full w-fit rounded-l-xl flex justify-center items-center">
        <button type="button" onClick={getPrevSlide}>
          <FaCaretLeft className="text-5xl text-neutral-500/60 md:group-hover:text-neutral-50/80" />
        </button>
      </div>
      <div className="group md:hover:bg-neutral-900/40 absolute top-0 right-0 h-full w-fit rounded-r-xl flex justify-center items-center">
        <button type="button" onClick={getNextSlide}>
          <FaCaretRight className="text-5xl text-neutral-500/60 md:group-hover:text-neutral-50/80" />
        </button>
      </div>
    </>
  );
};

// carousel dots navigation
const CarouselDotsNav = (props) => {
  const moveSlide = (i) => {
    props.setCurSlide(i);
  };
  return (
    <div className="col-span-full flex items-center justify-center gap-3 py-3">
      {[...Array(projects.length)].map((e, i) => {
        return (
          <button type="button" key={i} onClick={() => moveSlide(i)}>
            <FaCircle
              className={`text-[0.5rem] text-neutral-500 hover:text-neutral-400 hover:scale-125 ${
                i === props.curSlide ? "text-neutral-400 scale-125" : null
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

// project section
const Projects = () => {
  const [curSlide, setCurSlide] = useState(0);

  return (
    <section id="projects" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="mb-5">Projects</h2>

        {/* carousel */}
        <div className="border border-solid border-neutral-200 rounded-xl drop-shadow-md p-6 lg:px-12 max-w-5xl mx-auto grid grid-cols-8 gap-x-6 gap-y-6 relative">
          <CarouselDemo curSlide={curSlide} />
          <CarouselDetails curSlide={curSlide} />
          <CarouselDotsNav curSlide={curSlide} setCurSlide={setCurSlide} />
          <CarouselControls curSlide={curSlide} setCurSlide={setCurSlide} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
