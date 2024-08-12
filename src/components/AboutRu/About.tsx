import styles from "./about.module.css";

export const AboutRu = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/about-image.png"
        alt="About"
        className={styles.aboutImage}
      />
      <div className={styles.aboutTextDate}>
        <p className={styles.text}>Свадебная церемония:</p>
        <div className={styles.dateContainer}>
          <p className={styles.date}>29 сентября 2024</p>
          <p className={styles.time}>18:00</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>Наш адрес:</p>
        <p className={styles.text}>город Кызылорда,</p>
        <p className={styles.text}>Султана Бейбарса, 2</p>
        <p className={styles.text}>ресторан</p>
        <p className={styles.text1}>"Monaco"</p>
      </div>
      <div className={styles.mapText}>
        <p className={styles.text2}>Для вашего удобства</p>
        <p className={styles.text2}>воспользуйтесь картой ниже:</p>
      </div>
      <button className={styles.gis}>
        <a className={styles.text} href="https://2gis.kz/kyzylorda/geo/70000001063257302">2GIS</a>
      </button>
    </div>
  );
};
