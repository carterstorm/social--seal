import classNames from "classnames";
import specialQuestionImageStyles from "../SpecialQuestionImage/specialQuestionImageStyles.module.scss";

export const SpecialQuestionImage = () => {
  return (
    <div className={specialQuestionImageStyles.specialContainer}>
      <img
        src="/special_image_1.png"
        alt=""
        className={classNames(
          specialQuestionImageStyles.specialContainer__image,
          specialQuestionImageStyles["specialContainer__image--first"]
        )}
      />
      <img
        src="/special_image_2.png"
        alt=""
        className={classNames(
          specialQuestionImageStyles.specialContainer__image,
          specialQuestionImageStyles["specialContainer__image--second"]
        )}
      />
    </div>
  );
};
