
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  // Project data organized by category
  const projectsData = {
    "Websites": [
      {
        id: 1,
        title: "PawPalace Shelter",
        subtitle: "(Website)",
        description: "A responsive pet adoption website where users can browse adoptable animals, learn about the shelter’s mission, and support the organization through donations.",
        image: `${import.meta.env.BASE_URL}images/Pawpalace.png`,
        technologies: ["HTML5", "CSS3", "Javascript"],
        link: "https://pawpalace-shelter.netlify.app/",
        githubLink: "https://github.com/nisiviloria/PawPalace-Shelter" 
      },
      {
        id: 2,
        title: "QuizTion?",
        subtitle: "(Website)",
        description: "An interactive JavaScript quiz website that welcomes users by name and challenges them with 8 short questions to test basic JavaScript knowledge.",
        image: `${import.meta.env.BASE_URL}images/Quiztion.png`,
        technologies: ["HTML", "CSS", "JavaScript", "JSON"],
        link: "https://nisiviloria.github.io/QuizTion-/",
        githubLink: "https://github.com/NisiViloria/QuizTion-" 
      },
      {
        id: 3,
        title: "Pack N' Fly",
        subtitle: "(Website)",
        description: "A travel agency website that helps users explore destinations, tourist attractions, and hotel options, with easy inquiry and booking via email.",
        image: `${import.meta.env.BASE_URL}images/Packnfly.png`,
        technologies: ["HTML", "CSS", "Javascript"],
        link: "https://nisiviloria.github.io/PackN-Fly/",   
        githubLink: "https://github.com/NisiViloria/PackN-Fly"
      },
      {
        id: 4,
        title: "FotopiaPH",
        subtitle: "(Website)",
        description: "A photobooth service website that showcases Fotopia’s event packages, fun photo experiences, and creative setups for various occasions.",
        image: `${import.meta.env.BASE_URL}images/Fotopia.png`,
        technologies: ["Canva", "Adobe Photoshop"],
        link: "https://fotopiapb.my.canva.site/copy-of-fotopiapb-ph#page-2",   
      },
      {
        id: 5,
        title: "Nisi Portfolio",
        subtitle: "(Website)",
        description: "A personal portfolio website that showcases my projects, skills, and creative work, including sections for About Me, Projects, Contact, and more—designed to present my experience and work in a clear and engaging way.",
        image: `${import.meta.env.BASE_URL}images/portfolio1.png`,
        technologies: ["Canva", "HTML", "CSS", "ReactJs", "Tailwindcss"],
        link: "https://nisiviloria.github.io/my-portfolio/", 
        githubLink: "https://github.com/nisiviloria/my-portfolio"  
      },
    ],
    "UI/UX Design": [
      {
        id: 6,
        title: "Viaje Asia",
        subtitle: "(UI/UX Design)",
        description: "A travel planning app UI/UX design that allows users to plan trips, discover destinations, and connect with fellow travelers in one seamless experience.",
        image: `${import.meta.env.BASE_URL}images/ViajeAsia.png`,
        technologies: ["Figma", "Canva"],
        link: "https://www.behance.net/gallery/239188075/Viaje-Asia",   
       figmaLink: "https://www.figma.com/design/5jSDe9jWsOqIJJxB6yTqm1/-MAIN--TEAM-4---HCI-FINAL-PROJ?node-id=13-38886&t=LocwWChKtdWfK6DW-1",
      },
      {
        id: 7,
        title: "OTW App",
        subtitle: "(UI/UX Design)",
        description: "A commuter-focused navigation app UI/UX design created to improve route planning and travel efficiency for Filipino urban commuters.",
        image: `${import.meta.env.BASE_URL}images/OTW.png`,
        technologies: ["Figma", "Canva"],
        link: "https://www.behance.net/gallery/239181049/OTW-%28Oras-Tungo-Wakas%29-App",   
        figmaLink: "https://www.figma.com/design/5jSDe9jWsOqIJJxB6yTqm1/-MAIN--TEAM-4---HCI-FINAL-PROJ?node-id=13-38886&t=LocwWChKtdWfK6DW-1",
      },
       {
        id: 8,
        title: "NavionPH",
        subtitle: "(UI/UX Design)",
        description: "A business-focused UI design for a personalized wristband service with GPS tracking, emphasizing clear navigation and easy access to product information.",
        image: `${import.meta.env.BASE_URL}images/NavionPH.png`,
        technologies: ["Adobe Photoshop", "Canva"],
       },
      {
        id: 9,
        title: "Just Pizza",
        subtitle: "(UI Design)",
        description: "A mobile food ordering app UI design that enables users to browse pizza menus, add items to their cart, place orders, and track deliveries smoothly.",
        image: `${import.meta.env.BASE_URL}images/JustPizza.png`,
        technologies: ["Adobe Photoshop", "Canva"],
      },
      {
        id: 10,
        title: "Puro Cafe",
        subtitle: "(UI Design)",
        description: "A mobile coffee ordering app UI design that allows users to explore coffee selections, customize orders, and complete checkout effortlessly.",
        image: `${import.meta.env.BASE_URL}images/PuroCafeUI.png`,
        technologies: ["Adobe Photoshop", "Canva"],
      },
       {
        id: 11,
        title: "Bobamazing",
        subtitle: "(UI Design)",
        description: "A mobile milktea ordering app UI design featuring product browsing, cart management, checkout, and order tracking for a fun user experience.",
        image: `${import.meta.env.BASE_URL}images/BobamazingUI.png`,
        technologies: ["Adobe Photoshop", "Canva"],
      },
      {
        id: 12,
        title: "Ammox",
        subtitle: "(UI Design)",
        description: "A gaming shop website UI design that showcases games, in-game weapons, gear, battle passes, and essential sections like store, news, and support.",
        image: `${import.meta.env.BASE_URL}images/Ammox.png`,
        technologies: ["Adobe Photoshop"],
      },
       {
        id: 13,
        title: "MySHEUportal",
        subtitle: "(UI Design)",
        description: "A school portal UI design that provides easy access to admissions, academics, research, campus life, scholarships, and student resources.",
        image: `${import.meta.env.BASE_URL}images/SHEU.png`,
        technologies: ["Adobe Photoshop"],
      },
    ],
    "Logo": [
       {
        id: 14,
        title: "School Logo",
        subtitle: "(Design)",
        description: "A clean and modern school logo design that represents professionalism, identity, and academic excellence.",
        image: `${import.meta.env.BASE_URL}images/SchoolLogo.png`,
        technologies: ["Photoshop"],
      },
      {
        id: 15,
        title: "Donut Logo",
        subtitle: "(Design)",
        description: "A playful and modern donut logo design created for a food brand, focusing on simplicity and visual appeal.",
        image: `${import.meta.env.BASE_URL}images/DonutLogo.png`,
        technologies: ["Photoshop"],
      },
      {
        id: 16,
        title: "Coffee Logo",
        subtitle: "(Design)",
        description: "A minimalist coffee logo design that reflects warmth, quality, and a modern café identity.",
        image: `${import.meta.env.BASE_URL}images/CoffeeLogo.png`,
        technologies: ["Photoshop"],
      },
      {
        id: 17,
        title: "Milktea Logo",
        subtitle: "(Design)",
        description: "A fun and youthful milktea logo design that captures the brand’s energetic and trendy personality.",
        image: `${import.meta.env.BASE_URL}images/BobamazingLogo.png`,
        technologies: ["Photoshop"],
      },
    ],
    "Social Media": [
      {
        id: 18,
        title: "Fotopia Photobooth",
        subtitle: "(Graphics)",
        description: "Social media graphics and content designs created to promote Fotopia’s photobooth services and event experiences.",
        image: `${import.meta.env.BASE_URL}images/FotopiaBrand.png`,
        technologies: ["Canva", "Photoshop", "Content Strategy"],
      },
      {
        id: 19,
        title: "Bobamazing",
        subtitle: "(Graphics)",
        description: "Print media and poster design created to promote a milktea brand with eye-catching visuals.",        
        image: `${import.meta.env.BASE_URL}images/BobamazingPrintM.png`,
        technologies: ["Canva", "Photoshop"],
      },
       {
        id: 20,
        title: "Wine",
        subtitle: "(Graphics)",
        description: "Creative social media and print designs developed to promote a wine brand through elegant and engaging visuals.",
        image: `${import.meta.env.BASE_URL}images/WinePrintM.png`,
        technologies: ["Canva", "Photoshop"],
      },
      {
        id: 21,
        title: "Amour Clothing",
        subtitle: "(Graphics)",
        description: "Social media graphics designed to showcase clothing products and promote brand awareness online.",
        image: `${import.meta.env.BASE_URL}images/ClothingPrintM.png`,
        technologies: ["Canva", "Photoshop"],
      },
       {
        id: 22,
        title: "Digital Media & Content Projects",
        subtitle: "(Content Videos)",
        description: "Short-form video content created during professional experience, involving research, videography, video editing, and copywriting for social media platforms.",
        image: `${import.meta.env.BASE_URL}images/TiktokSocmed.png`,
        technologies: ["Capcut", "Photoshop", "Canva"],
      },
      {
        id: 23,
        title: "Payday Sale Poster",
        subtitle: "(Graphics Poster)",
        description: "A promotional poster design created to advertise a payday sale using bold visuals and clear messaging.",
        image: `${import.meta.env.BASE_URL}images/Paydaysale.png`,
        technologies: ["Photoshop", "Canva"],
      },
    ],
    "Graphics": [
      {
        id: 24,
        title: "Puro Cafe",
        subtitle: "(Brand Design)",
        description: "A complete brand design project featuring logo design, print media, and photobooth visuals to create a cohesive coffee brand identity.",
        image: `${import.meta.env.BASE_URL}images/PuroCafe.png`,
        technologies: ["Canva", "Photoshop"],
      },
      {
        id: 25,
        title: "Bobamazing",
        subtitle: "(Brand Design)",
        description: "A milktea brand design project that includes packaging, photobooth visuals, and marketing materials for a fun and consistent brand experience.",
        image: `${import.meta.env.BASE_URL}images/Bobamazing.png`,
        technologies: ["Canva", "Photoshop"],
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedImage, setSelectedImage] = useState(null);
  const categories = ["All Projects", "Websites", "UI/UX Design", "Logo", "Social Media", "Graphics"];

  // Get projects based on active category
  const getCurrentProjects = () => {
    if (activeCategory === "All Projects") {
      return Object.values(projectsData).flat();
    }
    return projectsData[activeCategory] || [];
  };

  const currentProjects = getCurrentProjects();

  // Image Modal Component
  const ImageModal = ({ image, title, onClose }) => {
    if (!image) return null;

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <div className="relative max-w-6xl max-h-[90vh] w-full">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 lg:-top-5 right-0 text-white hover:text-white/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 font-raleway font-semibold">{title}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#151022] relative overflow-x-hidden">
      {/* Background blur image matching main page */}
      <img
        className="absolute top-0 left-0 w-full h-[400px] sm:h-[450px] lg:h-[516px] object-cover"
        alt="Bg blur"
        src="https://c.animaapp.com/ps12dqg1/img/bg-blur.png"
      />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 py-16 px-4">
        {/* Back to Home Button */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <button className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/50 backdrop-blur-md backdrop-brightness-[100%] bg-transparent hover:bg-white transition-all duration-300">
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
                className="mr-2 text-white group-hover:text-[#151022] transition-colors duration-300"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="font-raleway font-semibold text-white text-sm tracking-[0] group-hover:text-[#151022] transition-colors duration-300">
                Back to Home
              </span>
            </button>
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-center text-white font-raleway font-bold text-3xl sm:text-4xl mb-2">All Projects</h1>
        <p className="text-center text-white/70 font-raleway text-sm sm:text-base mb-8">Explore my work across different categories</p>

        {/* Category Navigation - Desktop */}
        <nav className="hidden lg:flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-raleway font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-[#151022] border border-white shadow-lg"
                    : "bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white/70"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

       {/* Category Navigation - Mobile (Dropdown) */}
        <div className="lg:hidden mb-8 px-4">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg font-raleway font-semibold text-sm bg-white/10 text-white border border-white/50 backdrop-blur-md appearance-none cursor-pointer focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '40px'
              }}
            >
              {categories.map((category) => (
                <option 
                  key={category} 
                  value={category}
                  className="bg-[#151022] text-white"
                >
                  {category}
                </option>
              ))}
            </select>
            
          </div>
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-white/60 font-raleway text-sm">
            Showing <span className="text-white font-semibold">{currentProjects.length}</span> {currentProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Desktop/Laptop View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-[5px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Project Image with View Image Button */}
                <div className="relative w-full h-[250px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                  {/* View Image Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(project)}
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
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View Image
                    </button>
                  </div>
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
                  <div className="flex gap-3 flex-wrap">
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
                        {project.subtitle.includes("Website") ? "Website" : "View"}
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
                    {project.figmaLink && (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md font-raleway font-semibold text-[#151022] text-sm hover:bg-white/90 transition-all"
                      >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 12a3 3 0 1 0 0-6h-3a3 3 0 1 0 0 6h3z" fill="currentColor"/>
                        <path d="M12 21a3 3 0 0 0 3-3v-3h-3a3 3 0 0 0 0 6z" fill="currentColor"/>
                        <path d="M9 15a3 3 0 1 1 0-6h3v6H9z" fill="currentColor"/>
                        <path d="M15 9a3 3 0 1 1-6 0h3a3 3 0 0 1 3 3z" fill="currentColor"/>
                        <path d="M9 3a3 3 0 0 1 0 6h3V3H9z" fill="currentColor"/>
                      </svg>
                        Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden w-full max-w-[340px] mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-[5px] border-[none] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(153deg,rgba(125,82,253,0.13)_0%,rgba(157,134,255,0.08)_78%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(98deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.16)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden"
              >
                {/* Project Image with View Image Button */}
                <div className="relative w-full h-[170px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                  {/* View Image Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(project)}
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
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View Image
                    </button>
                  </div>
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
                        {project.subtitle.includes("Website") ? "Website" : "View"}
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
        </div>

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/60 font-raleway text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Add custom scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AllProjects;