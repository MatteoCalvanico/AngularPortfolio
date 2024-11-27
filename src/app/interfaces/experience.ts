// interface for all my experiences (jobs, internships, etc.)

import { Skill } from "./skill";

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: Skill[];
  image: string;
}