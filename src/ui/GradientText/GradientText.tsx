import classNames from "classnames";
import gradientTextStyles from "./gradientTextStyles.module.scss";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={classNames(gradientTextStyles.heading, className)}>
      {children}
    </p>
  );
}
