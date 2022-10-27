import {Injectable} from '@nestjs/common';
import * as Skill from './component/skill';

/**
 * skills are determined based on disciplines, afflictions, and equipment
 * they are not correlated to character
 */
@Injectable()
export class SkillService {
  async list(): Promise<any> {
    try {
      const skills: string[] = [];

      skills.push(...Object.keys(Skill.Basic));
      skills.push(...Object.keys(Skill.Drive));
      skills.push(...Object.keys(Skill.Item));
      skills.push(...Object.keys(Skill.Movement));
      skills.push(...Object.keys(Skill.Passive));
      skills.push(...Object.keys(Skill.Spell));
      skills.sort();

      return await Promise.resolve(skills);
    } catch (err) {
      Promise.reject(new Error('Failed to get Skills'));
    }
  }
}
