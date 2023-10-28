export type CardDataType = readonly CardPropsType[];
export type WebLinksPropsType = WebLinksType;

export type CardDataArrayProps = {
  cardDataArray: readonly CardPropsType[];
};

export type CardPropsType = {
  cardDetails: CardDetailsPropsType;
  imagePath: string;
  index: number | null;
  webLinks: WebLinksType;
};

export type CardDetailsPropsType = {
  title: string;
  description: string;
  listDescription: ListDescriptionType[];
};

type ListDescriptionType = {
  title: string;
  listItems: string[];
};

type WebLinksType = {
  urlLink: string;
  gitHubLink: string;
};
