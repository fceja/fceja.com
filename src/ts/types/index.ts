// CardType
export type CardType = {
  imagePath: string;
  urlLink: string;
  gitHubLink: string;
  cardDetails: CardDetailsType;
};

export type CardDetailsType = {
  title: string;
  description: string;
};

export type CardDetailPropsType = {
  cardDetails: CardDetailsType;
};

// CardPropsType
export type CardsPropsType = {
  cardsData: readonly CardType[];
};

// ContactSocialPropsType
export type ContactSocialPropsType = {
  card: CardType;
};
