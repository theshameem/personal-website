import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectDetail from "./pages/Portfolio/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:id" element={<ProjectDetail />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
