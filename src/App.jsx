import { useEffect, useState } from "react";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import { supabase } from "./lib/supabase";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!supabase) return undefined;

    const loadProfile = async (currentUser) => {
      if (!currentUser) {
        setProfile(null);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", currentUser.id)
        .maybeSingle();

      setProfile(data ?? null);
    };

    const loadSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      await loadProfile(session?.user ?? null);
    };

    loadSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      loadProfile(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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
          user={user}
          profile={profile}
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

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
