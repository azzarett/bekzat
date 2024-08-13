import styles from "./about.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutKz = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/about-image.png"
        alt="About"
        className={styles.aboutImage}
      />
      <div className={styles.aboutTextDate} data-aos="fade-down">
        <p className={styles.text}>Той салтанаты:</p>
        <div className={styles.dateContainer}>
          <p className={styles.date}>29 қыркүйек 2024</p>
          <p className={styles.time}>18:00</p>
        </div>
      </div>
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>Мекен-жайымыз:</p>
        <p className={styles.text}>Қызылорда қаласы,</p>
        <p className={styles.text}>Султана Бейбарса, 2</p>
        <p className={styles.text1}>"Monaco"</p>
        <p className={styles.text}>мейрамханасы</p>
      </div>
      <div className={styles.mapText} data-aos="fade-down">
        <p className={styles.text2}>сіздерге ыңғайлы болуы үшін</p>
        <p className={styles.text2}>төмендегі картаны </p>
        <p className={styles.text2}>қолдануыңызды сұраймыз:</p>
      </div>

      <a href="https://2gis.kz/kyzylorda/geo/70000001063257302" data-aos="fade-down">
        <button className={styles.gis}>
          <p className={styles.text}>2GIS</p>
        </button>
      </a>
    </div>
  );
};
