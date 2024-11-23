import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

export default function App() {
  return (
    <>
      <div className="nav justify-content-center">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
