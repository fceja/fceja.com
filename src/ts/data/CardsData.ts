interface CardDataItem {
  imagePath: string;
  title: string;
  description: string;
  urlLink: string;
  gitHubLink: string;
}

export const CardsData: ReadonlyArray<CardDataItem> = Object.freeze([
  {
    imagePath:
      "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/bingo.png",
    title: "Bingo Card Game",
    description:
      "Imitation of card game, where the game is won when a predetermined pattern is selected.",
    urlLink: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com",
    gitHubLink: "https://github.com/fceja/bingo_game",
  },
]);
