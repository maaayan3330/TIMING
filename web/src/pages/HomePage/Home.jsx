import Navbar from "../Navbar";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f3ea] text-gray-900">
      <Navbar />

      <main className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6">
        <section className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            Smart Price Tracking
          </p>

          <h1 className="mb-6 text-6xl font-black tracking-[0.18em] text-red-600 md:text-8xl">
            TIMING
          </h1>

          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-gray-700 md:text-2xl">
            Track prices. Buy at the right moment.
          </p>
        </section>
      </main>
    </div>
  );
}
