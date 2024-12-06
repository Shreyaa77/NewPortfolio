import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skill";
import PhotoGallery from "./Components/PhotoGallery";
import VideoGallery from "./Components/VideoGallery.";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
