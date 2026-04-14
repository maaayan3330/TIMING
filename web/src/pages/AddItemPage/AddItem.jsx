import Navbar from "../Navbar";

export default function AddItem() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f3ea] text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-4xl font-black text-red-600">
          הוספת פריט
        </h1>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <input
            type="text"
            placeholder="שם המוצר"
            className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-red-400"
          />

          <input
            type="text"
            placeholder="קישור למוצר"
            className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-red-400"
          />

          <input
            type="number"
            placeholder="מחיר יעד"
            className="mb-6 w-full rounded-lg border p-3 outline-none focus:border-red-400"
          />

          <button className="w-full rounded-full bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
            הוסף פריט
          </button>
        </div>
      </main>
    </div>
  );
}