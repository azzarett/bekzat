import { useEffect } from "react";
import styles from "./header.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.flowersContainer}>
        <img
          className={styles.flower1}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
        <img
          className={styles.flower2}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
        <img
          className={styles.flower3}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
      </div>
      <img
        className={styles.headerImage}
        src="/assets/header.png"
        alt="header"
      />
      <div className={styles.nameContainer}>
        <img
          className={styles.nameImage}
          src="/assets/header-text.svg"
          alt="header-text"
          data-aos="fade-up"
        />
        <p className={styles.name}>Бекзат Фарида</p>
      </div>
      <div className={styles.dateContainer}>
        <p className={styles.date}>⎯⎯⎯⎯ 29.09.2024 ⎯⎯⎯⎯</p>
      </div>
    </header>
  );
};
