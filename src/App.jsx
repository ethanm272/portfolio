import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
