import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

// Removed technologies list per request

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-20"
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-6">
          <IdentificationIcon className="h-5 w-5 mr-3 text-yellow_vs" />
          <code className="text-[#e6f1ff] text-3xl whitespace-nowrap">
            About Me
          </code>
          <div className="flex-1 border-b border-b-[#e6f1ff] border-opacity-25 ml-3"></div>
        </div>

        {/* Text */}
        <div className="text-[#a2aabc] text-lg leading-relaxed">
          <p className="mb-6">
            Hello! I’m Mohnish Mehta, 
            a third-year student at Rutgers University–New Brunswick double majoring in Computer Science 
            and Data Science with a minor in Quantitative Economics. My interest in technology first sparked 
            when I was a kid and figured out how to fix my family’s old computer after hours of trial and error—
            it wasn’t anything advanced, but the feeling of solving a technical problem on my own stuck with me. 
            That small moment grew into a passion for software engineering, where I now enjoy building creative 
            solutions that blend logic with impact. Over the years, I’ve developed strong interests in 
             machine learning, artificial intelligence, and data-driven technologies, always motivated by the idea of using tech to solve real-world 
            challenges. Outside of coding, I enjoy working out, playing pickleball, and watching F1 racing, which 
            give me balance and energy. I’m a strong believer in 
            continuous exploration and personal growth, and I love connecting with others who share that 
            same curiosity—feel free to reach out through my socials above, I’d be glad to chat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
