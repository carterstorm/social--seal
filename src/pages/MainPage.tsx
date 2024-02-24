import { SocialMediaMarketing } from "../ui/SocialMediaMarketing/SocialMediaMarketing";
import { HeroSection } from "../ui/HeroSection/HeroSection";
import { WrapperSections } from "../ui/WrapperSections/WrapperSections";
import { SwiperSection } from "../ui/SwiperSection/SwiperSection";
import { ReputationSection } from "../ui/ReputationSection/ReputationSection";
import { GrowthStrategy } from "../ui/GrowthStrategy/GrowthStrategy";
import { MonitoringSection } from "../ui/MonitoringSection/MonitoringSection";
import { AllQuestions } from "../ui/AllQuestions/AllQuestions";
import { GradientSection } from "../ui/GradientSection/GradientSection";
import { WhatWeDo } from "../ui/WhatWeDo/WhatWeDo";
import { ConsultationSection } from "../ui/ConsultationSection/ConsultationSection";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <SocialMediaMarketing />
      <WrapperSections>
        <SwiperSection />
        <ReputationSection />
        <GrowthStrategy />
        <MonitoringSection />
      </WrapperSections>
      <AllQuestions />
      <GradientSection>
        <WhatWeDo />
        <ConsultationSection />
      </GradientSection>
    </>
  );
}
