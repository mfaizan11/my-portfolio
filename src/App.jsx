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
const Issues = lazy(()=> import("./Pages/Issues"));
const Certifications = lazy(() => import("./Pages/Certifications"))
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

      <LazySection load={() => <About />} fallback={<div className="text-primary text-center p-10">Loading Sections...</div>} />
      <LazySection load={() => <Services />} fallback={<div className="text-primary p-10"></div>} />
      <LazySection load={() => <Projects />} fallback={<div className="text-primary p-10"></div>} />
      <LazySection load={() => <Issues/>} fallback={<div className="text-primary p-10"></div>} />
      <LazySection load={() => <Certifications />} fallback={<div className="text-primary p-10"></div>} />
      <LazySection load={() => <Contact />} fallback={<div className="text-primary p-10"></div>} />

      <Footer />
    </>
  );
};

export default App;
