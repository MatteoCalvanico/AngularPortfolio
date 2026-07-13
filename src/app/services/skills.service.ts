import { Injectable } from '@angular/core';
import { Skill, skillCategories } from '../interfaces/skill';

/**
 * Service to manage skills data.
 *
 * @remarks
 * This service provides methods to retrieve skills data. The skills data is currently hardcoded
 * but can be moved to a JSON file for better maintainability.
 *
 * @example
 * ```typescript
 * import { SkillsService } from './skills.service';
 *
 * const skillsService = new SkillsService();
 * const allSkills = skillsService.getAllSkills();
 * const kotlinSkill = skillsService.getSkillByName('Kotlin');
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //Template:
  /*
    {
      name: '',
      icon: '',
      type: skillCategories.LANGUAGE,
    },
  */

  // TODO: use a json file to store the skills
  allSkills: Skill[] = [
    {
      name: 'Kotlin',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/kotlin/kotlin-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Gradle',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/gradle/gradle-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Android Studio',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/androidstudio/androidstudio-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Arduino',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/arduino/arduino-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/bootstrap/bootstrap-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/c/c-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cplusplus/cplusplus-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/csharp/csharp-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'DBeaver',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/dbeaver/dbeaver-original.svg',
      type: 'TOOL',
    },
    {
      name: 'DotNet',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/dot-net/dot-net-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.simpleicons.org/express/FFFFFF',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/figma/figma-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Google Cloud',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/googlecloud/googlecloud-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/git/git-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/html5/html5-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mysql/mysql-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nodejs/nodejs-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'OpenCV',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/opencv/opencv-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Pandas',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/pandas/pandas-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postman/postman-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Pytorch',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/pytorch/pytorch-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Blazor',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/blazor/blazor-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Sass',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/sass/sass-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Scikit-Learn',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/scikitlearn/scikitlearn-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'SQLite',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/sqlite/sqlite-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Tensorflow',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tensorflow/tensorflow-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Vue.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/docker/docker-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Jenkins',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/jenkins/jenkins-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Godot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/godot/godot-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/angular/angular-original.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Spring',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/spring/spring-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Mongoose',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mongoose/mongoose-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Fastify',
      icon: 'https://cdn.simpleicons.org/fastify/FFFFFF',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Zod',
      icon: 'https://cdn.simpleicons.org/zod/3068B7',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Kong',
      icon: 'https://cdn.simpleicons.org/kong/FFFFFF',
      type: skillCategories.TOOL,
    },
  ];

  /**
   * Retrieves all skills.
   *
   * @returns An array of all skills.
   *
   * @example
   * ```typescript
   * const allSkills = skillsService.getAllSkills();
   * ```
   */
  getAllSkills(): Skill[] {
    return this.allSkills;
  }

  /**
   * Retrieves a skill by its name.
   *
   * @param name - The name of the skill to retrieve.
   * @returns The skill object if found, otherwise `undefined`.
   *
   * @example
   * ```typescript
   * const kotlinSkill = skillsService.getSkillByName('Kotlin');
   * ```
   */
  getSkillByName(name: string): Skill | null {
    return this.allSkills.find((skill) => skill.name === name) || null;
  }

  /**
   * Retrieves all skills except those specified in the excludedSkills array.
   *
   * @param excludedSkills - An array of skill names to be excluded from the result.
   * @returns An array of Skill objects that do not include the excluded skill names.
   */
  getAllSkillsExcept(excludedSkills: string[]): Skill[] {
    return this.allSkills.filter(
      (skill) => !excludedSkills.includes(skill.name),
    );
  }
}
