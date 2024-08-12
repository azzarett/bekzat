import styles from "./main.module.css";

export const MainRu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p className={styles.text}>дорогие гости,</p>
        <p className={styles.text}>братья и сестры,</p>
        <p className={styles.text}>родственники, друзья </p>
        <p className={styles.text}>и коллеги!</p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>Приглашаем Вас быть</p>
        <p className={styles.text}>почетным гостем</p>
        <p className={styles.text}>на свадьбе наших детей</p>
        <span className={styles.nameContainer}>
          <p className={styles.name1}>Бекзата и</p>
          <p className={styles.name2}>Фариды!</p>
        </span>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>виновники торжества: </p>
        <span className={styles.nameContainer}>
          <p className={styles.name}>Қайрат - Виктория</p>
        </span>
      </div>
    </div>
  );
};
