// interface for all my experiences (jobs, internships, etc.)

import { Skill } from "./skill";

/**
 * Represents a professional experience.
 */
export interface Experience {
  /**
   * The title of the position held.
   */
  title: string;

  /**
   * The name of the company where the experience took place.
   */
  company: string;

  /**
   * The location of the company.
   */
  location: string;

  /**
   * The start date of the experience.
   */
  startDate: string;

  /**
   * The end date of the experience.
   */
  endDate: string;

  /**
   * A description of the responsibilities and achievements during the experience.
   */
  description: string;

  /**
   * A list of technologies used during the experience.
   */
  technologies: Skill[];

  /**
   * A URL or path to an image representing the experience or company.
   */
  image: string;
}