import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Frame = ({ onNavigate }) => {
  const [activeButton, setActiveButton] = useState("PROJECTS");

  const buttons = [
   {
  label: "PROJECTS",
  icon: `${import.meta.env.BASE_URL}images/projects.png`,
  iconActive: `${import.meta.env.BASE_URL}images/projectsdark.png`,
  section: "projects",
},
{
  label: "CERTIFICATES",
  icon: "https://c.animaapp.com/ps12dqg1/img/vector-3.svg",
  iconActive: `${import.meta.env.BASE_URL}images/certidark.png`,
  section: "certificates",
},
{
  label: "MY SKILLS",
  icon:  "https://c.animaapp.com/ps12dqg1/img/group-1@2x.png", 
  iconActive: `${import.meta.env.BASE_URL}images/techdark.png`,
  section: "myskills",
  },
  ];

  const handleButtonClick = (btn) => {
    setActiveButton(btn.label);
    if (onNavigate) {
      onNavigate(btn.section);
    }
  };

  return (
    <>
      {/* Desktop Version - Unchanged */}
      <div className="hidden lg:flex absolute top-[1650px] left-[calc(50.00%_-_300px)] h-[49px] items-center justify-center rounded-[50px] border-none backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => handleButtonClick(btn)}
            className={`inline-flex items-center justify-center px-10 py-3.5 relative flex-[0_0_auto] rounded-[50px] transition-all duration-300 outline-none focus:outline-none border-none ${
              activeButton === btn.label
                ? "bg-white shadow-lg"
                : "bg-transparent hover:bg-white/5"
            }`}
          >
            {btn.icon && (
              <img
                className="mr-2 w-5 h-5"
                src={activeButton === btn.label ? btn.iconActive : btn.icon}
                alt={btn.label + " icon"}
              />
            )}
            <span
              className={`font-semibold text-[17px] leading-5 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap transition-colors duration-300 ${
                activeButton === btn.label ? "text-[#151022]" : "text-white"
              }`}
            >
              {btn.label}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Version - Fixed to horizontal layout */}
      <div className="flex lg:hidden w-full px-2 py-6 flex items-center justify-center gap-3">
        <div className="w-full rounded-[50px] border-none backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative p-2 flex flex-row gap-2 justify-center">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleButtonClick(btn)}
              className={`inline-flex items-center justify-center px-[20px] py-3.5 relative rounded-[50px] transition-all duration-300 outline-none focus:outline-none border-none ${
                activeButton === btn.label
                  ? "bg-white shadow-lg"
                  : "bg-transparent hover:bg-white/5"
              }`}
            >
              {btn.icon && (
                <img
                  className="mr-2 w-5 h-5"
                  src={activeButton === btn.label ? btn.iconActive : btn.icon}
                  alt={btn.label + " icon"}
                />
              )}
              <span
                className={`font-semibold text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap transition-colors duration-300 ${
                  activeButton === btn.label ? "text-[#151022]" : "text-white"
                }`}
              >
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
