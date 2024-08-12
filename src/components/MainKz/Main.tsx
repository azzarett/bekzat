import styles from "./main.module.css";

export const MainKz = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p className={styles.text}>құрметті қонақтар,</p>
        <p className={styles.text}>ағайын-туыс, бауырлар,</p>
        <p className={styles.text}>құда-жекжаттар, достар </p>
        <p className={styles.text}>және әріптестер!</p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>сіздерді балаларымыз</p>
        <span className={styles.nameContainer}>
          <p className={styles.name1}>Бекзат пен</p>
          <p className={styles.name2}>Фарида</p>
        </span>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>үйлену тойының</p>
        <p className={styles.text}>қадірлі қонағы болуға</p>
        <p className={styles.text}>шақырамыз!</p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>той иелері:</p>
        <span className={styles.nameContainer}>
          <p className={styles.name}>Қайрат - Виктория</p>
        </span>
      </div>
    </div>
  );
};
