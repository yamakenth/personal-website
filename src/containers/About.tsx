import React, { MutableRefObject, useRef } from "react";
import { FaCode } from "react-icons/fa";

import { useOnScreen } from "../utilities";

const DESCRIPTION: string = `I'm an incoming masters of computer science student at the University of 
Pennsylvania for Fall 2022. I graduated from the University of Washington with a degree in 
industrial engineering and worked as a business intelligence analyst at Shopee (largest e-commerce 
platform in greater Southeast Asia). I decided to explore web development as I became interested in 
learning how technologies we use everyday function under the hood. Besides coding, I enjoy going to 
the gym, reading, following tech news, and watching Formula 1.`;

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
          <p className="text-justify md:w-2/3">{DESCRIPTION}</p>
          <FaCode className="hidden md:block text-[10rem]" />
        </div>
      </div>
    </section>
  );
}
