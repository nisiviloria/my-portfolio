import React from "react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
    const navigate = useNavigate();
const handleSeeMoreProjects = () => {
  navigate("/all-projects");
  window.scrollTo(0, 0);
};

 const projectsData = [
  {
    id: 1,
    title: "PawPalace Shelter",
    subtitle: "(Website)",
    description:
      "Project that showcases a pet adoption platform where people can browse and adopt animals, support the shelter through donations, and learn about its mission to provide loving homes for pets.",
    image: `${import.meta.env.BASE_URL}images/Pawpalace.png`,
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://pawpalace-shelter.netlify.app/",
    githubLink: "https://github.com/nisiviloria/PawPalace-Shelter" 
  },
  {
    id: 2,
    title: "QuizTion?",
    subtitle: "(Website)",
    description:
      "interactive quiz designed to test basic JavaScript knowledge. Users enter their name to begin and are welcomed before starting. The quiz includes 8 quick questions for a short and fun challenge.",
    image: `${import.meta.env.BASE_URL}images/Quiztion.png`,
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    link: "https://nisiviloria.github.io/QuizTion-/",
    githubLink: "https://github.com/NisiViloria/QuizTion-" 
  },
  {
    id: 3,
    title: "Pack N' Fly",
    subtitle: "(Website)",
    description:
      "Travel agency website that guides users to explore beautiful destinations, tourist spots, and hotel options. It includes links to separate pages for places to visit and a hotel page that connects directly through email for easy inquiries and bookings.",
    image: `${import.meta.env.BASE_URL}images/Packnfly.png`,
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://nisiviloria.github.io/PackN-Fly/",   
    githubLink: "https://github.com/NisiViloria/PackN-Fly"
  },
];

  return (
    <>
      {/* Desktop/Laptop View - Unchanged */}
      <div className="hidden lg:block absolute top-[1750px] left-[180px] right-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-[5px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={project.title}
                  src={project.image}
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="font-raleway font-bold text-white text-lg tracking-[0] leading-tight">
                    {project.title}
                    {project.subtitle && (
                      <span className="font-normal text-sm ml-1">
                        {project.subtitle}
                      </span>
                    )}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-raleway font-normal text-white/80 text-sm tracking-[0] leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/10 rounded-full font-raleway font-medium text-white text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md font-raleway font-semibold text-[#151022] text-sm hover:bg-white/90 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Website
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md font-raleway font-semibold text-[#151022] text-sm hover:bg-white/90 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

     {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleSeeMoreProjects}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/50 backdrop-blur-md backdrop-brightness-[100%] bg-transparent hover:bg-white transition-all duration-300 cursor-pointer"
          >
            <span className="font-raleway font-semibold text-white text-base tracking-[0] group-hover:text-[#151022] transition-colors duration-300">
              See More Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 text-white group-hover:text-[#151022] transition-colors duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile View - Centered smaller boxes */}
      <div className="block lg:hidden w-[310px] px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-[5px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden max-w-sm mx-auto"
            >
              {/* Project Image */}
              <div className="relative w-full h-[170px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={project.title}
                  src={project.image}
                />
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <div className="mb-2">
                  <h3 className="font-raleway font-bold text-white text-base tracking-[0] leading-tight">
                    {project.title}
                    {project.subtitle && (
                      <span className="font-normal text-xs ml-1">
                        {project.subtitle}
                      </span>
                    )}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-raleway font-normal text-white/80 text-xs tracking-[0] leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-full font-raleway font-medium text-white text-[10px] border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-md font-raleway font-semibold text-[#151022] text-xs hover:bg-white/90 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Website
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-md font-raleway font-semibold text-[#151022] text-xs hover:bg-white/90 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

         {/* See More Button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleSeeMoreProjects}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/50 backdrop-blur-md backdrop-brightness-[100%] bg-transparent hover:bg-white transition-all duration-300 cursor-pointer"
          >
            <span className="font-raleway font-semibold text-white text-sm tracking-[0] group-hover:text-[#151022] transition-colors duration-300">
              See More Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 text-white group-hover:text-[#151022] transition-colors duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
