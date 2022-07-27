import React from "react";
import { Link } from "react-scroll";

const CONTAINERS = ["home", "about", "skills", "projects", "contact"];

interface NavLinksProps {
  isMobile: boolean;
}

export default function NavLinks({ isMobile }: NavLinksProps): JSX.Element {
  return (
    <ul
      className={`
        flex 
        justify-end 
        items-center 
        gap-8 
        ${isMobile ? "flex-col py-6" : null}
      `}
    >
      {CONTAINERS.map((container) => {
        return (
          <li key={container}>
            <Link
              to={container}
              smooth={true}
              offset={-40}
              className="
                pb-1 
                px-1 
                font-light 
                uppercase 
                cursor-pointer 
                navlink-effect 
                hover:text-sky-600"
            >
              {container}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
