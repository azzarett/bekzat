import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text} data-aos="fade-down">Қуанышымызға</p>
          <p className={styles.text} data-aos="fade-down">ортақ болыңыздар!</p>
        </div>
        <img
          className={styles.footerImage}
          src="/assets/footer.jpg"
          alt="image"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Link onClick={scrollToTop} to="/" className={styles.link}>
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
