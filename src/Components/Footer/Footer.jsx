import { Icon } from "@iconify/react";
import Logo from "../../assets/Logo.png";
import Pill from "./Pill";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-gray-200 py-8"> {/* Updated text color for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <a href="#" className="h-full flex justify-center items-center">
            <img src={Logo} alt="Logo" className="h-12 md:h-16" />
          </a>
          <p className="mt-2 text-gray-400"> {/* Updated text-secondary */}
            Coding, one project at a time.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/mfaizan11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition text-2xl"
            aria-label="Visit GitHub profile"
          >
            <Icon icon="fa-brands:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faizan-76a024283/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition text-2xl"
            aria-label="Visit LinkedIn profile"
          >
            <Icon icon="fa-brands:linkedin" />
          </a>
          <a
            href="mailto:muhammadfaizanakx@gmail.com"
            className="text-white hover:text-accent transition text-2xl"
            aria-label="Send email to muhammadfaizanakx@gmail.com"
          >
            <Icon icon="fa-solid:envelope" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-accent transition">
            Who I Am
          </a>
          <a href="#services" className="hover:text-accent transition">
            What I Do
          </a>
          <a href="#portfolio" className="hover:text-accent transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Muhammad Faizan. All rights reserved.
        </p>
      </div>
      <Pill />
    </footer>
  );
};

export default Footer;
