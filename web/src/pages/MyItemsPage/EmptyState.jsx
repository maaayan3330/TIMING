import { Plus } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="empty-state">
      <div className="empty-icon">🛍️</div>
      <h2>אין פריטים להצגה</h2>
      <p>
        עדיין לא הוספת מוצרים למעקב, או שאין תוצאות שמתאימות לסינון שבחרת.
      </p>

      <button className="add-item-btn">
        <Plus size={18} />
        הוסף מוצר ראשון
      </button>
    </section>
  );
}