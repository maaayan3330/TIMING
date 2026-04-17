import "./Login.css";
import LoginBrand from "./LoginBrand";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div dir="rtl" className="login-page">
      <div className="login-layout">
        <LoginBrand />
        <LoginForm />
      </div>
    </div>
  );
}