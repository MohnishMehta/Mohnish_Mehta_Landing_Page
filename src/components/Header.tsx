import React from "react";
// If you put your headshot in /public, you can reference it directly as /headshot.jpg
// Or if it's in src/assets, do: import headshot from "../assets/headshot.jpg";

function Header() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-40 lg:pt-60 flex flex-col lg:flex-row items-center justify-between lg:w-3/4"
    >
      {/* LEFT: Text content */}
      <div className="flex flex-col text-left max-w-xl">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Mohnish Mehta</code>
        <code className="text-[#e6f1ff] text-2xl mt-6 uppercase tracking-wide">
          Third year student @ Rutgers University
        </code>
        <code className="text-[#a2aabc] text-lg mt-3 leading-relaxed">
          Software Engineer passionate about AI, Machine Learning, and
          building intelligent systems that shape the future of technology
        </code>
      </div>

      {/* RIGHT: Headshot */}
      <div className="mt-10 lg:mt-0 lg:ml-16 flex-shrink-0">
      <img
        src={`${process.env.PUBLIC_URL}/headshot.jpg`}
        alt="Mohnish Mehta"
        className="w-64 h-64 rounded-full object-cover object-top border-4 border-[#424042] shadow-lg"
      />

      </div>
    </div>
  );
}

export default Header;
