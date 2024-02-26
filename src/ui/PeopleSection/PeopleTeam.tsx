import { PeopleList } from "./PeopleList";
import { PeopleTabList } from "./PeopleTabList";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";

export const PeopleTeam = () => {
  return (
    <div className={peopleSectionStyles.peopleTeamContainer}>
      <PeopleList />
      <PeopleTabList />
    </div>
  );
};
