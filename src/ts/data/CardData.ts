import { CardDataType } from "@appTypes/index";

export const CardsData: Readonly<CardDataType> = Object.freeze([
  // TODO - add an automation proj
  // TODO - add fceja.com automation
  {
    cardDetails: {
      title: "fceja.com",
      description: "View the code repository for this webpage.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript", "HTML", "SCSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["React", "Axios", "Bootstrap", "Webpack"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3", "CloudFront", "Route53"],
        },
        {
          title: "Miscellaneous",
          listItems: ["CI/CD: Jenkins"],
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
      title: "Emailer API",
      description:
        "An Express Server API that provides an endpoint for email generation.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["Expess JS", "Nodemailer", "Node JS"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["API Gateway", "Lambda"],
        },
        {
          title: "Miscellaneous",
          listItems: ["RestFul", "API key required", "CORS enabled"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/emailer_api",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/nodeJs_api.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "Profile",
      description:
        "A web app that can be used for a user/company profile.\
         Features a home, gallery, and contact page.\
         Contact form pings the Emailer API, where an email is generated and sent to the page owner.",
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
          listItems: [
            "S3",
            "API Gateway",
            "Lambda",
            "RDS",
            "CloudFront",
            "Route53",
          ],
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
      title: "Login JWT Auth API",
      description: "Todo.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["TypeScript"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["Postgres", "Node JS", "Express JS", "JSON Web Token"],
        },
        {
          title: "Miscellaneous",
          listItems: ["CORS enabled", "Bcrypt", "Session"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/login_auth_jwt_session_api",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/nodeJs_api.png",
      urlLink: null,
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
      title: "Login JWT Auth API",
      description:
        "An API that creates, retrieves, and logs-in users using JWT authentication.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["GO"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["Postgres"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/jwt_auth_api",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/go.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "Card Slider",
      description: "Todo.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["JavaScript", "HTML", "CSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["React"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/card_slider",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/card_slider.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "4-in-a-row vs A.I. Agent",
      description: "Todo.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["C++"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/ai_agent_4_in_a_row",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/ai_agent_4_in_a_row.png",
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
  {
    cardDetails: {
      title: "Chipotle Mock",
      description: "Mock webpage of Chipotle.",
      listSections: [
        {
          title: "Technologies",
          listItems: ["JavaScript", "HTML", "CSS"],
        },
        {
          title: "Frameworks / Libraries / Modules",
          listItems: ["JQuery"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/chipotle_mock",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/chipotle_mock.png",
      urlLink: null,
    },
  },
]);
