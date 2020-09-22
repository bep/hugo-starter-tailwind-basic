# hugo-starter-tailwind-basic
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
