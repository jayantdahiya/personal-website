import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

function Links() {
  return (
    <div className="text-lg lg:text-xl mx-auto flex-row flex p-12 space-x-4 md:space-x-12 lg:space-x-16">
      <div className="flex-row flex items-center gap-x-2">
        <FiGithub className="text-gray-900" />
        <a
          className="group font-light text-gray-600"
          href="https://github.com/jayantdahiya"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span className="link_underline"></span>
        </a>
      </div>
      <div className="flex-row flex items-center gap-x-2 ">
        <SiMedium className="text-gray-900" />
        <a
          className="group font-light text-gray-600"
          href="https://medium.com/@jayantdahiya"
          target="_blank"
          rel="noreferrer"
        >
          Medium
          <span className="link_underline"></span>
        </a>
      </div>
      <div className="flex-row flex items-center gap-x-2">
        <FiTwitter className="text-gray-900" />
        <a
          className="group font-light text-gray-600"
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
