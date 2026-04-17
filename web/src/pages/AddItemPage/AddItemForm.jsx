import { useState } from "react";

const categories = [
  "בגדים",
  "נעליים",
  "חשמל",
  "טיפוח",
  "בית",
  "אחר",
];

export default function AddItemForm() {
  const [formData, setFormData] = useState({
    productUrl: "",
    productName: "",
    store: "",
    category: "",
    currentPrice: "",
    targetPrice: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Submitted item:", formData);
  }

  return (
    <section className="add-item-form-section">
      <div className="add-item-form-card">
        <div className="add-item-form-header">
          <p className="add-item-mini-logo">TIMING</p>
          <h2 className="add-item-form-title">התחילי מעקב חדש</h2>
          <p className="add-item-form-subtitle">
            מלאי את פרטי המוצר כדי שנוכל לעקוב אחריו עבורך.
          </p>
        </div>

        <form className="add-item-form" onSubmit={handleSubmit}>
          <div className="add-item-form-group">
            <label htmlFor="productUrl">קישור למוצר</label>
            <input
              id="productUrl"
              name="productUrl"
              type="url"
              placeholder="הדביקי כאן קישור למוצר"
              value={formData.productUrl}
              onChange={handleChange}
            />
          </div>

          <div className="add-item-form-group">
            <label htmlFor="productName">שם המוצר</label>
            <input
              id="productName"
              name="productName"
              type="text"
              placeholder="למשל: Nike Air Force 1"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>

          <div className="add-item-form-row">
            <div className="add-item-form-group">
              <label htmlFor="store">חנות</label>
              <input
                id="store"
                name="store"
                type="text"
                placeholder="למשל: Terminal X"
                value={formData.store}
                onChange={handleChange}
              />
            </div>

            <div className="add-item-form-group">
              <label htmlFor="category">קטגוריה</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">בחרי קטגוריה</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="add-item-form-row">
            <div className="add-item-form-group">
              <label htmlFor="currentPrice">מחיר נוכחי</label>
              <input
                id="currentPrice"
                name="currentPrice"
                type="number"
                placeholder="למשל: 399"
                value={formData.currentPrice}
                onChange={handleChange}
              />
            </div>

            <div className="add-item-form-group">
              <label htmlFor="targetPrice">מחיר יעד</label>
              <input
                id="targetPrice"
                name="targetPrice"
                type="number"
                placeholder="למשל: 299"
                value={formData.targetPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="add-item-submit-btn">
            התחל מעקב
          </button>
        </form>
      </div>
    </section>
  );
}