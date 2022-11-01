import {Injectable} from '@nestjs/common';
import {Skill, SkillType} from '../../value-object/skill';

/**
 * skills are determined based on disciplines, afflictions, and equipment
 * they are not correlated to character
 */
@Injectable()
export class SkillService {
  async find(id: string): Promise<any> {
    try {
      const skill = (id: string) => {
        type SkillKey = typeof Skill;
        type SkillType = keyof SkillKey;

        const skillId: SkillType = id as SkillType;

        return Skill[skillId];
      };
      const result = {id: id, ...skill(id)};

      return await Promise.resolve(result);
    } catch (err) {
      Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async list(): Promise<any> {
    try {
      const skills: string[] = [];

      skills.push(...Object.keys(Skill));
      skills.sort();

      return await Promise.resolve(skills);
    } catch (err) {
      Promise.reject(new Error('Failed to get Skills'));
    }
  }
}
