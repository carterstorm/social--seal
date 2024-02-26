import classNames from "classnames";
import sectionParagraphsStyles from "./sectionParagraphsStyles.module.scss";

export const SectionParagraphs = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classNames(sectionParagraphsStyles.container, className)}>
      {children}
    </div>
  );
};

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={classNames(
        sectionParagraphsStyles.container__paragraph,
        className
      )}>
      {children}
    </p>
  );
};

export const Emphasis = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <em
      className={classNames(
        sectionParagraphsStyles.container__emphasis,
        className
      )}>
      {children}
    </em>
  );
};
