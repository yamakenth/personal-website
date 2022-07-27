import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";

interface CarouselDetailsProps {
  name: string;
  summary: string;
  features: string;
  technologies: string;
  demoLink: string;
  repoLink: string;
}

export default function CarouselDetails({
  name,
  summary,
  features,
  technologies,
  demoLink,
  repoLink,
}: CarouselDetailsProps): JSX.Element {
  return (
    <div
      className="
        col-span-full 
        md:col-span-4 
        xl:col-span-3 
        h-[33rem] 
        xxs:h-[28rem] 
        xs:h-[24rem] 
        sm:h-[18rem] 
        md:h-[24rem] 
        xl:h-auto"
    >
      <div className={"h-full flex flex-col justify-between items-center"}>
        {/* text */}
        <div>
          <h3 className="underline font-bold mb-2">{name}</h3>
          <p className="mb-1">
            <span className="font-bold">Summary:&nbsp;</span>
            {summary}
          </p>
          <p className="mb-1">
            <span className="font-bold">Features:&nbsp;</span>
            {features}
          </p>
          <p className="mb-1">
            <span className="font-bold">Technologies Used:&nbsp;</span>
            {technologies}
          </p>
        </div>

        {/* button */}
        <div className="flex justify-center items-center">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FaEye />
            &nbsp;Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub />
            &nbsp;Repo
          </a>
        </div>
      </div>
    </div>
  );
}
