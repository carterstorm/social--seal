import peopleSectionStyles from "./peopleSectionStyles.module.scss";

export const PeopleDesktopHeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={peopleSectionStyles.peopleDesktopHeaderContainer}>
      {children}
    </div>
  );
};
