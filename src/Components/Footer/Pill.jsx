import { useState, useEffect } from "react";

const AvailabilityPill = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to check if footer is visible
    const checkFooterVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If footer is in viewport, hide the pill
      if (footerRect.top < windowHeight && footerRect.bottom > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Check visibility initially
    checkFooterVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", checkFooterVisibility);

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkFooterVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 z-[1000] right-4 flex items-center gap-2 bg-black bg-opacity-70 backdrop-blur-sm text-white py-2 px-4 rounded-full border border-green-500 shadow-lg transition-all duration-300 hover:shadow-green-500/30 hover:border-green-400 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Glowing dot with pulse animation */}
      <div className="relative flex items-center justify-center">
        <div className="w-3 h-3 bg-green-500 rounded-full z-10"></div>
        <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute w-5 h-5 bg-green-400 rounded-full opacity-20"></div>
      </div>

      {/* Status text */}
      <a href="#contact" className="font-medium text-[1.2vh] md:text-sm ">
        Available for work
      </a>
    </div>
  );
};

export default AvailabilityPill;
