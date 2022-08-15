import React, { useEffect } from "react";

// 카카오톡 공유버튼
const KakaoShareButton = (props) => {
  const {
    image = "",
    url = "",
    title = "",
    description = "",
    children,
  } = props;

  const createShareButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        container: ".kakaoBtn",
        objectType: "feed",
        content: {
          title: title || "title = string",
          description: description || "description = string",
          imageUrl: image || "image = string",
          link: {
            mobileWebUrl: url || "url = string",
            webUrl: url || "url = string",
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    } else {
      console.log("Kakao CDN Fetch error");
    }
  };
  useEffect(() => {
    createShareButton();
  }, []);

  return (
    <>
      <button className="kakaoBtn">{children}</button>
    </>
  );
};

export default KakaoShareButton;
