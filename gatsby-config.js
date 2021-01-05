module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://yusufvanwala.netlify.app/`,
    // Your Name
    name: 'Yusuf Vanwala',
    // Main Site Title
    title: `Yusuf Vanwala | Problem Solver`,
    // Description that goes under your name in main bio
    description: 'Software Engineer Intern | Problem Solver',
    // Optional: Twitter account handle
    author: `@YusufVanwala`,
    // Optional: Github account URL
    github: `https://github.com/vanyusuf1`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/yusufvan/`,
    // Content of the About Me section
    about: `I am an IT student currently in the final year of BE program, with well-cultivated knowledge in Web Development, App Development, Data Structures and Algorithms. I look forward to working in a challenging environment aimed at increasing my problem-solving skills and to utilize them for achieving the target and developing the best performance of the organization.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'clinikkHealthcareTV',
        description:
          'A video streaming service which helps users/subscribers get access to rich health-related content.',
        link: 'https://github.com/vanyusuf1/clinikkHealthcareTV',
      },
      {
        name: 'Konfhub Conference API Tweaking',
        description:
          'An API task (which provides the list of upcoming technical conferences) tweaker program written in python.',
        link: 'https://github.com/vanyusuf1/Konfhub-Conference-API-Tweaking',
      },
      {
        name: 'yLurrn 2.0 Prototype',
        description:
          'This is a simple product manager application built off Django (including the Django REST Framework for API CRUD operations) and React.',
        link: 'https://github.com/vanyusuf1/yLurrn-2.0-Prototype',
      },
      {
        name: 'Excerpt Extractor',
        description:
          'A JS script to extract words/sentences/nouns from a piece of excerpt with advanced operations',
        link: 'https://github.com/vanyusuf1/Excerpt-Extractor',
      },
      {
        name: 'Hyper Tee Mart',
        description:
          'The website displays a wide range of clothing products. One stop solution for buying your favourite products.',
        link: 'https://github.com/vanyusuf1/HyperTEEMart',
      },
      {
        name: 'CRUD-RESTFul-API-development(springboot)',
        description: 'Built a REST API service using spring dependencies.',
        link: 'https://github.com/vanyusuf1/CRUD-RESTFul-API-development',
      },
      {
        name: 'Controlled Conduct Employee System',
        description: 'Website to manage employee records.',
        link: 'https://github.com/vanyusuf1/Controlled-Conduct-Employee-System',
      },
      {
        name: 'Analytical Webmapping',
        description:
          'Created a Leaflet web map with Python and the Folium library.',
        link: 'https://github.com/vanyusuf1/Analytical-Webmapping',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'GrowthPal',
        description: 'Software Engineer Intern, Dec 2020 - Present',
        link: 'https://www.jpmorganchase.com/',
      },
      {
        name: 'JP MORGAN CHASE',
        description: 'SWE Virtual Experience, A WEEK Programme',
        link: 'https://www.jpmorganchase.com/',
      },
      {
        name: 'EngineersConnect',
        description: 'Full-Stack Intern, May 2020 - June 2020',
        link: 'https://engineersconnect.com/',
      },
      {
        name: 'Stackzeal',
        description: 'Full-Stack Intern, Feb 2020 - June 2020',
        link: 'https://www.stackzeal.com/',
      },
      {
        name: 'BSNL',
        description: 'Telecom Trainee, Jan 2019 - Jan 2019',
        link: 'https://www.bsnl.co.in/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming',
        description:
          'JavaScript (ES6+), Python, Cpp, Java, PHP, UNIX/LINUX Shell',
      },
      {
        name: 'Technolgies',
        description:
          'Node.js, Express.js, React, Django, Spring Boot, PHP, Amazon Web Services(AWS)',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description: 'API design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
