// CardsPropsType
export type CardsPropsType = {
  cardsData: readonly CardPropsType[];
};

// CardPropsType
export type CardPropsType = {
  imagePath: string;
  urlLink: string;
  gitHubLink: string;
  cardDetails: CardDetailsType;
};

type CardDetailsType = {
  title: string;
  description: string;
  listDescription: ListDescriptionType[];
};

type ListDescriptionType = {
  title: string;
  listItems: string[];
};

// ContactSocialPropsType
export type ContactSocialPropsType = {
  card: CardPropsType;
};
