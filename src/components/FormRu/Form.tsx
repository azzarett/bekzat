import { useEffect, useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

export const FormRu = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      Name: name,
      Option: option,
    };
    setLoading(true);
    axios
      .post(
        "https://sheet.best/api/sheets/dd34df7a-cd34-46d8-a8db-420821cfe093",
        data
      )
      .then(() => {
        setName("");
        setOption("");
        setLoading(false);
        alert("Ваше сообщение успешно отправлено!");
      })
      .catch(() => {
        setLoading(false);
        alert("Произошла ошибка. Пожалуйста, попробуйте снова.");
      });
  };

  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/form.jpeg"
        alt="form image"
        className={styles.formImage}
        data-aos="fade-down"
      />
      <div className={styles.textContainer} data-aos="fade-down">
        <p className={styles.text}>Просим подтвердить</p>
        <p className={styles.text}>ваше присутствие</p>
        <p className={styles.text}>на торжестве</p>
        <p className={styles.text}>до 14.09.2024</p>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
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
          data-aos="fade-down"
        />
        <div className={styles.radioContainer}>
          <label>
            <input
              type="radio"
              name="option"
              value="Конечно, приду"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            Конечно, приду
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="Мы придём с супругом/супругой"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            Мы придём с супругом/супругой
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="К сожалению, не смогу прийти"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            К сожалению, не смогу прийти
          </label>
        </div>
        <button type="submit" className={styles.button} disabled={loading} data-aos="fade-down">
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <p className={styles.text}>Отправить</p>
          )}
        </button>
      </form>
    </div>
  );
};
