import React from "react";
import KakaoShareButton from "../kakakShareButton/kakaoShareButton";
import styles from "./contact.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const weddingPhotos = [
    { original: "imgs/photo_1.jpg", thumbnail: "photo_1" },
    { original: "imgs/photo_2.jpg", thumbnail: "photo_2" },
    { original: "imgs/photo_3.jpg", thumbnail: "photo_3" },
    { original: "imgs/photo_4.jpg", thumbnail: "photo_4" },
    { original: "imgs/photo_5.jpg", thumbnail: "photo_5" },
    { original: "imgs/photo_6.jpg", thumbnail: "photo_6" },
  ];
  return (
    <section className={styles.section}>
      <p>신한 110-30034-2740</p>
      <p>유미숙</p>
      <CopyToClipboard text={"110-30034-2740"}>
        <button>복사하기</button>
      </CopyToClipboard>
      {/* <KakaoShareButton>test</KakaoShareButton> */}
    </section>
  );
};

export default Contact;
