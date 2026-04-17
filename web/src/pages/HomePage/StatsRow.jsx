import styles from "./Home.module.css";

export default function StatsRow() {
  return (
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
  );
}