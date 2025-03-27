import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Projects } from "./Pages/Projects/Projects";
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
