import { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

export const FormKz = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      Name: name,
      Option: option,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/dd34df7a-cd34-46d8-a8db-420821cfe093",
        data
      )
      .then(() => {
        setName("");
        setOption("");
      });
  };

  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/form.jpeg"
        alt="form image"
        className={styles.formImage}
      />
      <div className={styles.textContainer}>
        <p className={styles.text}>Тойға келетініңізді</p>
        <p className={styles.text}>14 / 09 / 2024 ж. дейін </p>
        <p className={styles.text}>растауыңызды сұраймыз</p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>
          жұбыңызбен келетін болсаңыз, екеуіңіздің есімдеріңізді көрсетіңіз
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Есіміңіз"
          required
          className={styles.formControl}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className={styles.radioContainer}>
          <label>
            <input
              type="radio"
              name="option"
              value="Конечно, приду"
              onChange={(e) => setOption(e.target.value)}
            />
            әрине, келемін
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="Мы придём с супругом/супругой"
              onChange={(e) => setOption(e.target.value)}
            />
            жұбайыммен келеміз
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="К сожалению, не смогу прийти"
              onChange={(e) => setOption(e.target.value)}
            />
            өкінішке орай, келе алмаймын
          </label>
        </div>
        <button className={styles.button}>
          <p className={styles.text}>Жіберу</p>
        </button>
      </form>
    </div>
  );
};
