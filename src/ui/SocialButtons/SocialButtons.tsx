import classNames from "classnames";
import socialButtonsStyles from "./socialButtonsStyles.module.scss";
import { socials } from "../../constants";
import { Link } from "react-router-dom";

function SocialButtons() {
  return (
    <ul className={classNames(socialButtonsStyles.socialButtons)}>
      {socials.map((social) => (
        <li
          key={social.id}
          className={classNames(socialButtonsStyles.socialButtons__item)}>
          <Link to={social.path} target="_blank" rel="noopener noreferrer">
            <div
              className={classNames(socialButtonsStyles.socialButtons__icon)}
              style={{ backgroundImage: `url(${social.socialImage})` }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { SocialButtons };
