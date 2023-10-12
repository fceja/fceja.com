interface CardDataItem {
  imagePath: string;
  title: string;
  description: string;
  urlLink: string;
}

// export const CardCarouselCardData = Object.freeze([
export const CardCarouselCardData: ReadonlyArray<CardDataItem> = Object.freeze([
  {
    imagePath:
      "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/bingo.png",
    title: "Bingo Card Game",
    description:
      "Imatation of card game, where game is won by selecting a predetermined pattern.",
    urlLink: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com",
    gitHubLink: "https://github.com/fceja/bingo_game",
  },
]);
