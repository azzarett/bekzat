import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.flowersContainer}>
        <img className={styles.flower1} src="/assets/flower.png" alt="flower" />
        <img className={styles.flower2} src="/assets/flower.png" alt="flower" />
        <img className={styles.flower3} src="/assets/flower.png" alt="flower" />
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
        />
        <p className={styles.name}>Бекзат Фарида</p>
      </div>
      <div className={styles.dateContainer}>
        <p className={styles.date}>⎯⎯⎯⎯ 29.09.2024 ⎯⎯⎯⎯</p>
      </div>
    </header>
  );
};
