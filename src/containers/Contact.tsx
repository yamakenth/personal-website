import React from "react";
import { FaGithub } from "react-icons/fa";

import SocialNavLinks from "../components/Navs/SocialNavLinks";

const SOURCE_CODE: string = "https://github.com/yamakenth/personal-website";

export default function Contact(): JSX.Element {
  const curYear = new Date().getFullYear();

  return (
    <section id="contact" className="bg-neutral-100">
      <div className="container py-16 flex flex-col items-center justify-between gap-10">
        <h2 className="self-start">Contact</h2>
        <SocialNavLinks />
        <footer>
          <p className="flex justify-start text-sm mt-5">
            Copyright &copy; {curYear}&nbsp; yamakenth
            <a
              href={SOURCE_CODE}
              target="_blank"
              rel="noreferrer"
              className="flex gap-1 items-center ml-2"
            >
              <FaGithub />
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
