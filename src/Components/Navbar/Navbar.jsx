import { useState } from "react";
import { Link } from "react-scroll"; // Import react-scroll
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background fixed top-0 w-full shadow-[0_0_15px_rgba(255,255,255,0.6)] drop-shadow-lg z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-2">
          {/* Logo */}
          <a href="#" className="h-full">
            <img src={Logo} alt="Logo" className="h-12 md:h-16" />
          </a>

          {/* Mobile Contact Info (Visible only on mobile) */}
          <div className="flex flex-col items-center md:hidden ">
            <p className="flex items-center gap-2 text-[1.2vh] text-primary font-medium">
              <FaPhone className="text-[1.4vh]" /> 0306-6864003
            </p>
            <p className="flex items-center gap-2 text-[1.2vh] text-primary font-medium">
              <FaEnvelope className="text-[1.4vh]" />{" "}
              muhammadfaizanakx@gmail.com
            </p>
            <div className="flex space-x-3 mt-1">
              <a
                href="https://www.linkedin.com/in/muhammad-faizan-76a024283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mfaizan11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-xl font-semibold">
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Who I Am
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              What I Do
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Portfolio & Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-4xl md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white shadow-lg">
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Who I Am
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              What I Do
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Portfolio & Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer text-primary hover:text-accent transition"
            >
              Let&apos;s Connect
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
