import Navbar from "../Navbar";
import "./AddItemPage.css";
import AddItemInfoCard from "./AddItemInfoCard";
import AddItemForm from "./AddItemForm";

export default function AddItem() {
  return (
    <div dir="rtl" className="add-item-page">
      <Navbar />

      <main className="add-item-main">
        <div className="add-item-layout">
          <AddItemInfoCard />
          <AddItemForm />
        </div>
      </main>
    </div>
  );
}