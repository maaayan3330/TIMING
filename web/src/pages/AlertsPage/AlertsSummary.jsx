import { Bell } from "lucide-react";

export default function AlertsSummary({ alertsCount }) {
  return (
    <section className="alerts-summary">
      <div className="alerts-summary-badge">{alertsCount}</div>

      <div className="alerts-summary-text">
        <span>במעקב</span>
        <Bell size={20} className="alerts-summary-icon" />
      </div>
    </section>
  );
}