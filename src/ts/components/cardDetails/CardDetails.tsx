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
      <>
        {/* generates list sections */}
        {cardDetailsProps.listSections.map((section, index) => (
          <li key={index}>
            <strong key={`title-${index}`} className="list-sec-title">
              {section.title}
            </strong>
            {generateListItems(section.listItems)}
          </li>
        ))}
      </>
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
