import { useMemo } from "react";
import { motion } from "framer-motion";
import PortLogo from "../assets/PortLogo.webp";
import myCV from "../assets/Muhammad-Faizan-Resume.pdf";
import heroImage from "../assets/herosect.webp";
import { Icon } from "@iconify/react";

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingDots = useMemo(() => {
    return Array.from({ length: 8 }).map((_, index) => ({
      id: index,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
    }));
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-darkBg overflow-hidden px-4"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glassmorphic Hero Content */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-3xl p-4 sm:p-6 md:p-8 lg:p-12 min-h-[50vh] sm:min-h-[60vh] rounded-3xl shadow-lg max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-4 flex flex-col md:flex-row items-center space-y-6 md:space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingDots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
                y: [0, -20, 20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                delay: dot.id * 0.2,
              }}
              style={dot.style}
            />
          ))}
        </div>

        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent shadow-lg flex items-center justify-center">
          <img
            src={PortLogo}
            alt="Profile"
            width="200"
            height="200"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white">
            Hi, I&apos;m <br />
            <span className="text-primary">Muhammad Faizan!</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200">
            A <b>passionate</b> <b>web developer</b> crafting{" "}
            <b>stunning digital experiences</b>.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/muhammad-faizan-76a024283"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-accent transition cursor-pointer z-50"
            >
              Let&apos;s Connect
            </a>

            <a
              href={myCV}
              download="Muhammad-Faizan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-white/10 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-primary hover:text-white transition z-50"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-24 sm:bottom-16 flex flex-col items-center">
        <span className="text-gray-200 text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">
          About Me
        </span>
        <button
          onClick={() => scrollToSection("about")}
          className="flex justify-center items-center cursor-pointer"
          aria-label="Scroll down to About Me section"
          title="Scroll down"
        >
          <Icon
            icon="fa:chevron-down"
            className="text-primary opacity-80 hover:text-accent transition"
            width="28"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
