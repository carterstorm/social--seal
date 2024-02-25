import { people } from "../../constants";
import { Person } from "./Person";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";

export const PeopleList = () => {
  return (
    <ul className={peopleSectionStyles.peopleList}>
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </ul>
  );
};
