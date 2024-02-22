import wrapperSectionsStyles from "./wrapperSectionsStyles.module.scss";

export const WrapperSections = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={wrapperSectionsStyles.container}>{children}</div>;
};
