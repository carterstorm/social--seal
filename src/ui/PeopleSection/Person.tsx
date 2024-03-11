import { PersonType } from "../../types";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";

export const Person = ({ person }: { person: PersonType }) => {
  return (
    <li key={person.id} className={peopleSectionStyles.person}>
      <img
        src={`${import.meta.env.VITE_APP_BASE_URL}${person.personImage}`}
        alt={person.name}
        className={peopleSectionStyles.person__image}
      />
      <div className={peopleSectionStyles.personInfo}>
        <div className={peopleSectionStyles.personInfo__container}>
          <span className={peopleSectionStyles.personInfo__name}>
            {person.name}
          </span>
          <span className={peopleSectionStyles.personInfo__jobTitle}>
            {person.jobTitle}
          </span>
        </div>
      </div>
    </li>
  );
};
