// Interfaces for all my skills (languages, frameworks, tools, etc.)

export interface Skill {
  name: string;
  icon: string;
  type: keyof typeof skillCategories; // language, framework, tool
}

export const skillCategories = {
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  TOOL: 'tool',
};