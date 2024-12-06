
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Skills from "./Components/Skill";


function App() {
  return (<>
  <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skills />} />
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
