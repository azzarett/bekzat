import styles from "./about.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutRu = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/about-image.png"
        alt="About"
        className={styles.aboutImage}
        data-aos="fade-down"
      />
      <div className={styles.aboutTextDate} data-aos="fade-down">
        <p className={styles.text}>Свадебная церемония:</p>
        <div className={styles.dateContainer}>
          <p className={styles.date}>29 сентября 2024</p>
          <p className={styles.time}>18:00</p>
        </div>
      </div>
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>Наш адрес:</p>
        <p className={styles.text}>город Кызылорда,</p>
        <p className={styles.text}>Султана Бейбарса, 2</p>
        <p className={styles.text}>ресторан</p>
        <p className={styles.text1}>"Monaco"</p>
      </div>
      <div className={styles.mapText} data-aos="fade-down">
        <p className={styles.text2}>Для вашего удобства</p>
        <p className={styles.text2}>воспользуйтесь картой ниже:</p>
      </div>
      <a href="https://2gis.kz/kyzylorda/geo/70000001063257302" data-aos="fade-down">
        <button className={styles.gis}>
          <p className={styles.text}>2GIS</p>
        </button>
      </a>
    </div>
  );
};
