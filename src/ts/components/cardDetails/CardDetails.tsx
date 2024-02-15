import "@scss/components/CardDetails.scss";

export type CardDetailsProps = {
  title: string;
  description: string;
  listSections: ListSectionType[];
};

type ListSectionType = {
  title: string;
  listItems: string[];
};

const CardDetails = (props: CardDetailsProps) => {
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
        {props.listSections.map((section, index) => (
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
      <p className="title text-center text-wrap">{props.title}</p>
      <p className="description text-wrap">{props.description}</p>
      <ul className="list-container">{listComponent}</ul>
    </div>
  );
};

export default CardDetails;
