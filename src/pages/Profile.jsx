import { Link, Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const roleLabels = {
  teacher: { label: "ครู", description: "บัญชีผู้สอนและผู้ดูแลเนื้อหาชั้นเรียน", icon: "👩‍🏫" },
  student: { label: "นักเรียน", description: "บัญชีผู้เรียนในระบบ BaseLab", icon: "🎓" },
  admin: { label: "แอดมิน", description: "บัญชีผู้ดูแลระบบ", icon: "🛡️" },
};

function Profile({ user, profile }) {
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" replace />;

  const displayName = profile?.full_name || user.user_metadata?.full_name || user.email?.split("@")[0] || "ผู้ใช้งาน";
  const role = roleLabels[profile?.role] || { label: "สมาชิก", description: "บัญชีผู้ใช้งาน BaseLab", icon: "✨" };

  const handleSignOut = async () => {
    if (supabase) await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <main className="profile-page">
      <section className="profile-card" aria-labelledby="profile-title">
        <div className="profile-cover" />
        <div className="profile-content">
          <div className="profile-avatar" aria-hidden="true">{displayName.charAt(0).toUpperCase()}</div>
          <span className="profile-role-icon" aria-hidden="true">{role.icon}</span>
          <p className="auth-eyebrow">MY BASELAB ACCOUNT</p>
          <h1 id="profile-title">{displayName}</h1>
          <p className="profile-email">{user.email}</p>

          <div className="profile-role-card">
            <span>บทบาทในระบบ</span>
            <strong>{role.label}</strong>
            <small>{role.description}</small>
          </div>

          <div className="profile-meta">
            <div><span>สถานะบัญชี</span><strong>ใช้งานอยู่</strong></div>
            <div><span>อีเมลยืนยันแล้ว</span><strong>{user.email_confirmed_at ? "ยืนยันแล้ว" : "รอยืนยัน"}</strong></div>
          </div>

          <div className="profile-actions">
            <Link to="/" className="profile-home-link">กลับหน้าหลัก</Link>
            <button className="profile-sign-out" onClick={handleSignOut}>ออกจากระบบ</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
