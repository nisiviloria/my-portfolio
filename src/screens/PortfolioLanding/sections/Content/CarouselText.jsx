import React from "react";

export const CarouselText = () => {
  const items = [
    "FRONT END DEVELOPER",
    "WEB DESIGNER",
    "UI/UX DESIGNER",
    "MARKETING",
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-screen lg:w-full -mx-8 sm:-mx-8 lg:mx-0">
      {/* Background bar (same design, responsive width) */}
      <div className="w-full h-[70px] sm:h-[90px] lg:h-[110px] bg-[linear-gradient(90deg,rgba(157,134,255,1)_0%,rgba(125,82,253,1)_100%)] relative">

        {/* White rotated strip */}
        <div className="absolute top-[15px] left-0 w-full h-[50px] sm:h-[65px] lg:h-[80px] bg-white rotate-[-1deg] overflow-hidden">

          {/* Scrolling content */}
          <div className="flex items-center gap-1 animate-scroll mt-[10px] sm:mt-[15px] lg:mt-[23px] whitespace-nowrap">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-8 flex-shrink-0 px-3">
                
                {/* Star icon (responsive but same design) */}
                <img
                  className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] rotate-[1deg]"
                  alt="Star"
                  src="https://c.animaapp.com/ps12dqg1/img/star-2.svg"
                />

                {/* Text (same font but responsive size) */}
                <div className="[font-family:'Raleway',Helvetica] font-semibold text-variable-collection-dark-color text-[18px] sm:text-[24px] lg:text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {item}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}