import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
  } from "react-icons/fa";
  import { SiTailwindcss } from "react-icons/si";
  import { FaChevronDown } from "react-icons/fa";
  import { motion } from "framer-motion";
  import { Link } from "react-scroll";
  
  const About = () => {
    return (
      <div
        id="about"
        className="lg:min-h-[100svh] min-h-[95svh] flex flex-col items-center justify-start sm:justify-center text-white px-4 sm:px-6 pt-16 pb-4 sm:py-12 lg:py-6 relative"
      >
        <div className="relative max-w-4xl text-center z-10">
          {/* Increase About Me heading size for mobile */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            About Me
          </h2>
  
          {/* Increase paragraph text size for mobile */}
          <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed sm:leading-loose text-justify max-w-[90%] sm:max-w-3xl mx-auto  sm:px-">
            I am a <b>BS IT graduate</b> with a strong background in{" "}
            <b>web development</b>, dedicated to crafting high-quality,
            interactive, and <b>user-friendly digital experiences</b>. My
            expertise lies in
            <b> responsive design</b>, modern <b>front-end frameworks</b>, and
            optimizing performance for a seamless <b>user experience</b>. I thrive
            on problem-solving and continuously expanding my skill set to build
            <b> efficient and scalable applications</b>.
          </p>
  
          {/* Tech Stack Section - Increase Icon Sizes for Mobile */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
            {[
              FaHtml5,
              FaCss3Alt,
              FaBootstrap,
              FaJs,
              FaReact,
              SiTailwindcss,
              FaGitAlt,
              FaGithub,
            ].map((Icon, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
              >
                <Icon className="text-4xl sm:text-5xl md:text-6xl text-primary" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Animated Downward Arrow with Scroll Functionality */}
        <div className="absolute bottom-8 sm:bottom-28 lg:bottom-12 xl:bottom-20 flex flex-col items-center">
          <span className="text-xs sm:text-sm mt-6 text-primary opacity-80 mb-1 sm:mb-2">
            Services
          </span>
          <Link
            to="services"
            smooth={true}
            duration={800}
            offset={-100} // Increase offset to prevent overlap
            className="flex justify-center items-center cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaChevronDown className="text-xl sm:text-2xl md:text-3xl text-primary opacity-80 hover:text-accent transition" />
            </motion.div>
          </Link>
        </div>
      </div>
    );
  };
  
  export default About;
  