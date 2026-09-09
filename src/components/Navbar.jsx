import { Link, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Navbar({ darkMode, setDarkMode, user, profile }) {
  const navigate = useNavigate();
  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split("@")[0] || "ผู้ใช้งาน";
  const roleLabels = { teacher: "ครู", student: "นักเรียน", admin: "แอดมิน" };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    navigate("/");
  };

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

        <div className="nav-actions">
          {user ? (
            <div className="account-area">
              <div className="account-avatar" aria-hidden="true">
                {displayName.charAt(0).toUpperCase()}
              </div>
              <div className="account-details">
                <strong>{displayName}</strong>
                <span>{roleLabels[profile?.role] || "สมาชิก"}</span>
              </div>
              <button className="sign-out-button" onClick={handleSignOut}>ออกจากระบบ</button>
            </div>
          ) : (
            <div className="guest-actions">
              <Link to="/login" className="login-button">เข้าสู่ระบบ</Link>
              <Link to="/register" className="register-button">สมัครสมาชิก</Link>
            </div>
          )}

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="เปลี่ยนโหมดสี"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </div>

    </header>
  );
}

export default Navbar;
