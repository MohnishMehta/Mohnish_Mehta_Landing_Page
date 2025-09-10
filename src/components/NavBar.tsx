import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from "tailwind-styled-components";

const TSIcon = require("../assets/icons/TSIcon.png");

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-12 sticky top-0 z-20 bg-[#1f1f1f] border-b border-gray-700 overflow-x-auto">
      <Container
        className={
          activeTab === "home"
            ? "bg-[#1e1e1e] text-yellow_vs"
            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
        }
        onClick={() => {
          navigate("/");
          setActiveTab("home");
        }}
      >
        <img src={TSIcon} alt="JS Icon" className="w-7 mr-1  text-yellow_vs" />
        Home.ts
      </Container>

      <Container
          className={
            activeTab === "about"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            navigate("/");
            setActiveTab("about");
          }}
        >
          <img
            src={TSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.ts
        </Container>

      <Container
          className={
            activeTab === "resume"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            navigate("/");
            setActiveTab("resume");
          }}
        >
          <img
            src={TSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Resume.ts
        </Container>

      <Container
          className={
            activeTab === "contact"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            navigate("/");
            setActiveTab("contact");
          }}
        >
          <img src={TSIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
          Contact.ts
        </Container>
    </div>
  );
};
export default NavBar;
