import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

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

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>24/7</p>
              <p className={styles.statText}>מעקב רציף</p>
            </div>

            <div className={styles.statItem}>
              <p className={styles.statNumber}>100%</p>
              <p className={styles.statText}>חינם למשתמש</p>
            </div>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <p className={styles.stepsLabel}>איך זה עובד</p>

          <div className={styles.stepsContainer}>
            {steps.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={styles.step}
              >
                <span className={styles.stepNumber}>{index + 1}</span>
                <p className={styles.stepText}>{text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.bottomCta}>
            <Link to="/registration" className={styles.ctaButton}>
              רוצה? הירשמי עכשיו
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}