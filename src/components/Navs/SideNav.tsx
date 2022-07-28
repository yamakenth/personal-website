import React from "react";
import { FaTimes } from "react-icons/fa";

import NavLinks from "./NavLinks";
import SocialNavLinks from "./SocialNavLinks";

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
        <SocialNavLinks isMobile={true} />
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
