import { Plus } from "lucide-react";

export default function MyItemsHeader() {
  return (
    <div className="my-items-header">
      <div>
        <h1 className="my-items-title">הפריטים שלי</h1>
        <p className="my-items-subtitle">
          נהלי את כל המוצרים שאת עוקבת אחריהם במקום אחד
        </p>
      </div>

      <button className="add-item-btn">
        <Plus size={18} />
        הוסף מוצר
      </button>
    </div>
  );
}