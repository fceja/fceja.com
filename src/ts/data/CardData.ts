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
            "NPM (Node Package Manager)",
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
      title: "User Forum",
      description:
        "A Forum like app, featuring both standadard and moderator users. Users have ability to:\
         create an account, log in, create posts, and view community posts on homepage.\
         Moderators can do the same, as well as ban users or delete posts.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["Python", "HTML", "CSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: [
            "Postgres",
            "Django",
            "Django Crispy Forms",
            "Bootstrap",
            "PIP (Pip Installs Packages)",
          ],
        },
        {
          title: "Cloud - Heroku",
          listItems: ["Heroku Postgres", "todo"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/user_post",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/user_post.png",
      urlLink: "http://todo.com/",
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
          listItems: [
            "Postgres",
            "React",
            "Axios",
            "Bootstrap",
            "Webpack",
            "NPM (Node Package Manager)",
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
