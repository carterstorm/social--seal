import sectionImageStyles from "./sectionImageStyles.module.scss";

type SectionImageProps = {
  source: string;
  alt: string;
};

export const SectionImage = ({ source, alt }: SectionImageProps) => {
  return (
    <img
      src={`${import.meta.env.VITE_APP_BASE_URL}/${source}`}
      alt={alt}
      className={sectionImageStyles.image}
    />
  );
};
