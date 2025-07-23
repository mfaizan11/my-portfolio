import { useState } from "react";
// import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import Logo from "../../assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 border-2 border-primary backdrop-blur-md fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl shadow-[0_0_15px_rgba(255,255,255,0.6)] drop-shadow-lg rounded-3xl">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-2">
          {/* Logo */}
          <a href="/" className="h-full">
            <img src={Logo} alt="Logo" className="h-12 w-12 md:w-16 md:h-16" height={60} width={60} fetchPriority="high"/>
          </a>

          {/* Mobile Contact Info (Visible only on mobile) */}
          <div className="flex flex-col items-center md:hidden">
            <p className="flex items-center gap-2 text-[1.2vh] text-primary font-medium">
              <Icon icon="fa-solid:phone" className="text-[1.4vh]" />{" "}
              0306-6864003
            </p>
            <p className="flex items-center gap-2 text-[1.2vh] text-primary font-medium">
              <Icon icon="fa-solid:envelope" className="text-[1.4vh]" />{" "}
              muhammadfaizanakx@gmail.com
            </p>
            <div className="flex space-x-3 mt-1">
              <a
                href="https://www.linkedin.com/in/muhammad-faizan-76a024283/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                className="text-primary hover:text-black text-xl"
              >
                <Icon icon="fa-brands:linkedin" />
              </a>
              <a
                href="https://github.com/mfaizan11"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
                className="text-primary hover:text-black text-xl"
              >
                <Icon icon="fa-brands:github" />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[18px] font-semibold">
            <a
              href="#about"
              className="cursor-pointer text-primary hover:text-black transition"
            >
              Who I Am
            </a>
            <a
              href="#services"
              className="text-primary hover:text-black transition"
            >
              What I Do
            </a>

            <a
              href="#projects"
              className="cursor-pointer text-primary hover:text-black transition"
            >
              Portfolio & Work
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-primary hover:text-black transition"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-4xl md:hidden text-primary focus:outline-none transition-smooth ease-in-out  duration-200 "
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white border-1 border-primary rounded-2xl m-4 shadow-lg">
            <a
              href="#about"
              className="cursor-pointer text-primary hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Who I Am
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-black transition"
            >
              What I Do
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-primary hover:text-black transition"
            >
              Portfolio & Work
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-primary hover:text-black transition"
            >
              Let&apos;s Connect
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
