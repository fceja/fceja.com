// components props types
// CardPropsType
export type CardsPropsType = {
  cardsData: readonly CardType[];
};

// ContactSocialPropsType
export type ContactSocialPropsType = {
  card: CardType;
};

// CardDetailsPropsType
export type CardDetailsPropsType = {
  cardDetailsText: CardDetailsTextType;
};

// types
// CardType
export type CardType = {
  imagePath: string;
  urlLink: string;
  gitHubLink: string;
  cardDetailsText: CardDetailsTextType;
};

// CardInfoType
export type CardDetailsTextType = {
  title: string;
  description: string;
};
