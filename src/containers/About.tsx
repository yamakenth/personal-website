import React, { MutableRefObject, useRef } from "react";
import { FaCode } from "react-icons/fa";

import { aboutText } from "../data/external-links";
import { useOnScreen } from "../utilities";

export default function About(): JSX.Element {
  const ref = useRef() as MutableRefObject<HTMLElement>;
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <section ref={ref} id="about" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="uppercase">About</h2>
        <div
          className={`
            mt-5 
            flex 
            items-center 
            justify-center 
            gap-12 
            px-4 
            ease-linear 
            duration-1000
            ${isVisible ? "translate-x-0" : "-translate-x-[100vw]"}
          `}
        >
          <p className="text-justify md:w-2/3">{aboutText}</p>
          <FaCode className="hidden md:block text-[10rem]" />
        </div>
      </div>
    </section>
  );
}
