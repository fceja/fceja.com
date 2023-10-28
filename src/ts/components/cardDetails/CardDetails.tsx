import "@styles/components/CardDetails.scss";
import { CardDetailsPropsType } from "@appTypes/index";

const CardDetails: React.FC<CardDetailsPropsType> = (cardDetailsProps) => {
  return (
    <div>
      <p className="title text-center text-wrap">{cardDetailsProps.title}</p>
      <p className="description text-wrap">{cardDetailsProps.description}</p>
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
