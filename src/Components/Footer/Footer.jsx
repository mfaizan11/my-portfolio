import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-darkText py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo & Tagline */}
        <h2 className="text-3xl font-bold text-primary font-poppins">
          My Portfolio
        </h2>
        <p className="mt-2 text-secondary">
          Crafting experiences, one project at a time.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/mfaizan11"
            target="_blank"
            className="text-primary hover:text-accent transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faizan-76a024283/"
            target="_blank"
            className="text-primary hover:text-accent transition text-2xl"
          >
            <FaLinkedin />
          </a>
          
          <a
            href="mailto:muhammadfaizanakx@gmail.com"
            className="text-primary hover:text-accent transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex justify-center space-x-6 text-sm">
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
        <p className="mt-6 text-sm text-darkText/80">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
