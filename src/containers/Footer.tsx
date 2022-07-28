import React from "react";
import { FaGithub } from "react-icons/fa";

const SOURCE_CODE: string = "https://github.com/yamakenth/personal-website";
const COPYRIGHT: string = `Copyright © ${new Date().getFullYear()} yamakenth`;

export default function Footer(): JSX.Element {
  return (
    <footer id="footer" className="bg-neutral-100">
      <div className="container flex justify-center items-center py-8">
        <p className="flex justify-start text-sm">
          {COPYRIGHT}
          <a
            href={SOURCE_CODE}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 items-center ml-2"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
}
