import { Icon } from "@iconify/react";
import html5Icon from "@iconify-icons/fa-brands/html5";
import css3Icon from "@iconify-icons/fa-brands/css3-alt";
import bootstrapIcon from "@iconify-icons/fa-brands/bootstrap";
import jsIcon from "@iconify-icons/fa-brands/js";
import reactIcon from "@iconify-icons/fa-brands/react";
import gitIcon from "@iconify-icons/fa-brands/git-alt";
import githubIcon from "@iconify-icons/fa-brands/github";
import wordpressIcon from "@iconify-icons/fa-brands/wordpress";
import shopifyIcon from "@iconify-icons/simple-icons/shopify";
import tailwindcssIcon from "@iconify-icons/simple-icons/tailwindcss";



const About = () => {
  const icons = [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: bootstrapIcon, name: "Bootstrap" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: tailwindcssIcon, name: "Tailwind CSS" },
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: wordpressIcon, name: "WordPress" },
    { icon: shopifyIcon, name: "Shopify" },
  ];

  return (
    <div
      id="about"
      className="lg:min-h-[90svh] min-h-[80svh] flex flex-col items-center justify-center text-white px-4 sm:px-6 pt-16 pb-4 sm:py-12 lg:py-6 relative"
    >
      <div className="relative max-w-4xl text-center z-10">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
          About Me
        </h2>

        <p className="text-sm sm:text-lg md:text-lg text-black leading-relaxed sm:leading-loose text-justify md:text-justify max-w-[90%] sm:max-w-3xl mx-auto">
          I am a <b>BS IT graduate</b> with a strong background in{" "}
          <b>web development</b>, dedicated to crafting high-quality, 
          interactive, and <b>user-friendly digital experiences</b>. My
          expertise lies in <b>responsive design</b>, modern{" "}
          <b>front-end frameworks</b>, and optimizing performance for a seamless{" "}
          <b>user experience</b>. I thrive on problem-solving and continuously
          expanding my skill set to build{" "}
          <b>efficient and scalable applications</b>. 
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:px-10">
          {icons.map(({ icon, name }, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
              title={name}
            >
              <Icon
                icon={icon}
                className="text-primary"
                width="48"
                height="48"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
