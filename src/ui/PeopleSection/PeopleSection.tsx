import classNames from "classnames";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";

type PeopleType = {
  id: string;
  name: string;
  jobTitle: string;
  personImage: string;
};

const people: PeopleType[] = [
  {
    id: "1",
    name: "Ryan Vetrovs",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_1.png",
  },
  {
    id: "2",
    name: "Emerson Saris",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_2.png",
  },
  {
    id: "3",
    name: "Lindsey Schleifer",
    jobTitle: "CEO Kawasaki Inc.",
    personImage: "/person_3.png",
  },
];

export const PeopleSection = () => {
  return (
    <section className={peopleSectionStyles.people}>
      <SectionHeader />
      <div>
        <ul className={peopleSectionStyles.peopleList}>
          {people.map((person) => {
            return (
              <li key={person.id} className={peopleSectionStyles.person}>
                <img
                  src={person.personImage}
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
          })}
        </ul>
        <ul className={peopleSectionStyles.tabList}>
          <li className={peopleSectionStyles.tabList__item}>
            <button className={peopleSectionStyles.tabList__circle} />
          </li>
          <li className={peopleSectionStyles.tabList__item}>
            <button className={peopleSectionStyles.tabList__circle} />
          </li>
          <li className={peopleSectionStyles.tabList__item}>
            <button
              className={classNames(
                peopleSectionStyles.tabList__circle,
                peopleSectionStyles["tabList__circle--active"]
              )}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
