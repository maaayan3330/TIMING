import "./RegistrationPage.css";
import RegistrationBrand from "./RegistrationBrand";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationPage() {
  return (
    <div dir="rtl" className="registration-page">
      <div className="registration-layout">
        <RegistrationBrand />
        <RegistrationForm />
      </div>
    </div>
  );
}