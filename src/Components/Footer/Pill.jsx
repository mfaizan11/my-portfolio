import { useState, useEffect } from "react";

const AvailabilityPill = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // pill will be hidden when footer is visible
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        // Trigger when footer starts entering viewport
        rootMargin: "0px 0px 0px 0px",
        threshold: 0
      }
    );

    observer.observe(footer);

    // Cleanup
    return () => {
      observer.disconnect();
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
      <a 
        href="https://wa.me/923066864003?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%20Can%20we%20connect%3F" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-medium text-[1.2vh] md:text-sm"
      >
        Available for work
      </a>
    </div>
  );
};

export default AvailabilityPill;