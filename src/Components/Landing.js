import React from "react";

function Landing() {
  return (
    <div className="mx-auto flex-col p-12 space-y-4">
      <p className="text-xl mx-auto font-normal lg:text-3xl text-gray-900">Jayant Dahiya</p>
      <p className="text-lg font-light lg:text-xl text-left lg:text-justify text-gray-600 p-1">
        Hi I am Jayant. As a <span className="underlined">creator</span> who
        constantly <span className="underlined">questions reality</span>, I can't help but wonder if we're all just
        <span className="underlined"> part of the matrix</span>. As a firm believer in simulation theory, I'm always
        looking for ways <span className="underlined">to break free</span> from the confines of this <span className="underlined">digital world</span>.
        When I'm not pondering the nature of existence, you can find me <span className="underlined">lost in
        the beats</span> of my favorite tunes.
      </p>
    </div>
  );
}

export default Landing;