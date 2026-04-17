import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./Home.module.css";
import StatsRow from "./StatsRow";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>TIMING</h1>

      <p dir="ltr" className={styles.subtitle}>
        Smart shopping, perfect timing.
      </p>

      <div className={styles.buttons}>
        <Link to="/add-item" className={styles.primaryButton}>
          הוסף מוצר למעקב
          <ArrowLeft size={18} />
        </Link>

        <Link to="/my-items" className={styles.secondaryButton}>
          הפריטים שלי
        </Link>
      </div>

      <StatsRow />
    </section>
  );
}