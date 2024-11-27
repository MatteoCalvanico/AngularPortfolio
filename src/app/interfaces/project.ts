// Interfaces for all my projects

import { Skill } from "./skill";

export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  otherUrls?: Url[]; // Optional
  technologies: Skill[];
  image: string;
}

export interface Url {
  url: string;
  title: string; // To show instead of the url
}