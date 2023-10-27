import { CardType } from "@appTypes/index";

export const CardsData: ReadonlyArray<CardType> = Object.freeze([
  {
    imagePath:
      "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/bingo.png",
    urlLink: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com",
    gitHubLink: "https://github.com/fceja/bingo_game",
    cardDetailsText: {
      title: "Bingo Card Game",
      description:
        "Imitation of card game, where the game is won when a predetermined pattern is selected.",
    },
  },
]);
