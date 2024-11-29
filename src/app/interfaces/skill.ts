// Interfaces for all my skills (languages, frameworks, tools, etc.)

/**
 * Represents a skill with a name, icon, and type.
 * 
 * @interface Skill
 * @property {string} name - The name of the skill.
 * @property {string} icon - The icon representing the skill.
 * @property {keyof typeof skillCategories} type - The type of the skill, which can be a language, framework, or tool.
 */
export interface Skill {
  name: string;
  icon: string;
  type: keyof typeof skillCategories; // language, framework, tool
}

export enum skillCategories {

  LANGUAGE = 'LANGUAGE',

  FRAMEWORK = 'FRAMEWORK',

  TOOL = 'TOOL'

};