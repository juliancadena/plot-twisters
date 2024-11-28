import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://juliancadena.github.io", // replace this with your deployed domain
  author: "Ilse Angulo",
  profile: "",
  desc: "A blog about writing, reading, and storytelling.",
  title: "Plot Twisters",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showTags: false,
  showAbout: false,
  editPost: {},
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];
