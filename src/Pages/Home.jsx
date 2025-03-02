import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import PortLogo from "../assets/PortLogo.png";
import myCV from "../assets/MuhammadFaizan_CV.pdf";
import heroImage from "../assets/herosect.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, 
};

const floatingDots = Array.from({ length: 8 }).map((_, index) => ({
  id: index,
  style: {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  },
}));

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center  justify-center bg-darkBg overflow-hidden px-4"
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
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Floating Dots Animation Inside Glassmorphic Div */}
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

        {/* Image Section */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent shadow-lg flex items-center justify-center"
          variants={fadeInUp}
        >
          <img
            src={PortLogo}
            alt="My Photo"
            className="w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left px-2 sm:px-4"
          variants={fadeInUp}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-poppins">
            Hi, I&apos;m <br />
            <span className="text-white">Muhammad Faizan!</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-darkText">
            A <b>passionate</b> <b>web developer</b> crafting{" "}
            <b>stunning digital experiences</b>.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="px-5 py-2 sm:px-6 sm:py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-accent transition cursor-pointer z-50"
            >
              Let&apos;s Connect
            </Link>

            <a
              href={myCV}
              download="MuhammadFaizan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-white/20 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-primary hover:text-white transition z-50"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Downward Arrow with Scroll Functionality */}
      <div className="absolute bottom-24 sm:bottom-16 flex flex-col items-center">
        <span className="text-white text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">
          About Me
        </span>
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-50} // Adjust for navbar height
          className="flex justify-center items-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="text-white text-2xl sm:text-3xl opacity-80 hover:text-accent transition" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
