import { CardType } from "@components/cards/Cards";
import { PAGE_PATHS } from "@common/Constants";

export const CardsContent: Readonly<CardType[]> = Object.freeze([
  {
    cardDetails: {
      title: "fceja.com",
      description: "What was used to build this webpage.",
      listSections: [
        {
          title: "Frontend",
          listItems: ["TypeScript, React, Axios", "Bootstrap", "HTML", "SCSS"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3, CloudFront, Route53"],
        },
        {
          title: " Build / Bundle",
          listItems: ["Webpack"],
        },
        {
          title: "CI/CD",
          listItems: ["Jenkins"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/fceja.com",
      imageUrl: null,
      urlLink: `${PAGE_PATHS.HOME}`,
    },
  },
  {
    cardDetails: {
      title: "fceja.com - Automation",
      description: "Automation tests using Selenium and Jest for this webpage.",
      listSections: [
        {
          title: "Language",
          listItems: ["TypeScript"],
        },
        {
          title: "Automation / Test Framework",
          listItems: ["Selenium Webdriver", "Jest"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/fceja.com_automation",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/automation.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "User Forum App",
      description:
        "A forum-like app were Standard and Mod users can create and edit posts.",
      listSections: [
        {
          title: "Demo Creds",
          listItems: ["Username: mary", "Pass: LetMeIn2023$!%"],
        },
        {
          title: "Frontend",
          listItems: [
            "Python, Django, Crispy Forms",
            "Bootstrap",
            "HTML",
            "CSS",
          ],
        },
        {
          title: "Database",
          listItems: ["Postgres"],
        },
        {
          title: "Cloud - Heroku",
          listItems: ["Postgres, Dynos"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/user_post",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/user_post.png",
      urlLink: "https://django-user-post-a42f5d79d28f.herokuapp.com",
    },
  },
  {
    cardDetails: {
      title: "Emailer API",
      description:
        "A NodeJS / ExpressJS API that provides an endpoint for email generation.",
      listSections: [
        {
          title: "Backend",
          listItems: ["TypeScript, Node, Express, Nodemailer"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["API Gateway, Lambda"],
        },
        {
          title: "Miscellaneous",
          listItems: ["Restful, API key, CORS"],
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
      title: "Profile App",
      description: "A web app that can be used for a user/company profile.",
      listSections: [
        {
          title: "FrontEnd",
          listItems: [
            "TypeScript, React, Redux, Axios",
            "Bootstrap",
            "HTML",
            "SCSS",
          ],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3"],
        },
        {
          title: "Miscellaneous",
          listItems: ["Responsive, Evolving project"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/profile_app",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/profile.png",
      urlLink:
        "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com",
    },
  },
  {
    cardDetails: {
      title: "Geolocation & IP App",
      description:
        "After logging in, clicking the 'Get My Location' button will retreive users\
      geo-coordinates and IP info.",
      listSections: [
        {
          title: "Demo Creds",
          listItems: ["Email: fc-geoip@email.com", "Pass: letMeIn_geoip!"],
        },
        {
          title: "Frontend",
          listItems: [
            "TypeScript, React, Axios, Google Maps",
            "Bootstrap / React Bootstrap",
            "HTML",
            "SCSS",
          ],
        },
        {
          title: "Database",
          listItems: ["Postgres"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3, API Gateway, Lambda, RDS, CloudFront, Route53"],
        },
        {
          title: "Build / Bundle",
          listItems: ["Webpack"],
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
      description:
        "An API that provides endpoints for: creating, retrieving, and logging-in users. \
        Implemented with JWT authentication.",
      listSections: [
        {
          title: "Backend",
          listItems: ["TypeScript", "NodeJs", "ExpressJS"],
        },
        {
          title: "Database",
          listItems: ["Postgres"],
        },
        {
          title: "Miscellaneous",
          listItems: ["CORS, BCrypt, Session, JWT"],
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
      title: "Economic Calendar - Automation",
      description:
        "Uses Selenium and Pytest to parse economic calendar data from investing.com. Also outputs the data into a csv.",
      listSections: [
        {
          title: "Language",
          listItems: ["Python"],
        },
        {
          title: "Automation / Test Framework",
          listItems: ["Selenium Webdriver", "Pytest"],
        },
      ],
    },
    index: null,
    webLinks: {
      gitHubLink: "https://github.com/fceja/econ_calendar_automation",
      imageUrl:
        "https://s3.us-west-1.amazonaws.com/dev.assets.fceja/images/automation.png",
      urlLink: null,
    },
  },
  {
    cardDetails: {
      title: "Google Maps App",
      description: "After logging in, an interactive Google Map is populated.",
      listSections: [
        {
          title: "Demo Creds",
          listItems: ["Email: fc-gmaps@email.com", "Pass: letMeIn_gmaps!"],
        },
        {
          title: "Frontend",
          listItems: [
            "TypeScript, React, Axios, Google Maps",
            "Bootstrap",
            "HTML",
            "SCSS",
          ],
        },
        {
          title: "Database",
          listItems: ["Postgres"],
        },
        {
          title: "Cloud - AWS",
          listItems: ["S3, API Gateway, Lambda, RDS"],
        },
        {
          title: "Build / Bundle",
          listItems: ["Webpack"],
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
      title: "Card Slider App",
      description: "A container featuring scrollable cards.",
      listSections: [
        {
          title: "Frontend",
          listItems: ["JavaScript, React", "HTML", "CSS"],
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
      title: "User vs A.I. Agent",
      description:
        "A 4-in-a-row game implementation using alpha beta search with pruning.",
      listSections: [
        {
          title: "Language",
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
      title: "Dice Game",
      description: "A poker style game with dice.",
      listSections: [
        {
          title: "Language",
          listItems: ["Java"],
        },
        {
          title: "Dependencies",
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
        "An API that provides endpoints for: creating, retrieving, and logging-in users. \
        Implemented with JWT authentication.",
      listSections: [
        {
          title: "Backend",
          listItems: ["Go (Golang)", "JWT"],
        },
        {
          title: "Database",
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
      title: "Bingo Card Game",
      description:
        "Imitation of card game, where the game is won when a pre-determined pattern is selected.",
      listSections: [
        {
          title: "Frontend",
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
      description: "Mock webpage for Chipotle.",
      listSections: [
        {
          title: "Frontend",
          listItems: ["JavaScript, JQuery", "HTML", "CSS"],
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
