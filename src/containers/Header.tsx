import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import NavLinks from "../components/Navs/NavLinks";
import SideNav from "../components/Navs/SideNav";
import SocialNavLinks from "../components/Navs/SocialNavLinks";

const NAME = "Ken Yamada";

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  function handleLogoClick(): void {
    scroll.scrollToTop();
  }

  window.addEventListener("scroll", () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  });

  return (
    <header
      id="header"
      className={`
        fixed 
        top-0 
        left-0 
        w-full 
        z-50 
        ${!scrolled ? "text-neutral-50" : "bg-neutral-50 drop-shadow-md"}
      `}
    >
      <div className="container py-2 flex justify-between items-center">
        {/* top-left logo */}
        <h1
          className="font-semibold tracking-widest cursor-pointer"
          onClick={handleLogoClick}
        >
          {NAME}
        </h1>

        {/* top-right desktop nav/hamburger botton */}
        <nav>
          {/* desktop nav */}
          <div className="hidden md:block">
            <NavLinks isMobile={false} />
          </div>
          {/* hamburger button */}
          <button
            type="button"
            onClick={() => setShowSideNav(true)}
            className="md:hidden flex justify-center items-center"
          >
            <FaBars className="text-2xl" />
          </button>
        </nav>

        {/* sidenav */}
        <div className="md:hidden fixed top-0 right-0">
          <SideNav setShowSideNav={setShowSideNav} showSideNav={showSideNav}>
            <NavLinks isMobile={true} />
            <SocialNavLinks isMobile={true} />
          </SideNav>
        </div>
      </div>
    </header>
  );
}
