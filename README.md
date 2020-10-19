# My Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/60975f4b-abeb-4d92-9f6a-3efde408f63d/deploy-status)](https://app.netlify.com/sites/cbun097/deploys)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4f3f26b659324c65a73301ae75d1e5fc)](https://www.codacy.com/manual/cbun097/my-portfolio?utm_source=github.com&utm_medium=referral&utm_content=cbun097/my-portfolio&utm_campaign=Badge_Grade)![](https://github.com/cbun097/my-portfolio/workflows/Checks/badge.svg)

This is my portfolio. Most of the credits for the template goes to [Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio). I highly recommended to check his profile for front-end projects.

## Features

- Eslint/Prettier/Jest configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Amazing icons by [Font Awesome](https://fontawesome.com/)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- Fetches articles from [Dev.to](https://dev.to/)


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
│   └── pages                 # Pages
|   └── locales               # locales translations
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh) and grab your form endpoint url
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Click [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs) and pass in your:
  
  - Formik form endpoint
  - Google recaptcha public key
  - Github token

To Env variables section.

### Locally

Get your API Token for Dev.to [here](https://docs.dev.to/api/#section/Authentication)

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx

DEVTO_TOKEN = xxxxx

```

> You could run `vercel env pull` to get your env variables from Vercel.

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Contributors

- [Claire Bun](https://github.com/cbun097)
- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
