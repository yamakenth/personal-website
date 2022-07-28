import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-scroll";

import { resume } from "../data/external-links";

const DESCRIPTION: string =
  "Hello! My name is Ken and I'm a self-taught full-stack web developer.";

export default function Home(): JSX.Element {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black/70 via-black/50 to-neutral-100/30"
    >
      <div
        className="
          container 
          h-[21rem] 
          xxs:h-96 
          xs:h-[26rem] 
          sm:h-80 
          md:h-[50vw] 
          xl:h-screen 
          py-3 
          flex 
          flex-col 
          items-center 
          justify-end 
          sm:justify-center"
      >
        <div
          className="
            flex 
            flex-col 
            justify-center 
            items-center 
            gap-2 
            xl:gap-6 
            border-2 
            xl:border-3 
            border-solid 
            rounded-2xl 
            border-neutral-50/50 
            p-2 
            xl:p-8
            sm:-translate-x-[20%]
            lg:-translate-x-[40%]"
        >
          {/* intro text */}
          <h4 className="text-neutral-50 text-center w-72 xl:w-96">
            {DESCRIPTION}
          </h4>

          {/* button navs */}
          <div className="flex justify-center items-center">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Resume&nbsp;
              <FaExternalLinkAlt />
            </a>
            <Link
              to="projects"
              smooth={true}
              offset={-40}
              className="btn btn-secondary"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
