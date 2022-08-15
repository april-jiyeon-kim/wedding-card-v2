import React from "react";
import styles from "./gallery.module.css";

const Gallery = () => {
  const weddingPhotos = [
    "photo_1",
    "photo_2",
    "photo_3",
    "photo_4",
    "photo_5",
    "photo_6",
  ];

  return (
    <section>
      <div className={styles.section__container}>
        <h1>Our Moments</h1>
        <div className={styles.wedding__memory}>
          {weddingPhotos.map((photo) => {
            return (
              <>
                <div key={photo} className={styles.memory}>
                  <img
                    src={`imgs/${photo}.jpg`}
                    alt={photo}
                    className={styles.memory__img}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
