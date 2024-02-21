import classNames from "classnames";
import sectionParagraphsStyles from "./sectionParagraphsStyles.module.scss";

export const SectionParagraphs = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classNames(sectionParagraphsStyles.container, className)}>
      {children}
    </div>
  );
};
