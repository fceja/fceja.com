export type CardDataType = readonly CardPropsType[];
export type CardImagePropsType = WebLinksType;
export type WebLinksPropsType = WebLinksType;

export type CardDataArrayProps = {
  cardDataArray: readonly CardPropsType[];
};

export type CardPropsType = {
  cardDetails: CardDetailsPropsType;
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
  gitHubLink: string;
  imageUrl: string;
  urlLink: string;
};
