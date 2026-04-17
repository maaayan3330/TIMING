import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export default function StepsSection({ steps }) {
  return (
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
  );
}