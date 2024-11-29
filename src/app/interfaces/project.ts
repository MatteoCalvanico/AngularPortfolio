// Interfaces for all my projects

import { Skill } from "./skill";

/**
 * Represents a project in the portfolio.
 */
export interface Project {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * A brief description of the project.
   */
  description: string;

  /**
   * The URL to the project's GitHub repository.
   */
  githubUrl: string;

  /**
   * An optional array of other URLs related to the project.
   */
  otherUrls?: Url[];

  /**
   * A list of technologies used in the project.
   */
  technologies: Skill[];

  /**
   * The URL to an image representing the project.
   */
  image: string;
}

/**
 * Represents a URL with an associated title.
 */
export interface Url {
  url: string;
  title: string; // To show instead of the url
}