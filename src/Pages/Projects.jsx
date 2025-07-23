import { Icon } from "@iconify/react";
import EliteRoadWorks from "../assets/EliteRoadWorks.webp";
import albatross from "../assets/albatross.webp";
import digi from "../assets/digi.webp";
import fasht from "../assets/fasht.webp";
import raka from "../assets/raka.webp";
import speak from "../assets/speak.webp";
import poli from "../assets/poli.webp";
import astra from "../assets/astra.webp";

const techIcons = {
  react: "logos:react",
  tailwindcss: "logos:tailwindcss-icon",
  vite: "vscode-icons:file-type-vite",
  nodejs: "logos:nodejs-icon",
  axios: "logos:axios",
  "html/css": "vscode-icons:file-type-html",
  html: "vscode-icons:file-type-html",
  css: "vscode-icons:file-type-css",
  liquid: "vscode-icons:file-type-liquid",
  shopify: "logos:shopify",
  elementor: "logos:elementor-icon",
  astra: "logos:wordpress-icon",
};

const projects = [
  // Dynamic projects
  {
    name: "Elite Road Works",
    desktopImg: EliteRoadWorks,
    previewLink: "https://eliteroadworks.com",
    category: "dynamic",
    technology: [
      {
        title: ["React", "Tailwindcss"],
        desc: "Developed a Business Website, unique dynamic services component, using React JS along with Tailwind CSS.",
      },
    ],
  },
  {
    name: "Albatross Solutions",
    desktopImg: albatross,
    previewLink: "https://albatross-sol.com",
    category: "dynamic",
    technology: [
      {
        title: ["React", "Tailwindcss"],
        desc: "Developed a Professional Website using React JS with Tailwindcss, along with data-aos for onscroll animation to make the website interactive.",
      },
    ],
  },
  {
    name: "DigiOpt Consulting",
    desktopImg: digi,
    previewLink: "https://digioptconsulting.com",
    category: "dynamic",
    technology: [
      {
        title: ["React", "Tailwindcss", "Vite", "NodeJS", "Axios"],
        desc: "Developed a Professional Website with React, Tailwindcss and Vite by following a Figma Design.",
      },
    ],
  },
  {
    name: "Astra Byte Global",
    desktopImg: astra,
    comingSoon: true,
    previewLink: "Coming Soon",
    category: "dynamic",
    technology: [
      {
        title: ["React", "Tailwindcss", "Vite"],
        desc: "Developing a Professional Website with React, Tailwindcss and Vite by following a Figma Design",
      },
    ],
  },
  // Shopify projects
  {
    name: "Islamic Fashtara Store",
    desktopImg: fasht,
    previewLink: "https://islamicfashtara.com",
    category: "shopify",
    technology: [
      {
        title: ["Shopify", "HTML/CSS", "Liquid"],
        desc: "Developed an Ecommerce Store for a client perfectly aligned according to the requirements.",
      },
    ],
  },
  // WordPress projects
  {
    name: "Poliscents",
    desktopImg: poli,
    previewLink: "https://poliscents.com/",
    category: "wordpress",
    technology: [
      {
        title: ["Elementor", "Astra"],
        desc: "Developed a Static Website using Astra Theme with Elementor",
      },
    ],
  },
  {
    name: "Speakup Institute",
    desktopImg: speak,
    previewLink: "https://speakupuae.com/",
    category: "wordpress",
    technology: [
      {
        title: ["Elementor", "Astra"],
        desc: "Developed a Static Website using Astra Theme with Elementor",
      },
    ],
  },
  {
    name: "Raka Naturals",
    desktopImg: raka,
    previewLink: "https://rakanaturals.com/",
    category: "wordpress",
    technology: [
      {
        title: ["Elementor", "Astra"],
        desc: "Developed a Static Website using Astra Theme with Elementor",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-white min-h-screen text-primary">
      <div className="container mx-auto ">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-center mb-8">
          Recent Projects
        </h2>

        {/* Unified grid for all projects */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl hover:shadow-xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center border-3 border-primary/50 hover:border-primary transition-all h-full"
            >
              <h2 className="text-[11px]  md:text-xl  font-semibold mb-4 text-center">
                {project.name}
              </h2>
              <div className="flex items-center gap-4 justify-center">
                <img
                  src={project.desktopImg}
                  alt={`${project.name} Desktop`}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full max-w-[400px] h-auto mx-auto"
                />
              </div>
              <div className="mt-4 flex-grow">
                {project.technology?.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-center gap-2 flex-wrap mb-1">
                      {tech.title.map((t, i) => {
                        const iconKey = t.toLowerCase();
                        const icon = techIcons[iconKey];
                        return icon ? (
                          <Icon
                            key={i}
                            icon={icon}
                            width="38"
                            height="38"
                            title={t}
                            className="text-primary bg-white/10 p-1 rounded-lg shadow-m"
                          />
                        ) : (
                          <span
                            key={i}
                            className="bg-primary/10 shadow-lg text-primary border-3 border-primary px-3 py-1 rounded-xl"
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-sm py-2 text-gray-600 hidden md:block">{tech.desc}</p>
                  </div>
                ))}
              </div>
              <div className=" mt-4 text-center flex flex-row items-center justify-center gap-4">
                {project.comingSoon ? (
                  <span className=" text-[11px]  md:text-xl px-2 md:px-6 py-2 bg-green-700 text-white font-semibold rounded-lg cursor-not-allowed">
                    🚧 Work in Progress
                  </span>
                ) : (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px]  md:text-xl px-2 md:px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-black transition"
                  >
                    Preview Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
