import { SocialMediaMarketing } from "../ui/SocialMediaMarketing/SocialMediaMarketing";
import { HeroSection } from "../ui/HeroSection/HeroSection";
import { WrapperSections } from "../ui/WrapperSections/WrapperSections";
import { SwiperSection } from "../ui/SwiperSection/SwiperSection";
import { ReputationSection } from "../ui/ReputationSection/ReputationSection";
import { GrowthStrategy } from "../ui/GrowthStrategy/GrowthStrategy";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <SocialMediaMarketing />
      <WrapperSections>
        <SwiperSection />
        <ReputationSection />
        <GrowthStrategy />
      </WrapperSections>
    </>
  );
}
