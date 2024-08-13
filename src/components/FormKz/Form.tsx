import { useEffect, useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

export const FormKz = () => {
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
        <p className={styles.text}>Тойға келетініңізді</p>
        <p className={styles.text}>14 / 09 / 2024 ж. дейін </p>
        <p className={styles.text}>растауыңызды сұраймыз</p>
      </div>
      <div className={styles.textContainer2} data-aos="fade-down">
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
          data-aos="fade-down"
        />
        <div className={styles.radioContainer}>
          <label>
            <input
              type="radio"
              name="option"
              required
              value="Конечно, приду"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            әрине, келемін
          </label>

          <label>
            <input
              type="radio"
              name="option"
              required
              value="Мы придём с супругом/супругой"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            жұбайыммен келеміз
          </label>

          <label>
            <input
              type="radio"
              name="option"
              required
              value="К сожалению, не смогу прийти"
              onChange={(e) => setOption(e.target.value)}
              data-aos="fade-down"
            />
            өкінішке орай, келе алмаймын
          </label>
        </div>
        <button type="submit" className={styles.button} disabled={loading} data-aos="fade-down">
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <p className={styles.text}>Жіберу</p>
          )}
        </button>
      </form>
    </div>
  );
};
