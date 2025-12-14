import React from "react";

export const MySkills = () => {
  const skillsData = [
    {
      id: 1,
      name: "Visual Studio Code",
      category: "Code Editor",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      id: 2,
      name: "React JS",
      category: "Framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      category: "Framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
 {
      id: 4,
      name: "JavaScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 5,
      name: "Node JS",
      category: "JavaScript Runtime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 6,
      name: "GitHub",
      category: "Repository",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      id: 7,
      name: "Adobe Photoshop",
      category: "Design App",
      icon: "https://img.icons8.com/fluency/48/adobe-photoshop.png",
    },
    {
      id: 8,
      name: "Canva",
      category: "Design App",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      id: 9,
      name: "Figma",
      category: "Design App",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
     {
      id: 10,
      name: "HTML5",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 11,
      name: "CSS3",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 12,
      name: "TypeScript",
      category: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
        {
      id: 13,
      name: "Vite",
      category: "Framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      id: 14,
      name: "CapCut",
      category: "Video Editing",
      icon: `${import.meta.env.BASE_URL}images/capcut.png`,
    },
    {
      id: 15,
      name: "DaisyUI",
      category: "UI Library",
      icon: `${import.meta.env.BASE_URL}images/daisyui.png`,
    },
  ];
const personalTraits = [
    {
      id: 20,
      name: "Creativity",
      description: "Generates fresh, user-centered design ideas",
      icon: `${import.meta.env.BASE_URL}images/creativity1.png`, 
    },
    {
      id: 21,
      name: "Collaboration",
      description: "Works effectively in team projects and feedback cycles",
      icon: `${import.meta.env.BASE_URL}images/Collaboration.png`,
    },
    {
      id: 22,
      name: "Communication",
      description: "Clearly conveys design concepts and explains site functionality",
      icon: `${import.meta.env.BASE_URL}images/Communication.png`, 
    },
    {id: 23,
      name: "Time Management",
      description: "Efficiently manages tasks to meet project deadlines",
      icon: `${import.meta.env.BASE_URL}images/time.png`, 
    },
  ];

  return (
    <>
      {/* Desktop/Laptop View - Unchanged */}
      <div className="hidden lg:block absolute top-[1750px] left-[180px] right-[180px]">
        {/* Header Section */}
        <div className="text-center text-purple-500 mb-8">
          <h2 className="font-raleway font-bold text-3xl mb-2">
              TOOLS & TECHNOLOGIES
          </h2>
          <p className="font-raleway text-white/70 text-sm">
            My Professional Skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center justify-center p-3 rounded-[5px] backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 rounded-[5px]" />

              {/* Icon Container */}
              <div className="relative z-10 w-10 h-10 mb-2 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h3 className="relative z-10 font-raleway font-semibold text-xs text-center mb-1.5">
                <span className="shiny-text">
                  {skill.name}
                </span>
              </h3>

              {/* Category Badge */}
              <span className="relative z-10 px-2 py-0.5 bg-white/10 rounded-full font-raleway text-white/70 text-[9px] border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Personal Traits Section */}
        <div className="mt-16">
          <div className="text-center text-purple-500 mb-8">
            <h2 className="font-raleway font-bold text-3xl mb-2">
                WHAT I BRING TO THE TABLE?
            </h2>
            <p className="font-raleway text-white/70 text-sm">
              My Personal Traits
            </p>
          </div>

          {/* Personal Traits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalTraits.map((trait) => (
              <div
                key={trait.id}
                className="group relative flex flex-col items-center text-center p-5 rounded-[5px] backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 rounded-[5px]" />

                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                src={trait.icon}
                alt={trait.name}
                className="w-full h-full p-0 object-cover filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
                </div>

                {/* Trait Name */}
                <h3 className="relative z-10 font-raleway font-bold text-sm text-center mb-2">
                  <span className="shiny-text">
                    {trait.name}
                  </span>
                </h3>

                {/* Description */}
                <p className="relative z-10 font-raleway text-white/70 text-xs leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="mt-16">
          <div className="text-center text-purple-500 mb-8">
            <h2 className="font-raleway font-bold text-3xl mb-2">
                HARD SKILLS
            </h2>
            <p className="font-raleway text-white/70 text-sm">
              Technical abilities
            </p>
          </div>

          {/* Hard Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* UI/UX Design */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-raleway font-bold text-base mb-1">
                  <span className="shiny-text">UI/UX DESIGN</span>
                </h3>
                <p className="font-raleway text-white/70 text-xs leading-relaxed">
                  Wireframing, Prototyping, Usability Testing
                </p>
              </div>
            </div>

            {/* Front-End Development */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-raleway font-bold text-base mb-1">
                  <span className="shiny-text">FRONT-END DEVELOPMENT</span>
                </h3>
                <p className="font-raleway text-white/70 text-xs leading-relaxed">
                  Functional & Responsive UI, HTML, CSS, JavaScript, ReactJS and TailwindCSS
                </p>
              </div>
            </div>

            {/* Design Tools */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-raleway font-bold text-base mb-1">
                  <span className="shiny-text">DESIGN TOOLS</span>
                </h3>
                <p className="font-raleway text-white/70 text-xs leading-relaxed">
                  Figma, Adobe Photoshop, Canva, Capcut
                </p>
              </div>
            </div>

            {/* Visual Design */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-raleway font-bold text-base mb-1">
                  <span className="shiny-text">VISUAL DESIGN</span>
                </h3>
                <p className="font-raleway text-white/70 text-xs leading-relaxed">
                  Color Theory, Typography, Layout & Grid System, Branding & Iconography
                </p>
              </div>
            </div>

            {/* Digital Marketing & Content */}
            <div className="flex items-start gap-3 md:col-span-2">
              <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-raleway font-bold text-base mb-1">
                  <span className="shiny-text">DIGITAL MARKETING & CONTENT</span>
                </h3>
                <p className="font-raleway text-white/70 text-xs leading-relaxed">
                  Social Media Content Creation, Copywriting, Video Editing, Content Strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Smaller centered layout */}
      <div className="block lg:hidden w-[310px] px-4 py-8 mx-auto">
        {/* Header Section */}
        <div className="text-center text-purple-500 mb-6">
          <h2 className="font-raleway font-bold text-2xl mb-1">
              TOOLS & TECHNOLOGIES
          </h2>
          <p className="font-raleway text-white/70 text-xs">
            My Professional Skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-2">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center justify-center p-2 rounded-[5px] backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 rounded-[5px]" />

              {/* Icon Container */}
              <div className="relative z-10 w-8 h-8 mb-1 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h3 className="relative z-10 font-raleway font-semibold text-[10px] text-center mb-1">
                <span className="shiny-text">
                  {skill.name}
                </span>
              </h3>

              {/* Category Badge */}
              <span className="relative z-10 px-1 py-0.5 bg-white/10 rounded-full font-raleway text-white/70 text-[8px] border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Personal Traits Section */}
        <div className="mt-12">
          <div className="text-center text-purple-500 mb-6">
            <h2 className="font-raleway font-bold text-2xl mb-1">
                WHAT I BRING TO THE TABLE?
            </h2>
            <p className="font-raleway text-white/70 text-xs">
              My Personal Traits
            </p>
          </div>

          {/* Personal Traits Grid */}
          <div className="grid grid-cols-2 gap-3">
            {personalTraits.map((trait) => (
              <div
                key={trait.id}
                className="group relative flex flex-col items-center text-center p-3 rounded-[5px] backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 rounded-[5px]" />

                {/* Icon Container */}
                <div className="relative z-10 w-12 h-12 mb-2 flex items-center justify-center">
                  <img
                src={trait.icon}
                alt={trait.name}
                className="w-full h-full p-0 object-cover filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
                </div>

                {/* Trait Name */}
                <h3 className="relative z-10 font-raleway font-bold text-xs text-center mb-1">
                  <span className="shiny-text">
                    {trait.name}
                  </span>
                </h3>

                {/* Description */}
                <p className="relative z-10 font-raleway text-white/70 text-[10px] leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="mt-12">
          <div className="text-center text-purple-500 mb-6">
            <h2 className="font-raleway font-bold text-2xl mb-1">
                HARD SKILLS
            </h2>
            <p className="font-raleway text-white/70 text-xs">
              Technical abilities
            </p>
          </div>

         {/* Hard Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* UI/UX Design */}
      <div className="flex items-start gap-3">
        <div className="w-1.5 h-11 bg-purple-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-raleway font-bold text-base mb-1">
            <span className="shiny-text">UI/UX DESIGN</span>
          </h3>
          <p className="font-raleway text-white/70 text-xs leading-relaxed">
            Wireframing, Prototyping, Usability Testing
          </p>
        </div>
      </div>

        {/* Front-End Development */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-8 bg-purple-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-raleway font-bold text-sm mb-1">
              <span className="shiny-text">FRONT-END DEVELOPMENT</span>
            </h3>
            <p className="font-raleway text-white/70 text-[10px] leading-relaxed">
              Functional & Responsive UI, HTML, CSS, JavaScript, ReactJS and TailwindCSS
            </p>
          </div>
        </div>

        {/* Design Tools */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-8 bg-purple-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-raleway font-bold text-sm mb-1">
              <span className="shiny-text">DESIGN TOOLS</span>
            </h3>
            <p className="font-raleway text-white/70 text-[10px] leading-relaxed">
              Figma, Adobe Photoshop, Canva, Capcut
            </p>
          </div>
        </div>

        {/* Visual Design */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-8 bg-purple-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-raleway font-bold text-sm mb-1">
              <span className="shiny-text">VISUAL DESIGN</span>
            </h3>
            <p className="font-raleway text-white/70 text-[10px] leading-relaxed">
              Color Theory, Typography, Layout & Grid System, Branding & Iconography
            </p>
          </div>
        </div>

        {/* Digital Marketing & Content */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-8 bg-purple-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-raleway font-bold text-sm mb-1">
              <span className="shiny-text">DIGITAL MARKETING & CONTENT</span>
            </h3>
            <p className="font-raleway text-white/70 text-[10px] leading-relaxed">
              Social Media Content Creation, Copywriting, Video Editing, Content Strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* CSS for shimmer animation */}
  <style>{`
    .shiny-text-purple {
      color: #7d52fd;
      background: linear-gradient(
        120deg,
        #7d52fd 40%,
        #ffffff 50%,
        #7d52fd 60%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
      animation: shine 3s linear infinite;
    }
    
    .shiny-text {
      color: #b5b5b5a4;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 60%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      display: inline-block;
      animation: shine 5s linear infinite;
    }

    @keyframes shine {
      0% {
        background-position: 100%;
      }
      100% {
        background-position: -100%;
      }
    }
    
    .shiny-text.disabled {
      animation: none;
    }
  `}</style>
</>

  );
};
