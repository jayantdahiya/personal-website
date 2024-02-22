import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

function Links() {
  return (
    <div className="flex flex-row p-12 mx-auto space-x-4 text-lg pointer-events-auto lg:text-xl md:space-x-12 lg:space-x-16">
      <div className="flex flex-row items-center gap-x-2">
        <FiGithub className="text-gray-100" />
        <a
          className="font-light text-gray-400 group"
          href="https://github.com/jayantdahiya"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span className="link_underline"></span>
        </a>
      </div>
      <div className="flex flex-row items-center gap-x-2 ">
        <SiMedium className="text-gray-100" />
        <a
          className="font-light text-gray-400 group"
          href="https://medium.com/@jayantdahiya"
          target="_blank"
          rel="noreferrer"
        >
          Medium
          <span className="link_underline"></span>
        </a>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <FiTwitter className="text-gray-100" />
        <a
          className="font-light text-gray-400 group"
          href="https://twitter.com/DahiyaJayant"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
          <span className="link_underline"></span>
        </a>
      </div>
    </div>
  );
}

export default Links;
