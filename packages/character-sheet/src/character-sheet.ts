export class CharacterSheet {
  // base character not stored in database
  archetype: MeekuOni;

  // the values actually stored in the database are the raw stats
  // characters actual stats vary based on disciplines, afflictions, and equipment
  rawStats = [];

  /**
   * skills are determined based on disciplines, afflictions, and equipment
   * they are not correlated to character
   */
  getSkills() {}
}
