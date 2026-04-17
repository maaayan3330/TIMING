import { Bell } from "lucide-react";

export default function AlertsHeader() {
  return (
    <div className="alerts-header">
      <div className="alerts-title-row">
        <h1 className="alerts-title">התראות</h1>
        <Bell size={30} className="alerts-title-icon" />
      </div>

      <p className="alerts-subtitle">
        מוצרים שהגיעו ליעד ומוצרים במעקב
      </p>
    </div>
  );
}