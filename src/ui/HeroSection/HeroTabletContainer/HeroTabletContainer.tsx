import heroTabletContainerStyles from "./heroTabletContainerStyles.module.scss";

export const HeroTabletContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={heroTabletContainerStyles.container}>{children}</div>;
};
