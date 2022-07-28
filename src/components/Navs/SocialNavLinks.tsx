import React from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import { email, gitHub, linkedIn, resume } from "../../data/external-links";

const NAV_LINKS = [
  {
    href: `mailto:${email}`,
    hoverColor: "hover:text-yellow-500",
    icon: <FaEnvelope className="text-2xl" />,
    defaultText: "Email",
    hoverText: email,
  },
  {
    href: linkedIn,
    hoverColor: "hover:text-[#0e76a8]",
    icon: <FaLinkedin className="text-2xl" />,
    defaultText: "LinkedIn",
    hoverText: "yamakenth",
  },
  {
    href: gitHub,
    hoverColor: "hover:text-black",
    icon: <FaGithubSquare className="text-2xl" />,
    defaultText: "GitHub",
    hoverText: "yamakenth",
  },
  {
    href: resume,
    hoverColor: "hover:text-[#1fa463]",
    icon: <FaFileAlt className="text-2xl" />,
    defaultText: "Resume",
    hoverText: "Open in Google Drive",
  },
];

interface SocialNavLinksProps {
  isMobile: boolean;
}

export default function SocialNavLinks({
  isMobile,
}: SocialNavLinksProps): JSX.Element {
  return (
    <>{isMobile ? <HorizonatalNavWithNoText /> : <VerticalNavWithText />}</>
  );
}

function VerticalNavWithText(): JSX.Element {
  return (
    <ul className="flex flex-col items-center justify-between gap-4 text-xl">
      {NAV_LINKS.map((link) => (
        <li key={link.defaultText}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`
              flex gap-2 
              items-center 
              transition-all 
              duration-500 
              group
              ${link.hoverColor} 
            `}
          >
            {link.icon}
            <span className="flex gap-2 items-center group-hover:hidden">
              {link.defaultText}
            </span>
            <span
              className="
                hidden 
                group-hover:flex 
                gap-2 
                items-center 
                group-hover:underline"
            >
              {link.hoverText}
              <FaExternalLinkAlt />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function HorizonatalNavWithNoText(): JSX.Element {
  return (
    <ul className="flex justify-between gap-5 pt-14">
      {NAV_LINKS.map((link) => (
        <li key={link.defaultText}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
