import whatWeDoImageStyles from "./whatWeDoImageStyles.module.scss";
import { WhatWeDoCard } from "../WhatWeDoCard/WhatWeDoCard";

export const WhatWeDoImage = () => {
  return (
    <div className={whatWeDoImageStyles.container}>
      <img
        src="/whatWeDo.png"
        alt="What We Do Image"
        className={whatWeDoImageStyles.image}
      />
      <WhatWeDoCard
        card="first"
        numberValue={"18+"}
        description="Years Of Experience"
      />
      <WhatWeDoCard
        card="second"
        numberValue={"5K+"}
        description="Have Faithfully Completed Projects Till Date"
      />
    </div>
  );
};
