import questionListStyles from "./questionListStyles.module.scss";

const questionListItem = [
  {
    id: 1,
    text: `Seo quotes to inspire your campaign`,
  },
  {
    id: 2,
    text: `Much easier to double your business`,
  },
  {
    id: 3,
    text: `Free page speed insights tool to find out exactly`,
  },
  {
    id: 4,
    text: `Seo quotes to inspire your campaign`,
  },
];

export default function QuestionsList() {
  return (
    <ul className={questionListStyles.list}>
      {questionListItem.map((item) => (
        <li key={item.id} className={questionListStyles.list__item}>
          <div className={questionListStyles.list__image} />
          <span className={questionListStyles.list__text}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
