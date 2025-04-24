// import flasStore from "../assets/flasStore.png";
import EliteRoadWorks from "../assets/EliteRoadWorks.png";
import albatross from "../assets/albatross.png";
import digi from "../assets/digi.png";
import fasht from "../assets/fasht.png";
import raka from "../assets/raka.png";
import speak from "../assets/speak.png";
import poli from "../assets/poli.png";
import astra from "../assets/astra.png";

const projects = {
  // static: [
  //   {
  //     name: "Design with Sal",
  //     desktopImg: "/assets/designwithsal-desktop.png",
  //     mobileImg: "/assets/designwithsal-mobile.png",
  //     previewLink: "https://designwithsal.com",
  //   },
  // ],
  dynamic: [
    {
      name: "Elite Road Works",
      desktopImg: EliteRoadWorks,
      previewLink: "https://eliteroadworks.com",
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
      technology: [
        {
          title: ["React", "Tailwindcss", "Vite"],
          desc: "Developing a Professional Website with React, Tailwindcss and Vite by following a Figma Design",
        },
      ],
    },
  ],
  shopify: [
    // {
    //   name: "Flas Store",
    //   desktopImg: flasStore,
    //   previewLink: "https://shopflas.com",
    // },
    {
      name: "Islamic Fashtara Store",
      desktopImg: fasht,
      previewLink: "https://islamicfashtara.com",
      technology: [
        {
          title: ["HTML/CSS", "Liquid"],
          desc: "Developed an Ecommerce Store for a client perfectly aligned according to the requirements.",
        },
      ],
    },
  ],
  wordpress: [
    // {
    //   name: "Flas Store",
    //   desktopImg: flasStore,
    //   previewLink: "https://shopflas.com",
    // },
    {
      name: "Poliscents",
      desktopImg: poli,
      previewLink: "https://poliscents.com/",
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
      technology: [
        {
          title: ["Elementor", "Astra"],
          desc: "Developed a Static Website using Astra Theme with Elementor",
        },
      ],
    },
  ],
};

const Portfolio = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-white text-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Portfolio
        </h2>

        {/* Static Websites Section */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Static Websites</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.static.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md"
                
              >
                <h4 className="text-xl font-semibold mb-4">{project.name}</h4>
                <div className="flex items-center gap-4 justify-center">
                  <img
                    src={project.desktopImg}
                    alt={`${project.name} Desktop`}
                    className="w-1/2 border border-gray-300 rounded-lg shadow-lg"
                  />
                  
                  
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
                  >
                    Preview Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Dynamic Websites Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Dynamic Websites</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.dynamic.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl hover:shadow-xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary/50 hover:border-primary transition-all"
              >
                <h4 className="text-xl font-semibold mb-4 text-center">
                  {project.name}
                </h4>
                <div className="flex items-center gap-4 justify-center">
                  {/* Laptop Image */}
                  <img
                    src={project.desktopImg}
                    alt={`${project.name} Desktop`}
                    className="w-1/2"
                  />
                </div>
                <div className="mt-4">
                  {project.technology?.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-center gap-2 flex-wrap mb-1">
                        {tech.title.map((t, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 shadow-lg text-primary border-3 border-primary  px-3 py-1 rounded-xl"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm py-2 text-gray-600">{tech.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  {project.comingSoon ? (
                    <span className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg cursor-not-allowed">
                      🚧 Work in Progress
                    </span>
                  ) : (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
                    >
                      Preview Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopify Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 mt-10">Shopify Stores</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.shopify.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary/50 hover:border-primary transition-all"
              >
                <h4 className="text-xl font-semibold mb-4 text-center">
                  {project.name}
                </h4>
                <div className="flex items-center gap-4 justify-center">
                  {/* Laptop Image */}
                  <img
                    src={project.desktopImg}
                    alt={`${project.name} Desktop`}
                    className="w-1/2 "
                  />
                </div>
                <div className="mt-4">
                  {project.technology?.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-center gap-2 flex-wrap mb-1">
                        {tech.title.map((t, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 shadow-lg text-primary border-3 border-primary  px-3 py-1 rounded-xl"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm py-2 text-gray-600">{tech.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
                  >
                    Preview Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  wordpress Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 mt-10">
            Wordpress Websites
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.wordpress.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary/50 hover:border-primary transition-all"
              >
                <h4 className="text-xl font-semibold mb-4 text-center">
                  {project.name}
                </h4>
                <div className="flex items-center gap-4 justify-center">
                  {/* Laptop Image */}
                  <img
                    src={project.desktopImg}
                    alt={`${project.name} Desktop`}
                    className="w-1/2 "
                  />
                </div>
                <div className="mt-4">
                  {project.technology?.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-center gap-2 flex-wrap mb-1">
                        {tech.title.map((t, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 shadow-lg text-primary border-3 border-primary  px-3 py-1 rounded-xl"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm py-2 text-gray-600">{tech.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
                  >
                    Preview Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
