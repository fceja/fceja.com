import "@styles/components/CardDetails.scss";
import { CardDetailsPropsType } from "@appTypes/index";

const CardDetails: React.FC<CardDetailsPropsType> = (cardDetailsProps) => {
  const generateListItems = (listItems: string[]) => {
    const generateSubList = () => {
      return (
        <ul className="sub-list">
          {Object.values(listItems).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    };

    return generateSubList();
  };

  const generateListComponent = () => {
    return (
      <li>
        {cardDetailsProps.listSections.map((section, index) => (
          <div key={index}>
            <strong>{section.title}</strong>
            {generateListItems(section.listItems)}
          </div>
        ))}
      </li>
    );
  };

  const listComponent = generateListComponent();

  return (
    <div>
      <p className="title text-center text-wrap">{cardDetailsProps.title}</p>
      <p className="description text-wrap">{cardDetailsProps.description}</p>
      <ul className="list-container">{listComponent}</ul>
    </div>
  );
};

export default CardDetails;
