import { useState } from "react";
import { Icon } from "@iconify/react";

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
      try {
        const response = await fetch("https://formspree.io/f/xjkgdwjd", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Formspree response:", data);

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          alert("Error submitting form: " + (data?.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div
      id="contact"
      className="relative min-h-[80vh] flex flex-col py-4 items-center justify-center bg-darkBg overflow-hidden px-4 pt-10"
    >
      <div className="relative bg-white/10 backdrop-blur-3xl p-6 sm:p-8 md:p-10 lg:p-12 min-h-[50vh] sm:min-h-[60vh] rounded-3xl shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-4 flex flex-col items-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Get in Touch
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center">
          Feel free to drop a message. I will get back to you soon!
        </p>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-white border-gray-300 bg-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white border border-white bg-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border text-white border-gray-300 bg-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-accent transition flex items-center justify-center gap-2"
          >
            Send Message
            <Icon icon="fa-solid:paper-plane" />
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 font-semibold text-sm sm:text-base">
            ✅ Message Sent Successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
