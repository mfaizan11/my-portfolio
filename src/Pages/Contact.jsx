import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const response = await fetch("https://formspree.io/f/xjkgdwjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
        setTimeout(() => setSubmitted(false), 3000);
      }
    }
  };
  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-darkBg overflow-hidden px-4"
    >
      {/* Glassmorphic Contact Form */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-3xl p-6 sm:p-8 md:p-10 lg:p-12 min-h-[50vh] sm:min-h-[60vh] rounded-3xl shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-4 flex flex-col items-center space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Contact Form Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-darkText text-center"
          variants={fadeInUp}
        >
          Feel free to drop a message. I will get back to you soon!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
          variants={fadeInUp}
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white border  border-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Message Input */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-accent transition flex items-center justify-center gap-2"
          >
            Send Message
            <FaPaperPlane />
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {submitted && (
          <motion.p
            className="text-green-400 font-semibold text-sm sm:text-base"
            variants={fadeInUp}
          >
            ✅ Message Sent Successfully!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
