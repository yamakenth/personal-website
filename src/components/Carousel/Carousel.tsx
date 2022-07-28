import React, { useState } from "react";

import CarouselControls from "./CarouselControls";
import CarouselDemo from "./CarouselDemo";
import CarouselDetails from "./CarouselDetails";
import CarouselDotsNav from "./CarouselDotNav";

export interface IProject {
  name: string;
  summary: string;
  features: string;
  technologies: string;
  demoGif: any;
  demoLink: string;
  repoLink: string;
}

interface CarouselProps {
  projects: IProject[];
}

export default function Carousel({ projects }: CarouselProps): JSX.Element {
  const [curSlide, setCurSlide] = useState(0);

  return (
    <div
      className="
      border 
      border-solid 
      border-neutral-200 
      rounded-xl 
      drop-shadow-md 
      p-6 
      lg:px-12 
      max-w-5xl 
      mx-auto 
      grid 
      grid-cols-8 
      gap-x-6 
      gap-y-6 
      relative"
    >
      <CarouselDemo demoGif={projects[curSlide].demoGif} />
      <CarouselDetails
        name={projects[curSlide].name}
        summary={projects[curSlide].summary}
        features={projects[curSlide].features}
        technologies={projects[curSlide].technologies}
        demoLink={projects[curSlide].demoLink}
        repoLink={projects[curSlide].repoLink}
      />
      <CarouselDotsNav
        curSlide={curSlide}
        setCurSlide={setCurSlide}
        projectLength={projects.length}
      />
      <CarouselControls
        curSlide={curSlide}
        setCurSlide={setCurSlide}
        projectLength={projects.length}
      />
    </div>
  );
}
