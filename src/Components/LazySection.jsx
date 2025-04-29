import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const LazySection = ({ load, fallback = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? load() : fallback}</div>;
};
LazySection.propTypes = {
  load: PropTypes.func.isRequired,
  fallback: PropTypes.node,
};

export default LazySection;

