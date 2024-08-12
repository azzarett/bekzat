import { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

export const FormRu = () => {
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
        <p className={styles.text}>Просим подтвердить</p>
        <p className={styles.text}>ваше присутствие</p>
        <p className={styles.text}>на торжестве</p>
        <p className={styles.text}>до 14.09.2024</p>
      </div>
      <div className={styles.textContainer2}>
        <p className={styles.text}>
          Если вы придёте с супругом/супругой, укажите имена обоих
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          required
          className={styles.formControl}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className={styles.radioContainer}>
          <label>
            <input type="radio" name="option" value="Конечно, приду" onChange={(e) => setOption(e.target.value)}/>
            Конечно, приду
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="Мы придём с супругом/супругой"
              onChange={(e) => setOption(e.target.value)}
            />
            Мы придём с супругом/супругой
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="К сожалению, не смогу прийти"
              onChange={(e) => setOption(e.target.value)}
            />
            К сожалению, не смогу прийти
          </label>
        </div>
        <button type="submit" className={styles.button}>
          <p className={styles.text}>Отправить</p>
        </button>
      </form>
    </div>
  );
};
