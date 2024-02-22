import React from "react";

function Landing() {
  return (
    <div className="flex-col p-12 mx-auto space-y-4 cursor-default">
      <div className="flex flex-row justify-between">
        <div>
          <p className="mx-auto text-xl font-normal text-gray-100 lg:text-3xl">
            Jayant Dahiya
          </p>
        </div>
        <div>
          <a
            href="mailto:jayantdahiyadev@gmail.com"
            className="text-xl font-normal text-gray-400 transition duration-300 pointer-events-auto group"
            target="_blank"
            rel="noreferrer"
          >
            mail
            <span className="font-bold text-gray-100"> &#8599;</span>
            <span className="link_underline"></span>
          </a>
        </div>
      </div>
      <p className="p-1 text-lg font-light text-left text-gray-400 select-none lg:text-xl lg:text-justify">
        Hi I am Jayant. As a <span className="underlined">creator</span> who
        constantly <span className="underlined">questions reality</span>, I
        can't help but wonder if we're all just
        <span className="underlined"> part of the matrix</span>. As a firm
        believer in simulation theory, I'm always looking for ways{" "}
        <span className="underlined">to break free</span> from the confines of
        this <span className="underlined">digital world</span>. When I'm not
        pondering the nature of existence, you can find me{" "}
        <span className="underlined">lost in the beats</span> of my favorite
        tunes.
      </p>
    </div>
  );
}

export default Landing;
