import { useRef } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaGithub,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  email,
  linkedIn,
  gitHub,
  resume,
  sourceCode,
} from "../data/external-links";
import { useHover } from "../utilities";
import { useOnScreen } from "../utilities";

// create social nav links
const SocialNavLinks = () => {
  // useHover to change text
  const [emailIsHovering, emailHoverProps] = useHover();
  const [linkedinIsHovering, linkedinHoverProps] = useHover();
  const [githubIsHovering, githubHoverProps] = useHover();
  const [resumeIsHovering, resumeHoverProps] = useHover();

  const ref = useRef();
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <ul
      ref={ref}
      className="flex flex-col items-center justify-between gap-4 text-xl"
    >
      <li
        className={`${
          isVisible ? "translate-x-0" : "translate-x-[100vw]"
        } ease-linear duration-500`}
      >
        <a
          href={`mailto:${email}`}
          className="contact-navitem hover:text-yellow-500"
          {...emailHoverProps}
        >
          <FaEnvelope className="text-2xl" />
          {emailIsHovering ? (
            <span className="contact-navitem-span">
              {email}
              <FaExternalLinkAlt />
            </span>
          ) : (
            "Email"
          )}
        </a>
      </li>
      <li
        className={`${
          isVisible ? "translate-x-0" : "translate-x-[100vw]"
        } ease-linear duration-500 delay-100`}
      >
        <a
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
          className="contact-navitem hover:text-[#0e76a8]"
          {...linkedinHoverProps}
        >
          <FaLinkedin className="text-2xl" />
          {linkedinIsHovering ? (
            <span className="contact-navitem-span">
              yamakenth
              <FaExternalLinkAlt />
            </span>
          ) : (
            "LinkedIn"
          )}
        </a>
      </li>
      <li
        className={`${
          isVisible ? "translate-x-0" : "translate-x-[100vw]"
        } ease-linear duration-500 delay-200`}
      >
        <a
          href={gitHub}
          target="_blank"
          rel="noreferrer"
          className="contact-navitem"
          {...githubHoverProps}
        >
          <FaGithubSquare className="text-2xl" />
          {githubIsHovering ? (
            <span className="contact-navitem-span">
              yamakenth
              <FaExternalLinkAlt />
            </span>
          ) : (
            "GitHub"
          )}
        </a>
      </li>
      <li
        className={`${
          isVisible ? "translate-x-0" : "translate-x-[100vw]"
        } ease-linear duration-500 delay-300`}
      >
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="contact-navitem hover:text-[#1fa463]"
          {...resumeHoverProps}
        >
          <FaFileAlt className="text-2xl" />
          {resumeIsHovering ? (
            <span className="contact-navitem-span">
              Open in Google Drive
              <FaExternalLinkAlt />
            </span>
          ) : (
            "Resume"
          )}
        </a>
      </li>
    </ul>
  );
};

// create contact
const Contact = () => {
  // current year for copyright
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
              href={sourceCode}
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
};

export default Contact;
