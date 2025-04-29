import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import "./index.css";

// Lazy load only heavy sections
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Projects = lazy(() => import("./Pages/Projects"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Suspense fallback={<div className="text-white min-h-screen flex justify-center items-center">Loading...</div>}>
        <About />
        <Services />
        <Projects />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
