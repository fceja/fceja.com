type AnchorType = {
  href: string;
  img: {
    src: string;
    alt: string;
  };
};

export type SubSectionContentProps = {
  title: string;
  anchorTagData: AnchorType[];
};

export const SubSectionContent: Readonly<SubSectionContentProps[]> =
  Object.freeze([
    {
      title: "Languages / Libraries / Frameworks",
      anchorTagData: [
        {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
            alt: "javascript",
          },
        },
        {
          href: "https://www.typescriptlang.org/",
          img: {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            alt: "typescript",
          },
        },
        {
          href: "https://www.python.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
            alt: "python",
          },
        },
        {
          href: "https://react.dev/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "react",
          },
        },
        {
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            alt: "redux",
          },
        },
        {
          href: "https://nodejs.org/en/about",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
            alt: "nodejs",
          },
        },
        {
          href: "https://expressjs.com/",
          img: {
            src: "https://expressjs.com/images/favicon.png",
            alt: "expressjs",
          },
        },
        {
          href: "https://getbootstrap.com",
          img: {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
            alt: "bootstrap",
          },
        },
        {
          href: "https://www.w3.org/html/",
          img: {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            alt: "html5",
          },
        },
        {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            alt: "css",
          },
        },
        {
          href: "https://sass-lang.com",
          img: {
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
            alt: "sass",
          },
        },
        {
          href: "https://jquery.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
            alt: "jquery",
          },
        },
        {
          href: "https://groovy-lang.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
            alt: "groovy",
          },
        },
        {
          href: "https://jestjs.io/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
            alt: "jest",
          },
        },
        {
          href: "https://www.selenium.dev/documentation/webdriver/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
            alt: "selenium",
          },
        },
        {
          href: "https://docs.pytest.org/en/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg",
            alt: "pytest",
          },
        },
        {
          href: "https://pandas.pydata.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
            alt: "pandas",
          },
        },
        {
          href: "https://www.djangoproject.com/",
          img: {
            src: "https://www.djangoproject.com/favicon.ico",
            alt: "Django Logo",
          },
        },
        {
          href: "https://graphql.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
            alt: "graphql",
          },
        },
        {
          href: "https://nodemailer.com/",
          img: {
            src: "https://nodemailer.com/favicon-96x96.png",
            alt: "nodemailer",
          },
        },
        {
          href: "https://developers.google.com/maps",
          img: {
            src: "https://developers.google.com/static/maps/images/maps-icon.svg",
            alt: "googlemaps",
          },
        },
        {
          href: "https://numpy.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
            alt: "numpy",
          },
        },
        {
          href: "https://www.npmjs.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
            alt: "npm",
          },
        },
        {
          href: "https://pypi.org/",
          img: {
            src: "https://pypi.org/static/images/favicon.35549fe8.ico",
            alt: "pip",
          },
        },
      ],
    },
    {
      title: "Database",
      anchorTagData: [
        {
          href: "https://www.postgresql.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
            alt: "posgres",
          },
        },
        {
          href: "https://www.mysql.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
            alt: "mysql",
          },
        },
        {
          href: "https://www.sqlite.org/index.html",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            alt: "sqlite",
          },
        },
      ],
    },
    {
      title: "Cloud",
      anchorTagData: [
        {
          href: "https://aws.amazon.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
            alt: "aws",
          },
        },
        {
          href: "https://www.heroku.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg",
            alt: "heroku",
          },
        },
      ],
    },
    {
      title: "Miscellaneous",
      anchorTagData: [
        {
          href: "https://git-scm.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
            alt: "git",
          },
        },
        {
          href: "https://webpack.js.org",
          img: {
            src: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
            alt: "webpack",
          },
        },
        {
          href: "https://babeljs.io/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
            alt: "babel",
          },
        },
        {
          href: "https://www.docker.com/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
            alt: "docker",
          },
        },
        {
          href: "https://www.jenkins.io",
          img: {
            src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
            alt: "jenkins",
          },
        },
        {
          href: "https://www.postman.com/",
          img: {
            src: "https://www.postman.com/_ar-assets/images/favicon-1-48.png",
            alt: "postman",
          },
        },
        {
          href: "https://www.linux.org/",
          img: {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            alt: "linux",
          },
        },
      ],
    },
  ]);
