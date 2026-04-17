import { useMemo, useState } from "react";
import Navbar from "../Navbar";
import "./MyItems.css";

import MyItemsHeader from "./MyItemsHeader";
import MyItemsFilters from "./MyItemsFilters";
import EmptyState from "./EmptyState";
import ItemsGrid from "./ItemsGrid";

const mockItems = [
  {
    id: 1,
    name: "Nike Air Force 1",
    store: "Terminal X",
    category: "נעליים",
    price: "₪399",
  },
  {
    id: 2,
    name: "ZARA Blazer",
    store: "ZARA",
    category: "בגדים",
    price: "₪279",
  },
];

export default function MyItems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState("כל החנויות");
  const [selectedCategory, setSelectedCategory] = useState("כל הקטגוריות");

  const stores = ["כל החנויות", ...new Set(mockItems.map((item) => item.store))];
  const categories = [
    "כל הקטגוריות",
    ...new Set(mockItems.map((item) => item.category)),
  ];

  const filteredItems = useMemo(() => {
    return mockItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.store.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStore =
        selectedStore === "כל החנויות" || item.store === selectedStore;

      const matchesCategory =
        selectedCategory === "כל הקטגוריות" ||
        item.category === selectedCategory;

      return matchesSearch && matchesStore && matchesCategory;
    });
  }, [searchTerm, selectedStore, selectedCategory]);

  return (
    <div dir="rtl" className="my-items-page">
      <Navbar />

      <main className="my-items-main">
        <MyItemsHeader />

        <MyItemsFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          stores={stores}
          categories={categories}
        />

        {filteredItems.length === 0 ? (
          <EmptyState />
        ) : (
          <ItemsGrid items={filteredItems} />
        )}
      </main>
    </div>
  );
}