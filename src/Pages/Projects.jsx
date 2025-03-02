import { motion } from "framer-motion";
import flasStore from "../assets/flasStore.png";
import EliteRoadWorks from "../assets/EliteRoadWorks.png";
import albatross from "../assets/albatross.png";

const projects = {
  //   static: [
  //     {
  //       name: "Flas Store",
  //       desktopImg: "/assets/flas-desktop.png",
  //       mobileImg: "/assets/flas-mobile.png",
  //       previewLink: "https://flasstore.com",
  //     },
  //     {
  //       name: "Design with Sal",
  //       desktopImg: "/assets/designwithsal-desktop.png",
  //       mobileImg: "/assets/designwithsal-mobile.png",
  //       previewLink: "https://designwithsal.com",
  //     },
  //   ],
  dynamic: [
    {
      name: "Elite Road Works",
      desktopImg: EliteRoadWorks,
      previewLink: "https://eliteroadworks.com",
    },
    {
      name: "Albatross Solutions",
      desktopImg: albatross,
      previewLink: "https://albatross-sol.com",
    },
  ],
  shopify: [
    {
      name: "Flas Store",
      desktopImg: flasStore,
      previewLink: "https://shopflas.com",
    },
  ],
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 px-6 bg-white text-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Portfolio / Experience
        </h2>

        {/* Static Websites Section */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Static Websites</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.static.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
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
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Dynamic Websites Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Dynamic Websites</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.dynamic.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Shopify Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 mt-10">Shopfiy Stores</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.shopify.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
