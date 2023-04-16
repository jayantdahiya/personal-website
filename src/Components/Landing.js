import React from "react";

function Landing() {
  return (
    <div className="mx-auto flex-col p-12 space-y-4 cursor-default">
      <div className="justify-between flex-row flex">
        <div>
          <p className="text-xl mx-auto font-normal lg:text-3xl text-gray-900">
            Jayant Dahiya
          </p>
        </div>
        <div>
          <a
            href="mailto:jayantdahiyadev@gmail.com"
            className="group text-gray-600 text-xl font-normal transition duration-300"
            target="_blank"
            rel="noreferrer"
          >
            mail
            <span className="text-gray-900 font-bold"> &#8599;</span>
            <span className="link_underline"></span>
          </a>
        </div>
      </div>
      <p className="text-lg font-light lg:text-xl text-left lg:text-justify text-gray-600 p-1">
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
