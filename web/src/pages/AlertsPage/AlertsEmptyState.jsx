export default function AlertsEmptyState() {
  return (
    <section className="alerts-empty-state">
      <div className="alerts-empty-icon">🔕</div>

      <h2 className="alerts-empty-title">אין התראות פעילות</h2>

      <p className="alerts-empty-text">
        הוסף מוצרים עם מחיר יעד כדי לקבל התראות
      </p>

      <button className="alerts-primary-btn">הוסף מוצר ראשון</button>
    </section>
  );
}