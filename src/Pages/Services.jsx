import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    icon: <Icon icon="fa-solid:code" width="40" height="40" />,
    description:
      "Custom websites using modern technologies. Specialized in both static and dynamic websites with responsive design. From simple business sites to complex web applications.",
  },
  {
    id: 2,
    title: "Shopify Development",
    icon: <Icon icon="fa-brands:shopify" width="40" height="40" />,
    description:
      "Full-service Shopify solutions including store setup, theme customization, and maintenance. Expert product listing, inventory management, and payment gateway integration.",
  },
  {
    id: 4,
    title: "Wordpress Website Development",
    icon: <Icon icon="fa-brands:wordpress" width="40" height="40" />,
    description:
      "Full-service WordPress solutions including custom themes, plugin setup, and performance optimization. Expert in Elementor, Astra, and WooCommerce for responsive, user-friendly websites.",
  },
  {
    id: 5,
    title: "Technical Support",
    icon: <Icon icon="fa-solid:bug" width="40" height="40" />,
    description:
      "Expert troubleshooting and bug fixing for websites. Quick resolution of performance issues and broken functionality. Regular maintenance to keep your website running smoothly.",
  },
];

const floatingDots = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  style: {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  },
}));

const Services = () => {
  return (
    <div
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center bg-darkBg overflow-hidden px-4 py-8 md:py-16"
    >
      <h2 className="text-4xl sm:text-5xl md:text-[48px] font-bold text-white !mb-8 sm:mb-6">
        Services
      </h2>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: dot.id * 0.2,
            }}
            style={dot.style}
          />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl mx-auto px-4 md:px-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary/50 hover:border-primary transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-primary text-3xl md:text-4xl mb-3 md:mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-darkText">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
