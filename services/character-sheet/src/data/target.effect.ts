/** When a Player uses an action that action is relative to an AOE map to
 * Target of a defined type
 */
export enum Target {
  CASTER = 'CASTER', // player
  OPPONENT = 'OPPONENT',
  ALLY = 'ALLY',
  AOE = 'AOE', // MULTIPLE, TODO remove?
}
