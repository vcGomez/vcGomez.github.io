import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://vcgomez.github.io", // your site url
  title: "Victor's Notes",
  slogan: "Notes on Tech, Code, and Learning",
  description: "A personal space for thoughts on tech, learning, and whatever else catches my interest. No agenda, just curiosity.",
  social: {
    github: "", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/victor-gomez-3a549237/", // leave empty if you don't want to show the linkedin
    email: "325nff5i6@mozmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
