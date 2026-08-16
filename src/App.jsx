import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>

      <div
        className={
          darkMode
            ? "app dark"
            : "app light"
        }
      >

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/articles"
            element={<Articles />}
          />

          <Route
            path="/articles/:slug"
            element={<ArticleDetail />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;