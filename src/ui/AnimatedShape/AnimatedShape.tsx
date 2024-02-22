type AnimatedShapeProps = {
  source: string;
  className: string;
};

export const AnimatedShape = ({ source, className }: AnimatedShapeProps) => {
  return <img src={source} alt="Animated Shape" className={className} />;
};
