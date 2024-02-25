import { SectionHeader } from "../SectionHeader/SectionHeader";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";
import { PeopleList } from "./PeopleList";
import { PeopleTabList } from "./PeopleTabList";

export const PeopleSection = () => {
  return (
    <section className={peopleSectionStyles.people}>
      <SectionHeader />
      <div>
        <PeopleList />
        <PeopleTabList />
      </div>
    </section>
  );
};
