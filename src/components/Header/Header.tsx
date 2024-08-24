import { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(isPlaying);
    }
  };

  return (
    <header className={styles.header}>
      <audio ref={audioRef} src="/sounds/song.mp3" autoPlay loop />

      <div className={styles.flowersContainer}>
        <img
          className={styles.flower1}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
        <img
          className={styles.flower2}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
        <img
          className={styles.flower3}
          src="/assets/flower.png"
          alt="flower"
          data-aos="fade-down"
        />
      </div>
      <img
        className={styles.headerImage}
        src="/assets/header.png"
        alt="header"
      />

      <div className={styles.audioContainer}>
        <svg className={styles.circleText} viewBox="0 0 200 200">
          <defs>
            <path
              id="textPath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="black" fontSize="12">
            <textPath href="#textPath">
              Воспроизведение музыки • Музыка ойнау •
            </textPath>
          </text>
        </svg>
        <button className={styles.audioButton} onClick={togglePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faPlay} size="2x" />
          )}
        </button>
      </div>

      <div className={styles.nameContainer}>
        <img
          className={styles.nameImage}
          src="/assets/header-text.svg"
          alt="header-text"
          data-aos="fade-up"
        />
        <p className={styles.name}>Бекзат Фарида</p>
      </div>
      <div className={styles.dateContainer}>
        <p className={styles.date}>⎯⎯⎯⎯ 29.09.2024 ⎯⎯⎯⎯</p>
      </div>
    </header>
  );
};
