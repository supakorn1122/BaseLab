import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="brand-logo">
            01
          </div>

          <div>
            <strong>BaseLab</strong>

            <p>
              เรียนรู้ระบบเลขฐาน
              ผ่านเครื่องมือและบทความ
            </p>
          </div>

        </div>

        <div className="footer-links">

          <h4>เมนู</h4>

          <Link to="/">
            ตัวแปลงเลขฐาน
          </Link>

          <Link to="/articles">
            บทความ
          </Link>

          <Link to="/about">
            เกี่ยวกับเว็บไซต์
          </Link>

        </div>

        <div className="footer-links">

          <h4>เลขฐาน</h4>

          <span>Binary · ฐาน 2</span>
          <span>Octal · ฐาน 8</span>
          <span>Decimal · ฐาน 10</span>
          <span>Hexadecimal · ฐาน 16</span>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 BaseLab · Number System Learning
      </div>

    </footer>
  );
}

export default Footer;