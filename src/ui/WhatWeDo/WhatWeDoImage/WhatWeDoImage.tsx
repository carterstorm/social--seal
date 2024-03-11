import whatWeDoImageStyles from "./whatWeDoImageStyles.module.scss";

export const WhatWeDoImage = () => {
  return (
    <img
      src={`${import.meta.env.VITE_APP_BASE_URL}whatWeDo.png`}
      alt="What We Do Image"
      className={whatWeDoImageStyles.image}
    />
  );
};
