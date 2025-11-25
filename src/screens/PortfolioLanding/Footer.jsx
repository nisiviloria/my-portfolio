import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the element's position relative to the document
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      
      // Scroll to the element with smooth behavior
      window.scrollTo({
        top: elementTop,
        behavior: "smooth"
      });
    }
  };

const items = [
  { 
    icon: <VscHome size={18} />, 
    label: "Home", 
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
  },
  { 
    icon: <VscAccount size={18} />, 
    label: "About Me", 
    onClick: () => window.scrollTo({ top: 790, behavior: "smooth" }) 
  },
  { 
    icon: <VscArchive size={18} />, 
    label: "Project", 
    onClick: () => window.scrollTo({ top: 1550, behavior: "smooth" }) 
  },
];

  return (
    <div className="mt-8 lg:mt-32 pb-8 flex flex-col items-center relative z-10 bg-[#151022]">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-4">
        
        <h1 className="px-[70px] text-2xl text-white font-bold order-1 md:order-none">
          Portfolio
        </h1>

        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://github.com/nisiviloria">
            <i className="ri-github-fill ri-2x text-white"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087114153304">
            <i className="ri-facebook-fill ri-2x text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/nisi-viloria">
            <i className="ri-linkedin-fill ri-2x text-white"></i>
          </a>
        </div>

        <div className="order-3 px-[60px] md:order-none mt-[60px] md:mt-0 md:mb-0 md:ml-8">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>

      <style jsx>{`
        .dock-outer {
          overflow: visible;
        }

        .dock-panel {
          position: relative;
          bottom: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          width: fit-content;
          gap: 0.5rem;
          border-radius: 1rem;
          background: linear-gradient(145deg, rgba(60,60,60,0.9), rgba(30,30,30,0.9));
          backdrop-filter: blur(10px);
          padding: 0 0.5rem 0.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .dock-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: linear-gradient(145deg, rgba(80,80,80,0.9), rgba(50,50,50,0.9));
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          cursor: pointer;
          outline: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .dock-item:hover {
          background: linear-gradient(145deg, rgba(100,100,100,0.9), rgba(60,60,60,0.9));
        }

        .dock-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: #f0f0f0;
        }

        .dock-label {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          width: fit-content;
          white-space: pre;
          border-radius: 0.375rem;
          background: linear-gradient(145deg, rgba(60,60,60,0.95), rgba(40,40,40,0.95));
          backdrop-filter: blur(8px);
          padding: 0.125rem 0.5rem;
          font-size: 0.75rem;
          color: #f0f0f0;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        position: "relative",
        zIndex: 2,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{
            x: "-50%",
            pointerEvents: "none",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <motion.div className="dock-outer" style={{ overflow: "visible" }}>
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{
          height: panelHeight, 
          overflow: "visible", 
        }}
        role="toolbar"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Footer;
