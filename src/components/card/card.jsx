import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { version = "", name } = props;

  return (
    <>
      <section id="wedding_card">
        <div className={styles.card}>
          <img
            src="imgs/card_front.png"
            alt="wedding-card"
            className={styles.card__img}
          />
        </div>
        <div className={styles.card}>
          <img
            src={`imgs/card_back${version}.png`}
            alt="wedding-card"
            className={styles.card__img}
          />
        </div>
      </section>
    </>
  );
};

export default Card;
