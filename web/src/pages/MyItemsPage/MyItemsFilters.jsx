import { Search, Store, Tags } from "lucide-react";

export default function MyItemsFilters({
  searchTerm,
  setSearchTerm,
  selectedStore,
  setSelectedStore,
  selectedCategory,
  setSelectedCategory,
  stores,
  categories,
}) {
  return (
    <section className="filters-box">
      <div className="filters-grid">
        <div className="input-wrap search-wrap">
          <Search size={18} className="input-icon" />
          <input
            type="text"
            placeholder="חפש מוצר או חנות..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="input-wrap">
          <Store size={18} className="input-icon" />
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="filter-input"
          >
            {stores.map((store) => (
              <option key={store} value={store}>
                {store}
              </option>
            ))}
          </select>
        </div>

        <div className="input-wrap">
          <Tags size={18} className="input-icon" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-input"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}