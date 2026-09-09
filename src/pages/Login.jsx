import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setIsError(true);
      setMessage("ยังไม่ได้ตั้งค่า Supabase กรุณาเพิ่มค่าในไฟล์ .env");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setIsError(true);
      setMessage(error.message);
      return;
    }

    setIsError(false);
    setMessage("เข้าสู่ระบบสำเร็จ กำลังพาไปหน้าหลัก...");
    navigate("/");
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-mark">01</div>
        <p className="auth-eyebrow">BASELAB ACCOUNT</p>
        <h1 id="login-title">ยินดีต้อนรับกลับ</h1>
        <p className="auth-intro">เข้าสู่ระบบเพื่อใช้งานพื้นที่การเรียนรู้ของคุณ</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            อีเมล
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required />
          </label>
          <label>
            รหัสผ่าน
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="อย่างน้อย 6 ตัวอักษร" autoComplete="current-password" required />
          </label>

          {message && <p className={`auth-message ${isError ? "error" : "success"}`} role="alert">{message}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>

        <p className="auth-switch">ยังไม่มีบัญชี? <Link to="/register">สมัครสมาชิก</Link></p>
      </section>
    </main>
  );
}

export default Login;
