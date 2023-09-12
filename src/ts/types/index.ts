// define CardType
export type CardType = {
  imagePath: string;
  title: string;
  description: string;
  urlLink: string;
};

// Card component
export type CardPropsType = {
  cardData: readonly CardType[];
};

// CardCarousel component
export type CardCarouselPropsType = {
  cardData: readonly CardType[];
};
