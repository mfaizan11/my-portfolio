import { lazy } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import LazySection from "./Components/LazySection";
import "./index.css";

// Lazy imports
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Projects = lazy(() => import("./Pages/Projects"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

      <LazySection load={() => <About />} fallback={<div className="text-white p-10">Loading About...</div>} />
      <LazySection load={() => <Services />} fallback={<div className="text-white p-10">Loading Services...</div>} />
      <LazySection load={() => <Projects />} fallback={<div className="text-white p-10">Loading Projects...</div>} />
      <LazySection load={() => <Contact />} fallback={<div className="text-white p-10">Loading Contact...</div>} />

      <Footer />
    </>
  );
};

export default App;
