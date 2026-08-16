import { Link } from "react-router-dom";

function About() {
  return (
    <main>

      <section className="page-hero">

        <div className="hero-badge">
          ABOUT BASELAB
        </div>

        <h1>
          เรียนรู้เลขฐาน
          <span>ให้เข้าใจง่าย</span>
        </h1>

        <p>
          เว็บไซต์สำหรับเรียนรู้และทดลอง
          ระบบเลขฐานในรูปแบบที่เข้าใจง่าย
        </p>

      </section>

      <section className="about-content">

        <div className="about-card main-about">

          <div className="big-icon">
            🔢
          </div>

          <h2>
            BaseLab คืออะไร?
          </h2>

          <p>
            BaseLab เป็นเว็บไซต์ที่สร้างขึ้นเพื่อช่วยให้
            นักเรียน นักศึกษา และผู้เริ่มต้นเขียนโปรแกรม
            เข้าใจเรื่องระบบเลขฐานได้ง่ายขึ้น
          </p>

          <p>
            ภายในเว็บไซต์มีทั้งเครื่องมือแปลงเลขฐาน
            และบทความสำหรับเรียนรู้ตั้งแต่พื้นฐาน
            ไปจนถึงการประยุกต์ใช้กับ Programming
          </p>

        </div>

        <div className="about-features">

          <div className="about-card">

            <span>01</span>

            <h3>
              Converter
            </h3>

            <p>
              แปลงเลขฐาน 2, 8, 10 และ 16
              ได้ทันที
            </p>

          </div>

          <div className="about-card">

            <span>02</span>

            <h3>
              Articles
            </h3>

            <p>
              บทความความรู้เกี่ยวกับระบบเลขฐาน
              และ Computer
            </p>

          </div>

          <div className="about-card">

            <span>03</span>

            <h3>
              Learning
            </h3>

            <p>
              อธิบายแนวคิดพร้อมตัวอย่าง
              ให้เข้าใจได้ง่าย
            </p>

          </div>

          <div className="about-card">

            <span>04</span>

            <h3>
              Responsive
            </h3>

            <p>
              ใช้งานได้ทั้งคอมพิวเตอร์
              Tablet และโทรศัพท์
            </p>

          </div>

        </div>

      </section>

      <section className="about-cta">

        <h2>
          พร้อมทดลองหรือยัง?
        </h2>

        <p>
          ลองแปลงเลขฐานด้วยเครื่องมือของเรา
        </p>

        <Link
          to="/"
          className="primary-button"
        >
          เปิดตัวแปลงเลขฐาน →
        </Link>

      </section>

    </main>
  );
}

export default About;