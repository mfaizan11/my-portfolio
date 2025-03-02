import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import About from "./Pages/About";
import Services from "./pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
