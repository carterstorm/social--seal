import classNames from "classnames";
import peopleSectionStyles from "./peopleSectionStyles.module.scss";

export const PeopleTabList = () => {
  return (
    <ul className={peopleSectionStyles.tabList}>
      <li className={peopleSectionStyles.tabList__item}>
        <button className={peopleSectionStyles.tabList__circle} />
      </li>
      <li className={peopleSectionStyles.tabList__item}>
        <button className={peopleSectionStyles.tabList__circle} />
      </li>
      <li className={peopleSectionStyles.tabList__item}>
        <button
          className={classNames(
            peopleSectionStyles.tabList__circle,
            peopleSectionStyles["tabList__circle--active"]
          )}
        />
      </li>
    </ul>
  );
};
