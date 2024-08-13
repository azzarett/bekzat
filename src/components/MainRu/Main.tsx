import styles from "./main.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const MainRu = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>дорогие гости,</p>
        <p className={styles.text}>братья и сестры,</p>
        <p className={styles.text}>родственники, друзья </p>
        <p className={styles.text}>и коллеги!</p>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
        <p className={styles.text}>Приглашаем Вас быть</p>
        <p className={styles.text}>почетным гостем</p>
        <p className={styles.text}>на свадьбе наших детей</p>
        <span className={styles.nameContainer}>
          <p className={styles.name1}>Бекзата и</p>
          <p className={styles.name2}>Фариды!</p>
        </span>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
        <p className={styles.text}>виновники торжества: </p>
        <span className={styles.nameContainer}>
          <p className={styles.name}>Қайрат - Виктория</p>
        </span>
      </div>
    </div>
  );
};
