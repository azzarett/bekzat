import styles from "./main.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const MainKz = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>құрметті қонақтар,</p>
        <p className={styles.text}>ағайын-туыс, бауырлар,</p>
        <p className={styles.text}>құда-жекжаттар, достар </p>
        <p className={styles.text}>және әріптестер!</p>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
        <p className={styles.text}>сіздерді балаларымыз</p>
        <span className={styles.nameContainer}>
          <p className={styles.name1}>Бекзат пен</p>
          <p className={styles.name2}>Фарида</p>
        </span>
      </div>
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>үйлену тойының</p>
        <p className={styles.text}>қадірлі қонағы болуға</p>
        <p className={styles.text}>шақырамыз!</p>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
        <p className={styles.text}>той иелері:</p>
        <span className={styles.nameContainer}>
          <p className={styles.name}>Қайрат - Виктория</p>
        </span>
      </div>
    </div>
  );
};
