type AnimatedShapeProps = {
  source: string;
  className: string;
};

export const AnimatedShape = ({ source, className }: AnimatedShapeProps) => {
  return (
    <img
      src={`${import.meta.env.VITE_APP_BASE_URL}/${source}`}
      alt="Animated Shape"
      className={className}
    />
  );
};
