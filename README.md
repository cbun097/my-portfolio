# My Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/60975f4b-abeb-4d92-9f6a-3efde408f63d/deploy-status)](https://app.netlify.com/sites/cbun097/deploys)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4f3f26b659324c65a73301ae75d1e5fc)](https://www.codacy.com/manual/cbun097/my-portfolio?utm_source=github.com&utm_medium=referral&utm_content=cbun097/my-portfolio&utm_campaign=Badge_Grade)![](https://github.com/cbun097/my-portfolio/workflows/Checks/badge.svg)

This is my portfolio. Most of the credits for the template goes to [Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio). I highly recommended to check his profile for front-end projects.

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Amazing icons by [Font Awesome](https://fontawesome.com/)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- Fetches articles from [Dev.to](https://dev.to/)

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages                   # Pages
|   └── locales                   # locales translations
└── static                  # favicon & Netlify redirects
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

Get your API Token for Dev.to [here](https://docs.dev.to/api/#section/Authentication)

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx

DEVTO_TOKEN = xxxxx

```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Claire Bun](https://github.com/cbun097)
- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
