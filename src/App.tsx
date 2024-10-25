import { Routes, Route } from "react-router-dom";
import Homepage from "./components/home-page";
import About from "./components/about-us";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
