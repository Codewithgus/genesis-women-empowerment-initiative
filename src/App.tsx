import { Routes, Route } from "react-router-dom";
import Homepage from "./components/home-page";
import About from "./components/about-us";
import Contact from "./components/contact";
import Donate from "./components/donate-form";
import Program from "./components/our-program";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-program" element={<Program />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
}

export default App;
