import heroDesktopContainerStyles from "./heroDesktopContainerStyles.module.scss";

export const HeroDesktopContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={heroDesktopContainerStyles.container}>{children}</div>;
};
