import styles from "./about.module.css";

export const AboutKz = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/about-image.png"
        alt="About"
        className={styles.aboutImage}
      />
      <div className={styles.aboutTextDate}>
        <p className={styles.text}>Той салтанаты:</p>
        <div className={styles.dateContainer}>
          <p className={styles.date}>29 қыркүйек 2024</p>
          <p className={styles.time}>18:00</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>Мекен-жайымыз:</p>
        <p className={styles.text}>Қызылорда қаласы,</p>
        <p className={styles.text}>Султана Бейбарса, 2</p>
        <p className={styles.text1}>"Monaco"</p>
        <p className={styles.text}>мейрамханасы</p>
      </div>
      <div className={styles.mapText}>
        <p className={styles.text2}>сіздерге ыңғайлы болуы үшін</p>
        <p className={styles.text2}>төмендегі картаны </p>
        <p className={styles.text2}>қолдануыңызды сұраймыз:</p>
      </div>

      <a href="https://2gis.kz/kyzylorda/geo/70000001063257302">
        <button className={styles.gis}>
          <p className={styles.text}>2GIS</p>
        </button>
      </a>
    </div>
  );
};
