import Navbar from "../Navbar";
import "./AlertsPage.css";

import AlertsHeader from "./AlertsHeader";
import AlertsSummary from "./AlertsSummary";
import AlertsEmptyState from "./AlertsEmptyState";

export default function AlertsPage() {
  const alerts = [];

  return (
    <div dir="rtl" className="alerts-page">
      <Navbar />

      <main className="alerts-main">
        <AlertsHeader />
        <AlertsSummary alertsCount={alerts.length} />

        {alerts.length === 0 ? (
          <AlertsEmptyState />
        ) : (
          <section className="alerts-list">
            {/* כאן בעתיד נציג כרטיסי התראות */}
          </section>
        )}
      </main>
    </div>
  );
}