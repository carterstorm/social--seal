import classNames from "classnames";
import sectionHeadingStyles from "./sectionHeadingStyles.module.scss";

export const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={classNames(sectionHeadingStyles.heading, className)}>
      {children}
    </h3>
  );
};
