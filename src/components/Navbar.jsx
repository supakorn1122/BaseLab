import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">

      <div className="nav-container">

        <Link to="/" className="brand">

          <div className="brand-logo">
            01
          </div>

          <div>
            <strong>BaseLab</strong>
            <span>Number System</span>
          </div>

        </Link>

        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            ตัวแปลงเลขฐาน
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            บทความ
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            เกี่ยวกับเรา
          </NavLink>

        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;