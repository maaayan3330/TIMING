import Navbar from "../Navbar";

export default function MyItems() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f3ea] text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-black text-red-600">הפריטים שלי</h1>
        <p className="text-lg text-gray-700">
          כאן יוצגו כל המוצרים שהמשתמש עוקב אחריהם.
        </p>
      </main>
    </div>
  );
}
