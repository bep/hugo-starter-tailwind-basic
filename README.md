# hugo-starter-tailwind-basic

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a510ba1-96b4-4834-9a07-913dce4b5061/deploy-status)](https://app.netlify.com/sites/lucid-nightingale-60a4e2/deploys)

WORK IN PROGRESS

A very simple starter set up with [TaildinwCSS](https://tailwindcss.com/) and its [typograhpy plugin](https://tailwindcss.com/docs/typography-plugin) and a build setup using [PostCSS](https://postcss.org/) and PurgeCSS (when running the production build).


This setup can be used both as a starter project and a theme.

## As a project

```bash
npm install
hugo server
```

## As a theme

Import it into your project, and then run:

```bash
hugo mod npm pack
npm install
```

Then run your project as usual.
