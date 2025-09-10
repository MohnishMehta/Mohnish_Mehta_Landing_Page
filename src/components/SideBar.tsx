import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MAIL_TO } from "../socials";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const InstagramLogo = require("../assets/logos/InstagramLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
// Company logos for experiences
const AccentureLogo = require("../assets/logos/accenture.png");
const BreakthroughTechLogo = require("../assets/logos/breakthroughtech.png");
const RevealLogo = require("../assets/logos/reveal.png");
const JcNerrLogo = require("../assets/logos/jcnerr.png");

type Props = {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
};

const SideBar = ({ setWidth, width }: Props) => {
  const [showExperiencesList, setShowExperiencesList] = useState(true);
  const [showProjectsList, setShowProjectsList] = useState(true);

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
      localStorage.setItem("sideBarWidth", String(newWidth));
    };
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) setWidth(parseInt(savedWidth));
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full relative h-full">
        <div>
          {/* Experiences */}
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => setShowExperiencesList(!showExperiencesList)}
          >
            {showExperiencesList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Experiences</p>
          </div>

          {showExperiencesList ? (
            <div className="flex flex-col">
              <Link to="/experiences/accenture">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={AccentureLogo} alt="Accenture Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>Accenture</p>
                </div>
              </Link>

              <Link to="/experiences/break-through-tech">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={BreakthroughTechLogo} alt="Break Through Tech Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>Break Through Tech</p>
                </div>
              </Link>

              <Link to="/experiences/reveal-global-consulting">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={RevealLogo} alt="Reveal Global Consulting Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>Reveal Global Consulting</p>
                </div>
              </Link>

              <Link to="/experiences/jc-nerr">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={JcNerrLogo} alt="JC NERR Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>JC NERR</p>
                </div>
              </Link>
            </div>
          ) : null}

          {/* Projects */}
          <div
            className="mt-6 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => setShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Projects</p>
          </div>

          {showProjectsList ? (
            <div className="flex flex-col">
              <Link to="/projects/project-1">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={require("../assets/logos/airbnb.png")} alt="Airbnb Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>Airbnb Logistic Regression Model</p>
                </div>
              </Link>

              <Link to="/projects/project-2">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={require("../assets/logos/mnist.png")} alt="MNIST Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>DeepVision CNN</p>
                </div>
              </Link>

              <Link to="/projects/project-3">
                <div className="ml-5 flex items-center hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                  <img src={require("../assets/logos/news.png")} alt="News Logo" className="w-7 h-7 mr-1 ml-2 object-contain" />
                  <p>MarketSentiment</p>
                </div>
              </Link>
            </div>
          ) : null}

          {/* Socials */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <div className="flex justify-between">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <img src={GitLogo} alt="Git Logo" className="h-10 w-10 duration-500 hover:scale-125" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram Logo" className="h-10 w-10 duration-500 hover:scale-125" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <img src={LinkedinLogo} alt="Linkedin Logo" className="h-10 w-10 duration-500 hover:scale-125" />
              </a>
              <a href={MAIL_TO} target="_blank" rel="noopener noreferrer">
                <img src={MailLogo} alt="Mail Logo" className="h-10 w-10 duration-500 hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      />
    </div>
  );
};

export default SideBar;
