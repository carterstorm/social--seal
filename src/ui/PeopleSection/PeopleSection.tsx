import { SectionHeader } from "../SectionHeader/SectionHeader";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";
import { PeopleDesktopHeaderContainer } from "./PeopleDesktopHeaderContainer";
import { PeopleMobileHeaderContainer } from "./PeopleMobileHeaderContainer";
import { PeopleTeam } from "./PeopleTeam";

export const PeopleSection = () => {
  return (
    <section className={peopleSectionStyles.people}>
      <PeopleDesktopHeaderContainer>
        <SectionHeader />
      </PeopleDesktopHeaderContainer>
      <PeopleMobileHeaderContainer />
      <PeopleTeam />
    </section>
  );
};
