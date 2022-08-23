/**
 * Skills are abilities that are not actions
 */
export interface Skill {
  name: string;
}

class DualWeld implements Skill {
  name: 'Dual Weld';
  description: 'Can use two one handed weapons at once.';
  // " Both malace and penny can learn this.
}
