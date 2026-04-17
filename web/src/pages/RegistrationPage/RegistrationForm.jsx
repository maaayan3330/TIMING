import { Link } from "react-router-dom";

export default function RegistrationForm() {
  return (
    <section className="registration-form-side">
      <div className="registration-card">
        <div className="registration-card-header">
          <p className="registration-mini-logo">TIMING</p>

          <h2 className="registration-title">הרשמה</h2>

          <p className="registration-subtitle">
            צרי חשבון חדש והתחילי לנהל את המוצרים שלך בצורה חכמה.
          </p>
        </div>

        <form className="registration-form">
          <div className="registration-form-row">
            <div className="registration-form-group">
              <label htmlFor="firstName">שם פרטי</label>
              <input
                id="firstName"
                type="text"
                placeholder="הכניסי שם פרטי"
              />
            </div>

            <div className="registration-form-group">
              <label htmlFor="lastName">שם משפחה</label>
              <input
                id="lastName"
                type="text"
                placeholder="הכניסי שם משפחה"
              />
            </div>
          </div>

          <div className="registration-form-group">
            <label htmlFor="email">אימייל</label>
            <input
              id="email"
              type="email"
              placeholder="הכניסי כתובת אימייל"
            />
          </div>

          <div className="registration-form-group">
            <label htmlFor="password">סיסמה</label>
            <input
              id="password"
              type="password"
              placeholder="צרי סיסמה"
            />
          </div>

          <div className="registration-form-group">
            <label htmlFor="confirmPassword">אימות סיסמה</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="הקלידי שוב את הסיסמה"
            />
          </div>

          <div className="registration-checkbox-row">
            <input id="terms" type="checkbox" />
            <label htmlFor="terms">
              אני מאשרת את <span>תנאי השימוש</span> ו־<span>מדיניות הפרטיות</span>
            </label>
          </div>

          <button type="submit" className="registration-btn">
            יצירת חשבון
          </button>
        </form>

        <p className="registration-login-text">
          כבר יש לך חשבון?{" "}
          <Link to="/login" className="registration-login-link">
            להתחברות
          </Link>
        </p>
      </div>
    </section>
  );
}