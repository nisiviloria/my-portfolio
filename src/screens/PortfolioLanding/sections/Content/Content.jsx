import React from "react";
import { CarouselText } from "./CarouselText.jsx";
import TextType from "./TextType.jsx";


const downloadCV = `${import.meta.env.BASE_URL}images/Download_CV.png`; 
const downloadIcon = `${import.meta.env.BASE_URL}images/DownloadIcon.png`;
const profileImage = "https://c.animaapp.com/ps12dqg1/img/image@2x.png";
const arrowRight = "https://c.animaapp.com/ps12dqg1/img/formkit-arrowright.svg";
const linkedinIcon = "https://c.animaapp.com/ps12dqg1/img/frame-29.svg";
const githubIcon = "https://c.animaapp.com/ps12dqg1/img/frame-30.svg";

export const Content = () => {
  const scrollToSection = (section) => {
    const isMobile = window.innerWidth < 1024;

    switch (section) {
      case "PROJECTS":
        const projectScrollPos = isMobile ? 2000 : 1490;
        window.scrollTo({ top: projectScrollPos, behavior: "smooth" });
        break;
      case "CONTACT":
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          const rect = contactElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const elementTop = rect.top + scrollTop;
          window.scrollTo({ top: elementTop, behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* MAIN CONTENT */}
      <div className="relative pt-[40px] sm:pt-[0px]
      lg:absolute lg:top-[181px] left-4 sm:left-8 lg:left-[179px] 
      w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[516px] px-4 sm:px-0">
        
        <div className="[font-family:'Raleway',Helvetica] font-semibold text-white text-base sm:text-lg lg:text-xl tracking-[0] leading-5 whitespace-nowrap">
          Hello, my name is
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-0 lg:absolute lg:top-[25px] lg:left-0 w-full lg:w-[426px] [font-family:'Raleway',Helvetica] font-extrabold text-white text-[32px] sm:text-[48px] lg:text-[64px] tracking-[0] leading-tight lg:leading-[normal]">
          Nisi Ashley
          <br />
          Viloria
        </div>

        <div className="mt-2 sm:mt-4 lg:mt-0 lg:absolute lg:top-[188px] lg:left-0">
          <p className="[font-family:'Raleway',Helvetica] font-semibold text-white text-base sm:text-lg lg:text-xl tracking-[0] leading-5 inline">
            I am 
          </p>
          <TextType
            text={[
              " a Front-end Developer",
              " a Web Designer",
              " an UI/UX Designer",
              " a Marketing or Social Media Manager"
            ]}
            as="div"
            className="[font-family:'Raleway',Helvetica] font-semibold text-white text-base sm:text-lg lg:text-xl tracking-[0] leading-5 whitespace-nowrap"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
          />
        </div>

        <p className="mt-2 sm:mt-4 lg:mt-0 lg:absolute lg:top-[229px] lg:left-0 [font-family:'Raleway',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-5">
          I specialize in web development, UI/UX design, and digital content
          creation. I build solutions that connect technology and creativity.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-row sm:flex-row gap-2 mt-6 lg:mt-0 lg:absolute lg:top-[290px] lg:left-0">
          <button 
            onClick={() => scrollToSection("PROJECTS")}
            className="flex w-[190px] sm:w-[191px] items-center justify-center gap-0.5 px-6 py-3 sm:py-4 bg-white rounded-[50px] cursor-pointer hover:opacity-90 transition-opacity border-none outline-none"
          >
            <div className="[font-family:'Raleway',Helvetica] font-semibold text-[#151022] text-base sm:text-lg tracking-[0] leading-[22px] whitespace-nowrap">
              View My Work
            </div>
            <img
              className="w-[20px] sm:w-[23px] h-[11px] sm:h-[13px]"
              alt="Arrow right"
              src={arrowRight}
            />
          </button>

          <div 
            onClick={() => scrollToSection("CONTACT")}
            className="inline-flex w-[190px] sm:w-auto items-center justify-center gap-2.5 px-6 py-3 sm:py-4 rounded-[50px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer hover:bg-white/20 transition-all relative"
          >
            <div className="[font-family:'Raleway',Helvetica] font-semibold text-white text-base sm:text-lg tracking-[0] leading-[22px] whitespace-nowrap relative z-[2]">
              Contact Me
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-6 lg:mt-0 lg:absolute lg:top-[360px] lg:left-[23px]">
          <a href="https://www.linkedin.com/in/nisi-viloria/">
            <img
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px] cursor-pointer hover:opacity-80 transition-opacity"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>

          <a href="https://github.com/nisiviloria">
            <img
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px] cursor-pointer hover:opacity-80 transition-opacity"
              src={githubIcon}
              alt="GitHub"
            />
          </a>
        </div>

        {/* PROFILE IMAGE & DOWNLOAD BUTTON - Mobile */}
        <div className="relative mt-3 flex justify-center lg:hidden">
          <div className="relative w-[280px] sm:w-[320px]">
            <img
              className="w-full h-auto object-contain"
              alt="Profile"
              src={profileImage}
            />
            <div className="absolute bottom-[2px] top-[210px] right-[35px] sm:right-[50px] w-[200px] sm:w-[100px] h-[90px] sm:h-[80px] flex items-center justify-center">
              <img
                src={downloadCV}
                alt="Rotating Download CV"
                className="absolute w-[92px] sm:w-[102px] h-[92px] sm:h-[102px] animate-spin-slow"
              />
              <a
                href="/images/resume-viloria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 cursor-pointer"
              >
                <img
                  src={downloadIcon}
                  alt="DownloadIcon"
                  className="w-[50px] sm:w-[55px] h-[50px] sm:h-[55px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* CAROUSEL - Mobile */}
        <div className="lg:hidden mt-6">
          <CarouselText />
        </div>
      </div>

      {/* PROFILE IMAGE & DOWNLOAD BUTTON - Desktop */}
      <img
        className="hidden lg:block absolute lg:top-[100px] lg:right-[197px] lg:w-[396px] lg:h-[450px] object-contain"
        alt="Profile"
        src={profileImage}
      />
      <div className="hidden lg:flex absolute lg:top-[426px] lg:right-[329px] w-[110px] h-[110px] items-center justify-center">
        <img
          src={downloadCV}
          alt="Rotating Download CV"
          className="absolute w-[112px] h-[112px] animate-spin-slow"
        />
        <a
          href="/images/resume-viloria.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 cursor-pointer"
        >
          <img
            src={downloadIcon}
            alt="DownloadIcon"
            className="w-[60px] h-[60px]"
          />
        </a>
      </div>

      {/* CAROUSEL - Desktop */}
      <div className="hidden lg:block absolute lg:top-[666px] w-full">
        <CarouselText />
      </div>
    </div>
  );
};
