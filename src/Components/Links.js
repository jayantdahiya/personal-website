import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

function Links() {
  return (
    <div className="flex-row flex p-12 shrink gap-x-28">
      <div className="flex-row flex items-center gap-x-2">
        <FiGithub className="text-2xl" />
        <p className="text-2xl font-light">GitHub</p>
      </div>
      <div className="flex-row flex items-center gap-x-2">
        <SiMedium className="text-2xl" />
        <a className="text-2xl font-light" href="/">
          Medium
        </a>
      </div>
      <div className="flex-row flex items-center gap-x-2">
        <FiTwitter className="text-2xl" />
        <p className="text-2xl font-light">Twitter</p>
      </div>
    </div>
  );
}

export default Links;
