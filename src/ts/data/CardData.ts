import { CardDataType } from "@appTypes/index";

export const CardsData: Readonly<CardDataType> = Object.freeze([
  {
    cardDetails: {
      title: "Google Map",
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
      title: "User Forum",
      description:
        "A Forum like app, featuring both standard and moderator users. Users have ability to:\
         create an account, log in, create posts, and view community posts on homepage.\
         Moderators can do the same, as well as ban users or delete posts.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["Python", "HTML", "CSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["Postgres", "Django", "Django Crispy Forms", "Bootstrap"],
        },
        {
          title: "Cloud - Heroku",
          listItems: ["Heroku Postgres", "todo - Instance"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/user_post",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/user_post.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "Profile",
      description:
        "A web app that can be used for a user/company profile.\
         Features a home, gallery, and contact page.\
         Contact form pings the emailer api, where an email is generated and sent to the page owner.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript", "HTML", "SCSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["React", "Axios", "Bootstrap", "Redux"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3"],
        },
        {
          title: "Miscellaneous",
          listItems: ["Responsive", "Evolving project"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/profile_app",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/profile.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "Geolocation & IP",
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
            "Bootstrap / React Bootstrap",
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
      gitHubLink: "https://github.com/fceja/login_form_geolocation_ip",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/geolocation_ip.png",
      urlLink: "https://fceja-proj.com/",
    },
  },
  {
    cardDetails: {
      title: "Dice Game",
      description: "A poker style game with Dice.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["Java"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["JavaFX", "Maven"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/dice_game",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/dice_game.png",
      urlLink: null,
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
