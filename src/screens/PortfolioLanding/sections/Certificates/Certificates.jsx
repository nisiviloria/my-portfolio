import React from "react";

export const Certificates = () => {
  const certificatesData = [
   {
    id: 1,
    title: "Computer Systems Servicing",
    issuer: "TESDA",
    date: "February 2024",
    description:
      "Successfully completed the required competency units, demonstrating skills in workplace communication, technical operations, and electronics, and passed the National Certificate assessment.",
    link: `${import.meta.env.BASE_URL}images/NCII-CSS.pdf`,
  },
  {
    id: 2,
    title: "Visual Graphic Design",
    issuer: "TESDA",
    date: "April 2025",
    description:
      "Completed the required competency units, demonstrating skills in workplace communication, problem-solving, and visual design, and passed the National Certificate assessment.",
    link: `${import.meta.env.BASE_URL}images/NCIII-VGD.pdf`,
  },
  {
    id: 3,
    title: "Programming (JAVA) ",
    issuer: "freeCodeCamp",
    date: "September 2023",
    description:
      "Completed training in Java programming NC III, demonstrating skills in object-oriented design, problem-solving, and software development.",
    link: `${import.meta.env.BASE_URL}images/PROG-JAVA.pdf`,
  },
];

  return (
    <>
      {/* Desktop/Laptop View - Unchanged */}
      <div className="hidden lg:block absolute top-[1750px] left-[180px] right-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="relative flex flex-col items-center text-center rounded-[5px] p-5 overflow-hidden backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:scale-[1.03] transition-all duration-300 group"
            >
              {/* Badge Ribbon */}
              <div className="absolute top-3 left-4 bg-white/15 px-2 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide backdrop-blur-md border border-white/20">
                {cert.date}
              </div>

              {/* Certificate Title */}
              <h3 className=" font-raleway py-6 font-bold text-white text-lg mb-1">
                {cert.title}
              </h3>
              <p className="font-raleway text-sm text-white/70 mb-2">
                Issued by <span className="text-white/90 font-medium">{cert.issuer}</span>
              </p>

              {/* Description */}
              <p className="font-raleway text-sm text-white/75 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 px-4 py-2 bg-white rounded-md font-raleway font-semibold text-[#151022] text-sm hover:bg-white/90 transition-all"
              >
                View Certificate
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - Smaller centered boxes */}
      <div className="block lg:hidden w-[310px] px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="relative flex flex-col items-center text-center rounded-[5px] p-4 overflow-hidden backdrop-blur-md bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] border border-white/10 hover:scale-[1.03] transition-all duration-300 group max-w-sm mx-auto"
            >
              {/* Badge Ribbon */}
              <div className="absolute top-2 left-3 bg-white/15 px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-white uppercase tracking-wide backdrop-blur-md border border-white/20">
                {cert.date}
              </div>

              {/* Certificate Title */}
              <h3 className="font-raleway py-4 font-bold text-white text-base mb-1">
                {cert.title}
              </h3>
              <p className="font-raleway text-xs text-white/70 mb-2">
                Issued by <span className="text-white/90 font-medium">{cert.issuer}</span>
              </p>

              {/* Description */}
              <p className="font-raleway text-xs text-white/75 leading-relaxed mb-3">
                {cert.description}
              </p>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1 px-3 py-1.5 bg-white rounded-md font-raleway font-semibold text-[#151022] text-xs hover:bg-white/90 transition-all"
              >
                View Certificate
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
