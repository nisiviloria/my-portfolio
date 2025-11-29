import React from "react";
import Lanyard from './Lanyard.jsx'; 

export const AboutMe = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:absolute lg:top-[844px] lg:left-[75px] lg:w-[1158px] py-8 lg:py-0">
      {/* Purple Border Box - Adjusted for mobile */}
      <div className="w-full h-[1090px] lg:w-[1130px] lg:h-[560px] bg-[#151022] rounded-[20px] border-[5px] border-solid border-violet-500/40 shadow-[0_0_15px_rgba(168,85,247,0.4)] lg:absolute lg:top-0 p-6 lg:p-0">
        
        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden lg:block">
          {/* Lanyard - Desktop Position */}
          <Lanyard 
            position={[0, 0, 30]}
            fov={20}
            transparent={true}
            gravity={[0, -40, 0]}
            className="absolute top-[41px] left-[680px] w-[450px] h-[500px]"
          />

          {/* Divider Line - Desktop Only */}
          <img
            className="absolute top-[41px] left-[672px] w-px h-[500px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/ps12dqg1/img/line-2.svg"
          />
        </div>

        {/* Section Title */}
        <div className="lg:absolute lg:top-[62px] lg:left-[57px] [font-family:'Raleway',Helvetica] font-extrabold text-white text-3xl lg:text-5xl tracking-[0] leading-[normal] mb-6 lg:mb-0">
          About Me
        </div>

        {/* About Description */}
        <p className="lg:absolute lg:top-[151px] lg:left-[57px] lg:w-[550px] [font-family:'Raleway',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-5 lg:leading-5 mb-8 lg:mb-0">
          I'm an aspiring Frontend Developer who loves bringing ideas to life
          through clean, responsive, and visually appealing websites. I enjoy turning
          concepts into simple, interactive experiences using HTML, CSS, JavaScript, React, and Tailwind
          CSS.
          <br />
          <br />
          I'm still learning, and that's something I fully embrace. My goal is to
          become a reliable developer who creates practical, human-centered tools that
          truly make a difference. I believe every project is an opportunity
          to build something impactful — not just for users, but for the people and brands
          that trust me to bring their vision to life.
        </p>

        {/* Personal Details and Interests Container */}
        <div className="lg:absolute lg:top-[360px] lg:left-[57px] flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
          {/* Personal Details */}
          <div>
            <div className="[font-family:'Raleway',Helvetica] font-bold text-white text-base lg:text-lg tracking-[0] leading-[normal] mb-2">
              Personal Details
            </div>

            <div className="[font-family:'Raleway',Helvetica] font-medium text-white text-sm lg:text-[15px] leading-[1.8]">
              <div>
                Age{" "}
                <span className="italic text-gray-400 ml-[50px]">
                  21 yrs old
                </span>
              </div>
              <div>
                Birthdate{" "}
                <span className="italic text-gray-400 ml-3">
                  August 22, 2004
                </span>
              </div>
              <div>
                Phone{" "}
                <span className="italic text-gray-400 ml-[30px]">
                  0936 465 5407
                </span>
              </div>
              <div>
                Email{" "}
                <span className="italic text-gray-400 ml-[36px]">
                  nisiashley22@gmail.com
                </span>
              </div>
              <div>
                Address{" "}
                <span className="italic text-gray-400 ml-[15px]">
                  Binangonan, Rizal, Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="[font-family:'Raleway',Helvetica] font-bold text-white text-base lg:text-lg tracking-[0] leading-[normal] mb-2">
              Interests
            </div>

            {/* Interest Icons */}
            <div className="flex flex-wrap gap-3 w-full lg:w-[230px]">
              {/* First Row */}
              <div className="flex flex-col items-center justify-center w-[63px] h-[65px] p-3 rounded-[10px] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] backdrop-blur-md">
                <img className="w-[31px] h-[33.8px]" alt="Reading" src="https://c.animaapp.com/ps12dqg1/img/group-6@2x.png" />
                <div className="text-xs italic font-medium text-gray-400">Reading</div>
              </div>

              <div className="flex flex-col items-center justify-center w-[63px] h-[65px] p-3 rounded-[10px] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] backdrop-blur-md">
                <img className="w-[37px] h-[33px]" alt="Watching" src="https://c.animaapp.com/ps12dqg1/img/vector.svg" />
                <div className="text-xs italic font-medium text-gray-400">Watching</div>
              </div>

              <div className="flex flex-col items-center justify-center w-[63px] h-[65px] p-3 rounded-[10px] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] backdrop-blur-md">
                <img className="w-[35px] h-[33px]" alt="Music" src="https://c.animaapp.com/ps12dqg1/img/vector-1.svg" />
                <div className="text-xs italic font-medium text-gray-400">Music</div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col items-center justify-center w-[63px] h-[65px] p-3 rounded-[10px] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] backdrop-blur-md">
                <img className="w-[29px] h-[35px]" alt="Drawing" src="https://c.animaapp.com/ps12dqg1/img/vector-2.svg" />
                <div className="text-xs italic font-medium text-gray-400">Drawing</div>
              </div>

              <div className="flex flex-col items-center justify-center w-[63px] h-[65px] p-3 rounded-[10px] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] backdrop-blur-md">
                <img className="w-[27px] h-[33px]" alt="Coding" src="https://c.animaapp.com/ps12dqg1/img/group@2x.png" />
                <div className="text-xs italic font-medium text-gray-400">Coding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Divider - inside the purple box, made gray */}
         <img
          className="block lg:hidden w-full mt-6 opacity-40"
          alt="divider"
          src={`${import.meta.env.BASE_URL}images/Line Vertical.png`}
          style={{ filter: 'grayscale(100%)' }}
        />

        {/* Mobile Lanyard - inside the purple box */}
        <div className="block lg:hidden mb-0">
          <Lanyard 
            position={[0, 0, 30]}
            fov={20}
            transparent={true}
            gravity={[0, -40, 0]}
            className="w-full h-[500px] rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
