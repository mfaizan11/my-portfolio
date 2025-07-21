import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Issues from "./Pages/Issues";
import Certifications from "./Pages/Certifications";
import Contact from "./Pages/Contact";

import Skeleton from "./Components/Skeleton"; 
import "./index.css";

// Lazy load About only
const About = lazy(() => import("./Pages/About"));

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

      {/* Lazy About section with skeleton fallback */}
      <Suspense fallback={<Skeleton />}>
        <About />
      </Suspense>

      {/* Direct imports, no lazy */}
      <Services />
      <Projects />
      <Issues />
      <Certifications />
      <Contact />

      <Footer />
    </>
  );
};

export default App;
