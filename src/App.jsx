import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Issues from "./Pages/Issues";
import Certifications from "./Pages/Certifications";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

      <About />

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
