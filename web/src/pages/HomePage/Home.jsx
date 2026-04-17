import Navbar from "../Navbar";
import styles from "./Home.module.css";
import HeroSection from "./HeroSection";
import StepsSection from "./StepsSection";

const steps = [
  "מוסיפים מוצר שרוצים לעקוב אחריו",
  "TIMING עוקב אחרי המחיר לאורך הזמן",
  "ברגע שיש ירידה — מקבלים התראה למייל",
];

export default function Home() {
  return (
    <div dir="rtl" className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <HeroSection />
        <StepsSection steps={steps} />
      </main>
    </div>
  );
}