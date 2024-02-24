import classNames from "classnames";
import gradientTextStyles from "./gradientTextStyles.module.scss";

export function GradientText() {
  return (
    <p className={classNames(gradientTextStyles.heading)}>
      All Your Questions Are Here
    </p>
  );
}
