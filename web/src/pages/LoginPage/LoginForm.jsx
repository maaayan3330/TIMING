import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <section className="login-form-side">
      <div className="login-card">
        <div className="login-card-header">
          <p className="login-mini-logo">TIMING</p>

          <h2 className="login-title">התחברות</h2>

          <p className="login-subtitle">
            ברוכה הבאה חזרה. התחברי כדי לנהל את המוצרים שלך ולקבל התראות.
          </p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label>אימייל</label>
            <input type="email" placeholder="הכניסי כתובת אימייל" />
          </div>

          <div className="form-group">
            <div className="password-row">
              <label>סיסמה</label>
              <Link to="/forgot-password" className="forgot-link">
                שכחתי סיסמה
              </Link>
            </div>

            <input type="password" placeholder="הכניסי סיסמה" />
          </div>

          <button className="login-btn">התחברות</button>
        </form>

        <p className="signup-text">
          אין לך חשבון?{" "}
          <Link to="/signup" className="signup-link">
            להרשמה
          </Link>
        </p>
      </div>
    </section>
  );
}