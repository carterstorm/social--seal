import whatWeDoImageContainerStyles from "./whatWeDoImageContainerStyles.module.scss";
import { WhatWeDoCard } from "../WhatWeDoCard/WhatWeDoCard";
import { WhatWeDoImage } from "../WhatWeDoImage/WhatWeDoImage";

export const WhatWeDoImageContainer = () => {
  return (
    <div className={whatWeDoImageContainerStyles.container}>
      <WhatWeDoImage />
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
