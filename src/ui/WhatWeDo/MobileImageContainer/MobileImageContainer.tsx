import mobileImageContainerStyles from "./mobileImageContainerStyles.module.scss";

export const MobileImageContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={mobileImageContainerStyles.container}>{children}</div>;
};
