import { SocialMediaMarketing } from "../ui/SocialMediaMarketing/SocialMediaMarketing";
import { HeroSection } from "../ui/HeroSection/HeroSection";
import { WrapperSections } from "../ui/WrapperSections/WrapperSections";
import { SwiperSection } from "../ui/SwiperSection/SwiperSection";
import { ReputationSection } from "../ui/ReputationSection/ReputationSection";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <SocialMediaMarketing />
      <WrapperSections>
        <SwiperSection />
        <ReputationSection />
      </WrapperSections>
    </>
  );
}
