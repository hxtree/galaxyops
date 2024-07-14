import { Injectable } from '@nestjs/common';
import { Skill } from '@galaxyops/character-sheet-contracts';
import { Skills } from '../../data/skills';

/**
 * skills are determined based on disciplines, afflictions, and equipment
 * they are not correlated to character
 */
@Injectable()
export class SkillService {
  async find(id: string): Promise<any> {
    try {
      type SkillKey = typeof Skills;
      type SkillType = keyof SkillKey;

      const skillId = id as SkillType;

      return await Promise.resolve({ id, ...Skills[skillId] });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async list(): Promise<any> {
    try {
      const skills: string[] = [];

      skills.push(...Object.keys(Skills));
      skills.sort();

      return await Promise.resolve(skills);
    } catch (err) {
      return Promise.reject(new Error('Failed to get Skills'));
    }
  }
}
