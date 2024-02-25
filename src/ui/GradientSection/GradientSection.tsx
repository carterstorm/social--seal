import gradientSectionStyles from "./gradientSectionStyles.module.scss";

export const GradientSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className={gradientSectionStyles.gradientWrapper}>
      {children}
    </section>
  );
};
