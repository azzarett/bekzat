import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>Қуанышымызға</p>
          <p className={styles.text}>ортақ болыңыздар!</p>
        </div>
        <img
          className={styles.footerImage}
          src="/assets/footer.jpg"
          alt="image"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Link onClick={scrollToTop} to="/kz" className={styles.link}>
          Kz
        </Link>
        <p className={styles.buttonStick}>|</p>
        <Link onClick={scrollToTop} to="/ru" className={styles.link}>
          Ru
        </Link>
      </div>
    </div>
  );
};
