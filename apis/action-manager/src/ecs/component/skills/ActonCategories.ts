// Is this more of a system then a component?
export enum ActionCategory {
  MOVEMENT = 'Movement', // changes position
  MENU = 'Menu', // activated via menu
  COMBO = 'Combo', // activated via combo
  INTERACTION = 'Interaction', // in relation to object
  WEAPON = 'Weapon',
  CLASS = 'Class',
  DRIVE = 'Drive',
  PARTY = 'Party',
  GEAR = 'Gear', // are related to the use of gear
  NATURAL = 'Natural', //  actions that do not need to be called to be used ??? These sound like traits or something?
}
