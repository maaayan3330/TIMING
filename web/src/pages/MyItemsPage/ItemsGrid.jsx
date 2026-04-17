import ItemCard from "./ItemCard";

export default function ItemsGrid({ items }) {
  return (
    <section className="items-grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
}