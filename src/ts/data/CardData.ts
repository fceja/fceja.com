import { CardDataType } from "@appTypes/index";

export const CardData: Readonly<CardDataType> = Object.freeze([
  {
    cardDetails: {
      title: "Bingo Card Game",
      description:
        "Imitation of card game, where the game is won when a predetermined pattern is selected.",
      listDescription: [
        {
          title: "Technologies",
          listItems: ["JavaScript", "HTML", "CSS"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/bingo_game",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/bingo.png",
      urlLink: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com",
    },
  },
]);
