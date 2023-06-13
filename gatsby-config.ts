import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path')

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tyamap.com`,
    description: 'tyamap Homepage',
    image: '/icon.png',
    siteUrl: `https://www.tyamap.com`,
    social: {
      twitter: `@tyamap03`,
      github: 'tyamap',
    },
    profile: {
      id: 'tyamap',
      name: 'Tomoya Yamashita',
      labels: ['web developer'],
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mantine',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src')
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
};

export default config;
