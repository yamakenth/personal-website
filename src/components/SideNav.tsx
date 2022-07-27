import React from "react";
import {
  FaEnvelope,
  FaFileAlt,
  FaGithubSquare,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import { email, gitHub, linkedIn, resume } from "../data/external-links";
import NavLinks from "./NavLinks";

interface SideNavProps {
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({
  showSideNav,
  setShowSideNav,
}: SideNavProps): JSX.Element {
  return (
    <>
      {/* navbar */}
      <div
        className={`
          bg-white 
          text-neutral-900 
          absolute 
          top-0 
          right-0 
          px-6 
          py-3 
          min-w-[50vw] 
          h-screen 
          flex 
          flex-col 
          items-center 
          justify-start 
          z-50
          ease-linear 
          duration-500 
          ${showSideNav ? "translate-x-0" : "translate-x-[100vw]"} 
        `}
      >
        {/* close button */}
        <button
          type="button"
          className="self-start"
          onClick={() => setShowSideNav(false)}
        >
          <FaTimes className="text-2xl" />
        </button>
        {/* page nav links */}
        <NavLinks isMobile={true} />
        {/* social navs */}
        <ul className="flex justify-between gap-5 pt-14">
          <li>
            <a href={`mailto:${email}`}>
              <FaEnvelope className="text-2xl" />
            </a>
          </li>
          <li>
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          </li>
          <li>
            <a href={gitHub} target="_blank" rel="noreferrer">
              <FaGithubSquare className="text-2xl" />
            </a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noreferrer">
              <FaFileAlt className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* overlay */}
      <div
        className={`
          absolute 
          top-0 
          right-0 
          h-screen 
          w-screen 
          bg-neutral-900/70 
          z-40 
          ${showSideNav ? "block" : "hidden"}
        `}
        onClick={() => setShowSideNav(false)}
      ></div>
    </>
  );
}
