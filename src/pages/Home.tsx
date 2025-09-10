// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Accenture from "./experiences/accenture";
import BreakThroughTech from "./experiences/break-through-tech";
import RevealGlobalConsulting from "./experiences/reveal-global-consulting";
import JcNerr from "./experiences/jcnerr";
import Project1 from "./projects/project-1";
import Project2 from "./projects/project-2";
import Project3 from "./projects/project-3";

type TabKey = "home" | "about" | "resume" | "contact";

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [sidebarWidth, setSidebarWidth] = useState<number>(270);
  const location = useLocation();
  const { slug } = useParams<{ slug?: string }>();
  const isExperience = location.pathname.startsWith("/experiences");
  const isProject = location.pathname.startsWith("/projects");

  useEffect(() => {
    // initialize sidebar width from localStorage if present
    const saved = localStorage.getItem("sideBarWidth");
    if (saved) {
      setSidebarWidth(parseInt(saved));
    } else {
      localStorage.setItem("sideBarWidth", "270");
    }
  }, []);

  const renderContent = () => {
    if (isExperience) {
      switch (slug) {
        case "accenture":
          return <Accenture />;
        case "break-through-tech":
          return <BreakThroughTech />;
        case "reveal-global-consulting":
          return <RevealGlobalConsulting />;
        case "jc-nerr":
          return <JcNerr />;
        default:
          return null;
      }
    }

    if (isProject) {
      switch (slug) {
        case "project-1":
          return <Project1 />;
        case "project-2":
          return <Project2 />;
        case "project-3":
          return <Project3 />;
        default:
          return null;
      }
    }

    switch (activeTab) {
      case "home":
        return null;
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1f1f1f] text-white">
      <div className="flex h-full">
        {/* Left Sidebar (resizable) */}
        <div style={{ width: sidebarWidth }}>
          <SideBar setWidth={setSidebarWidth} width={sidebarWidth} />
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* NavBar at the top */}
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Show hero only on Home tab and hide on experience/project pages */}
          {activeTab === "home" && !isExperience && !isProject && <Header />}
          <main className="flex-1 overflow-auto">
            <div className="p-6">{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
