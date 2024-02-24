import classNames from "classnames";
import { Link } from "react-router-dom";
import ButtonsStyles from "./ButtonsStyles.module.scss";

type ButtonLinkProps = {
  title: string;
  path: string;
  className?: string;
};

type ButtonsProps = {
  children: React.ReactNode;
  className?: string;
};

export function Buttons({ children, className }: ButtonsProps) {
  return (
    <div className={classNames(ButtonsStyles.buttons, className)}>
      {children}
    </div>
  );
}

export function ButtonLink({ title, path, className }: ButtonLinkProps) {
  return (
    <Link to={path} className={classNames(ButtonsStyles.buttonLink, className)}>
      {title}
    </Link>
  );
}
