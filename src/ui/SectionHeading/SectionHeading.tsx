import classNames from "classnames";
import sectionHeadingStyles from "./sectionHeadingStyles.module.scss";

export const SectionHeading = ({
  headingText,
  className,
}: {
  headingText: string;
  className?: string;
}) => {
  return (
    <h3 className={classNames(sectionHeadingStyles.heading, className)}>
      {headingText}
    </h3>
  );
};
