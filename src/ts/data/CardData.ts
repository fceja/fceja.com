import { CardDataType } from "@appTypes/index";

export const CardsData: Readonly<CardDataType> = Object.freeze([
  {
    cardDetails: {
      title: "Google Map - Login",
      description: "After logging in, an interactive Google Map is populated",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript", "HTML", "SCSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: [
            "Postgres",
            "React",
            "Axios",
            "Bootstrap",
            "Webpack",
            "Google Maps",
          ],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3", "API Gateway", "Lambda", "RDS"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/google_maps_app",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/google_maps.png",
      urlLink:
        "http://dev.client.google-maps.s3-website-us-west-1.amazonaws.com/",
    },
  },
  {
    cardDetails: {
      title: "Geolocation/Ip - Login",
      description:
        "After logging in, clicking the 'Get My Location' button will retreive users\
        geo-coordinates and IP info (requests user permission).",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript", "HTML", "SCSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["Postgres", "React", "Axios", "Bootstrap", "Webpack"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3", "API Gateway", "Lambda", "RDS"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/login_form_geolocation_ip",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/geolocation_ip.png",
      urlLink: "https://fceja-proj.com/",
    },
  },
  {
    cardDetails: {
      title: "Bingo Card Game",
      description:
        "Imitation of card game, where the game is won when a predetermined pattern is selected.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["JavaScript", "HTML", "CSS"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3"],
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
