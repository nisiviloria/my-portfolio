import React from "react";

export const PortfolioShowcase = () => {
  return (
    <>
      <p className="absolute top-[1500px] left-[calc(50.00%_-_300px)] hidden lg:block font-big-heading font-[number:var(--big-heading-font-weight)] text-variable-collection-accent-color-2 text-[length:var(--big-heading-font-size)] text-center tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)] whitespace-nowrap [font-style:var(--big-heading-font-style)]">
        <span className="shiny-text-purple font-big-heading [font-style:var(--big-heading-font-style)] font-[number:var(--big-heading-font-weight)] tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)] text-[length:var(--big-heading-font-size)]">
          Portfolio
        </span>
        {" "}
        <span className="shiny-text-light font-big-heading [font-style:var(--big-heading-font-style)] font-[number:var(--big-heading-font-weight)] tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)] text-[length:var(--big-heading-font-size)]">
          Showcase
        </span>
      </p>

      {/* Mobile Version */}
      <div className="block lg:hidden w-full px-4 py-4 text-center">
        <p className="font-big-heading font-[number:var(--big-heading-font-weight)] text-variable-collection-accent-color-2 text-[length:var(--big-heading-font-size)] tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)]">
          <span className="shiny-text-purple font-big-heading [font-style:var(--big-heading-font-style)] font-[number:var(--big-heading-font-weight)] tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)] text-[length:var(--big-heading-font-size)]">
            Portfolio
          </span>
          {" "}
          <span className="shiny-text-light font-big-heading [font-style:var(--big-heading-font-style)] font-[number:var(--big-heading-font-weight)] tracking-[var(--big-heading-letter-spacing)] leading-[var(--big-heading-line-height)] text-[length:var(--big-heading-font-size)]">
            Showcase
          </span>
        </p>
      </div>

      <p className="absolute top-[1580px] left-[calc(50.00%_-_276px)] hidden lg:block font-normal text-white text-base text-center leading-5">
        Explore my journey through projects, certifications, and technical
        expertise.
        <br /> Each section represents a milestone in my continuous learning
        path.
      </p>

      {/* Mobile Description */}
      <p className="block lg:hidden w-full px-4 pb-4 font-normal text-white text-sm text-center leading-4">
        Explore my journey through projects, certifications, and technical
        expertise.
        <br /> Each section represents a milestone in my continuous learning
        path.
      </p>

      <style jsx>{`
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
        
        .shiny-text-light {
          color: #9d86ff;
          background: linear-gradient(
            120deg,
            #9d86ff 40%,
            #ffffff 50%,
            #9d86ff 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </>
  );
};