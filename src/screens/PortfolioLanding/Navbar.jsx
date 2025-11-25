import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("HOME");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Scroll to section function
  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsScrolling(true);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
    
    switch(section) {
      case "HOME":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "ABOUT":
        window.scrollTo({ top: 840, behavior: "smooth" });
        break;
      case "PROJECTS":
        window.scrollTo({ top: 1550, behavior: "smooth" });
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Update active section and navbar visibility based on scroll and wheel
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show navbar immediately when scrolling
      if (scrollPosition > 10) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      
      // Don't update active section while user is clicking navigation
      if (isScrolling) return;
      
      const aboutThreshold = 700;
      const projectsThreshold = 1400;
      const contactThreshold = 2300;
      
      if (scrollPosition >= contactThreshold) {
        setActiveSection("CONTACT");
      } else if (scrollPosition >= projectsThreshold) {
        setActiveSection("PROJECTS");
      } else if (scrollPosition >= aboutThreshold) {
        setActiveSection("ABOUT");
      } else {
        setActiveSection("HOME");
      }
    };

    // Handle mouse wheel - show navbar instantly on scroll down or up
    const handleWheel = (e) => {
      const scrollPosition = window.scrollY;
      
      // Show navbar immediately on wheel scroll if not at top
      if (scrollPosition > 10 || e.deltaY > 0) {
        setIsNavVisible(true);
      }
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set timeout to trigger scroll handler
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling]);

  const navItems = [
    { name: "Home", id: "HOME" },
    { name: "About", id: "ABOUT" },
    { name: "Project", id: "PROJECTS" },
    { name: "Contact", id: "CONTACT" }
  ];

  return (
    <>
      {/* Desktop Navbar - Always visible on desktop */}
      <div className="hidden md:block absolute top-[35px] left-[179px] w-[925px] h-[39px] z-10">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <img
            src="/public/images/logo.png"
            alt="Nisi Dev Logo"
            className="w-[160px]"
          />

          {/* Navigation */}
          <div className="inline-flex h-[49px] relative items-center rounded-[50px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`inline-flex items-center justify-center px-5 py-3.5 relative flex-[0_0_auto] rounded-[50px] transition-all duration-300 z-[2] outline-none focus:outline-none border-none cursor-pointer ${
                  activeSection === item.id
                    ? "bg-white shadow-lg"
                    : "bg-transparent hover:bg-white/10"
                }`}
                style={{
                  background: activeSection === item.id ? '#ffffff' : 'transparent'
                }}
              >
                <span
                  className={`font-semibold text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#151022]" : "text-white"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Logo - Visible only at top */}
      <div className={`md:hidden fixed top-2 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex pl-7 ${!isNavVisible ? "opacity-100" : "opacity-0"}`}>
        <img
          src="/public/images/logo.png"
          alt="Nisi Dev Logo"
          className="w-[150px]"
        />
      </div>

      {/* Mobile Navbar - Slides down on scroll */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center ${
          isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex items-center justify-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-b-2xl shadow-lg whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id ? "text-white font-bold" : "text-white/80"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
