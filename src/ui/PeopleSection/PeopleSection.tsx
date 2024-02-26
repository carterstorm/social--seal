import { SectionHeader } from "../SectionHeader/SectionHeader";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";
import { PeopleList } from "./PeopleList";
import { PeopleTabList } from "./PeopleTabList";
import { PeopleDesktopHeaderContainer } from "./PeopleDesktopHeaderContainer";
import { PeopleMobileHeaderContainer } from "./PeopleMobileHeaderContainer";

export const PeopleSection = () => {
  return (
    <section className={peopleSectionStyles.people}>
      <PeopleDesktopHeaderContainer>
        <SectionHeader />
      </PeopleDesktopHeaderContainer>
      <PeopleMobileHeaderContainer />
      <div>
        <PeopleList />
        <PeopleTabList />
      </div>
    </section>
  );
};
