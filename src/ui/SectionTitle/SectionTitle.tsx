import classNames from "classnames";
import sectionTitleStyles from "./sectionTitleStyles.module.scss";

export const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={classNames(sectionTitleStyles.title, className)}>{title}</h2>
  );
};
