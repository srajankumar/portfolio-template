import React from "react";

const Body = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <section
        className="w-screen bg-gradient-to-t from-gray-900 to-indigo-600 h-screen"
        id="home"
      >
        Section 1 Content
      </section>
      <section
        className="w-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-slate-600 to-green-500 h-screen"
        id="about"
      >
        Section 2 Content
      </section>
      <section className="w-screen bg-yellow-400 h-screen" id="projects">
        Section 3 Content
      </section>
      <section className="w-screen bg-yellow-400 h-screen" id="contact">
        Section 3 Content
      </section>
    </div>
  );
};

export default Body;
