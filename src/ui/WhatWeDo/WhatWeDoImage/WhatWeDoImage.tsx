import whatWeDoImageStyles from "./whatWeDoImageStyles.module.scss";

export const WhatWeDoImage = () => {
  return (
    <img
      src="/whatWeDo.png"
      alt="What We Do Image"
      className={whatWeDoImageStyles.image}
    />
  );
};
