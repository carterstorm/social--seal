import monitoringListStyles from "./monitoringListStyles.module.scss";
import { monitoringList } from "../../../constants";

export function MonitoringList() {
  return (
    <ul className={monitoringListStyles.monitoringList}>
      {monitoringList.map((item) => (
        <li
          key={item.id}
          className={monitoringListStyles.monitoringList__item}
          style={{
            borderColor: item.borderColor,
            backgroundColor: item.bgColor,
          }}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
