export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-card-top">
        <div>
          <h3>{item.name}</h3>
          <p className="item-store">{item.store}</p>
        </div>

        <span className="item-category">{item.category}</span>
      </div>

      <div className="item-card-bottom">
        <div>
          <p className="price-label">מחיר נוכחי</p>
          <p className="item-price">{item.price}</p>
        </div>

        <button className="details-btn">לפרטים</button>
      </div>
    </article>
  );
}