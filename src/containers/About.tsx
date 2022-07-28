import React, { Fragment } from "react";
import { FaCode } from "react-icons/fa";

const DESCRIPTIONS: string[] = [
  `I'm a first year masters of computer science student at the University of Pennsylvania. 
  I graduated from the University of Washington with a bachelors degree in industrial 
  engineering and worked as a data analyst at Shopee (the largest e-commerce platform in 
  Southeast Asia).`,
  `I decided to leave Shopee in October of 2021 to explore web development 
  as I became interested in learning how technologies we use everyday function under the hood. 
  After working through the Full Stack JavaScript curriculum offered by the Odin Project, 
  I landed an internship as a frontend engineering intern in May of 2022 at a company called 
  TAO BIN to create a PWA for vending machine management.`,
  `Besides coding, I enjoy going 
  to the gym, reading, following tech news, and watching Formula 1.`,
];

export default function About(): JSX.Element {
  return (
    <section id="about" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="uppercase">About</h2>
        <div className="mt-5 flex items-center justify-center gap-12 px-4">
          <div className="lg:w-2/3">
            {DESCRIPTIONS.map((paragraph, idx) => (
              <Fragment key={idx}>
                <p className="text-justify">{paragraph}</p>
                <br />
              </Fragment>
            ))}
          </div>
          <FaCode className="hidden lg:block text-[10rem]" />
        </div>
      </div>
    </section>
  );
}
