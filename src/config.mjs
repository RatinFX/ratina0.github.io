import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'RatinA0 Portfolio',

  origin: 'https://ratina0.github.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'RatinA0 Portfolio',
  description: 'RatinA0 Portfolio made with Astro 🚀',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'CET',
  }),

  projects: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'projects', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, projects: undefined };
export const PROJECTS = CONFIG.projects;
export const DATE_FORMATTER = CONFIG.dateFormatter;
