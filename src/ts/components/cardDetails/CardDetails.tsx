import "@styles/components/CardDetails.scss";
import { CardDetailPropsType } from "@appTypes/index";

const CardDetails: React.FC<CardDetailPropsType> = (cardDetails) => {
  return (
    <div>
      <p className="title text-center text-wrap">
        {cardDetails.cardDetails.title}
      </p>
      <p className="description text-wrap">
        {cardDetails.cardDetails.description}
      </p>
      <ul className="list-container">
        <li>
          <strong>Technologies</strong>
          <ul className="sub-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </li>
        <li>
          <strong>Hosting</strong>
          <ul className="sub-list">
            <li>AWS / S3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CardDetails;
