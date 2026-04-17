import { Link2, BellRing, Target } from "lucide-react";

export default function AddItemInfoCard() {
  return (
    <aside className="add-item-info-card">
      <p className="add-item-info-badge">How it works</p>

      <h1 className="add-item-info-title">הוספת מוצר למעקב</h1>

      <p className="add-item-info-text">
        הוסיפי קישור למוצר, הגדירי מחיר יעד, ו־TIMING יעדכן אותך ברגע
        שהמחיר יהיה שווה קנייה.
      </p>

      <div className="add-item-info-steps">
        <div className="add-item-info-step">
          <div className="add-item-step-icon">
            <Link2 size={18} />
          </div>
          <div>
            <h3>מוסיפים קישור</h3>
            <p>הדביקי קישור לעמוד המוצר מהחנות שבה מצאת אותו.</p>
          </div>
        </div>

        <div className="add-item-info-step">
          <div className="add-item-step-icon">
            <Target size={18} />
          </div>
          <div>
            <h3>מגדירים מחיר יעד</h3>
            <p>בחרי את המחיר שבו תרצי לקבל התראה על ירידה.</p>
          </div>
        </div>

        <div className="add-item-info-step">
          <div className="add-item-step-icon">
            <BellRing size={18} />
          </div>
          <div>
            <h3>מקבלים התראה</h3>
            <p>כשהמחיר ירד, המוצר יופיע אצלך בהתראות.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}