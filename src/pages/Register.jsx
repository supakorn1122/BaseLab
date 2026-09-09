import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const roles = [
  { value: "teacher", label: "ครู", detail: "สำหรับผู้สอนและผู้ดูแลเนื้อหาชั้นเรียน" },
  { value: "student", label: "นักเรียน", detail: "สำหรับผู้เรียนที่ใช้งานบทเรียน" },
  { value: "admin", label: "แอดมิน", detail: "สิทธิ์นี้กำหนดโดยผู้ดูแลระบบเท่านั้น" },
];

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (role === "admin") {
      setIsError(true);
      setMessage("บัญชีแอดมินต้องได้รับการกำหนดสิทธิ์โดยผู้ดูแลระบบ");
      return;
    }
    if (!supabase) {
      setIsError(true);
      setMessage("ยังไม่ได้ตั้งค่า Supabase กรุณาเพิ่มค่าในไฟล์ .env");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name, role } },
    });
    setLoading(false);

    if (error) {
      setIsError(true);
      setMessage(error.message);
      return;
    }

    setIsError(false);
    setMessage("สมัครสมาชิกสำเร็จ กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี");
  };

  return (
    <main className="auth-page register-page">
      <section className="auth-card" aria-labelledby="register-title">
        <div className="auth-mark">01</div>
        <p className="auth-eyebrow">CREATE ACCOUNT</p>
        <h1 id="register-title">สร้างบัญชีใหม่</h1>
        <p className="auth-intro">เลือกบทบาทที่ตรงกับการใช้งานของคุณ</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            ชื่อที่แสดง
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="ชื่อ - นามสกุล" autoComplete="name" required />
          </label>
          <label>
            อีเมล
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required />
          </label>
          <label>
            รหัสผ่าน
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="อย่างน้อย 6 ตัวอักษร" minLength="6" autoComplete="new-password" required />
          </label>

          <fieldset className="role-picker">
            <legend>บทบาท</legend>
            <div className="role-options">
              {roles.map((item) => (
                <label className={`role-option ${role === item.value ? "selected" : ""}`} key={item.value}>
                  <input type="radio" name="role" value={item.value} checked={role === item.value} onChange={() => setRole(item.value)} />
                  <span><strong>{item.label}</strong><small>{item.detail}</small></span>
                </label>
              ))}
            </div>
          </fieldset>

          {message && <p className={`auth-message ${isError ? "error" : "success"}`} role="alert">{message}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "กำลังสร้างบัญชี..." : "สมัครสมาชิก"}
          </button>
        </form>

        <p className="auth-switch">มีบัญชีอยู่แล้ว? <Link to="/login">เข้าสู่ระบบ</Link></p>
      </section>
    </main>
  );
}

export default Register;
