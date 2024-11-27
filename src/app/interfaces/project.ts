// Interfaces for all my projects

import { Skill } from "./skill";

export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  otherUrls?: string[];   // Optional
  technologies: Skill[];
  image: string;
}