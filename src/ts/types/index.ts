// CardType
export type CardType = {
  imagePath: string;
  title: string;
  description: string;
  urlLink: string;
  gitHubLink: string;
};

// CardPropsType
export type CardsPropsType = {
  cardsData: readonly CardType[];
};

// ContactSocialPropsType
export type ContactSocialPropsType = {
  card: CardType;
};
