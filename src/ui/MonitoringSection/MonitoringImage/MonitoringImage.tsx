import classNames from "classnames";
import monitoringImageStyles from "../MonitoringImage/monitoringImageStyles.module.scss";

export const MonitoringImage = () => {
  return (
    <div className={monitoringImageStyles.container}>
      <div className={monitoringImageStyles.image}>
        <div className={monitoringImageStyles.iconsContainer}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}ghost_icon.png`}
            alt="Ghost icon"
            className={classNames(
              monitoringImageStyles.icon,
              monitoringImageStyles["icon--first"]
            )}
          />
          <img
            src="/circle_icon.png"
            alt="Circle icon"
            className={classNames(
              monitoringImageStyles.icon,
              monitoringImageStyles["icon--second"]
            )}
          />
        </div>
      </div>
    </div>
  );
};
