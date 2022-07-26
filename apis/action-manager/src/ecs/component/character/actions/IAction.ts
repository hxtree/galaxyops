import { EffectTag } from "./EffectTag";
import { StatusEffect } from "./StatusEffect";
import { Attribute } from "../Attribute";

// Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.


export interface IActionEffect {
    add?: Attribute | StatusEffect,
    remove?: Attribute | StatusEffect,
    quanity?: string,
    chance?: number,
    tags?: Array<EffectTag>
}

/**
 * Actions are decoupled from the actor and target. 
 * Actions are moves that can be used by a character. 
 * They are motor programs that a character learns. 
 * Actions progression is often determined by determined by class.
*/
export interface IAction {
    name: string;
    description: string;
    effect: Array<IActionEffect>;
}



// Stamina Boost Enabled Action - by holding down the button used to make that move you can place more stamina into the move making it a more powerful action. For every 6 seconds you will gain a plus 1.
// Fixed Action A action that must be canceled or will not stop being used

// Movement Actions – actions that are directly related to movement
// Climb – 
// Trek – Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.
// Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
// Jump – (Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina
// Basic – (Square) jump.
// High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.
// Long – (Directional Pad + Press Square) jump a long way.
// Running – (Running + Square) 
// Swim
// Dive
// Run – (Hard press Direction Pad with Stamina) – Move quickly using stamina.
// Walk – (Light press Direction Pad) Move slowly.
// Fly – magic person
// Menu Actions – actions that can only be used through the menu screen
// Appraise – Tell how much an items worth.
// Boast – increase party’s moral
// Combined – make two or more items one.
// Bluff – Tell a lie without being caught
// Sense Bluff – This represented by a little icon on the screen that will tell if someone is trying to bluff you (if you beat their bluff check). 
// Throw - Toss an item from stock to injure enemy.
// Combo Actions
// Combo actions are actions that can only be used by pressing a combination of buttons and then the combination activation button (Square by default) to activate the action
// Blitz – 
// Set Combo – Set a action to be activated from a button combination for quick action selection.
// Interaction Actions
// Interaction Actions are a type of Command Menu actions, which essentially means that they take up a slot on the players Command Menu. Interaction Actions take up the Interaction Slot on the Commnd Menu. What distinguishes Interaction Actions from the rest is that all interaction actions relate to interacting with other objects.
// Counter – make a maneuver in reaction to an enemy’s.
// Disobey – do not follow orders given.
// Parry – use your weapon to block / deflect the enemies attack. 
// Standard Object – Take no action points
// Pick Up / Take
// Open
// Open Lock
// Pull – (Example “Pull Lever”)

// Moveable Object
// Grab
// Push
// Pull
// Lift
// Throw
// Impending Object
// Catch – Catch an item or weapon that has been thrown in your path of travel.
// Reflect
// Parry
// Weapon Actions (Slot 1) 
// Weapon Actions are actions directly related to simple use of the players equipped weapon. Weapons Actions are a type of Command Menu Action which means they can be used in game. They are always located in the first slot of the Basic Command Menu Actions.
// Class Tech
// Weapon Tech 
// Slash – (stamina)
// Throw
// Ward – (spirit) a action that keeps enemies away
// Guard – (stamina) protect from oncoming attacks.
// Charge – Hold attack button down. This uses up Stamina and raise Power of attack.
// Charge – Hold attack button down. This uses up Spirit and raise Power of attack.
// Class Actions (Slot 2)
// Learn

// Summons
// Summons can be called to the battlefield in many different ways and once their can be used in different ways to benefit your party. Just because a summon is present does not mean that it will do as it is told or that your party can control it. Most Summons can only be used with the Command action or through the Interaction Command. Summons have different levels and stats just like characters and the more you use them the more powerful they become.
// Call 
// Vachel – A silver bull that Meeku used to care for as a child.
// Summoner: Meeku
// Attacks – Must use Command to attack.
// Charge
// Can be used with Overdrive combinations
// *Can be upgraded with CART to accommodate large Party.
// Felix - a white lop-eared dwarf rabbit that Loomee adopts as a pet.
// Summoner: Loomee  
// A giant half Luna moth and lyrebird that Faye can summon at will.
// Summoner: Faye
// Passant – beast with one front leg raised facing towards viewers left
// Rampant – heraldry rearing on hind legs

// Issuant

// 	Guardant
// Spells 
// Blizzard
// Inferno
// Twister Gust – Gale - Cyclone
// Landslide
// Tsunami
// Aqua omni
// Actions
// Barrier

// Darkness – decrease the area that your opponent can see.
// Disguise^ – [stamina] Changes appearance and disables command menu until canceled.
// Focus – raise attack and attack percent for following move.
// Grapple – Lowers character and opponents life.
// Hide^ – [stamina] enemy cannot see you
// Mimic – use the same move that was used on you on the enemy.
// Mock – [stamina] make a mocking action to cause Berserk on the opponent.
// Pickpocket – [stamina] steal from enemy
// Protect – [stamina] guard party members behind you.
// Sacrifice – 
// Scan – read enemies stats.
// Scout – [stamina] move ahead of party.
// Seal – hold an enemy off.
// Search – scan nearby area for goods.
// Steal - [stamina] Take item from opponent
// Support
// Drive Actions (Slot 3)
// Berserk - Become completely focused on winning.
// Toxic Thrust - 
// Aerial assault – Traez jumps into air and throws boomerang (jump attack) 
// Party Actions (Slot 4)
// Party – choose to interact with party
// Command – tell other party members what actions to use.
// Formations – get part to move to certain areas.
// Gear Actions (Slot 5)
// Gear actions are quite simply actions that are related to the use of Gear.
// Item - use an item from stock.
// Item – Use one item from stock
// Item (x2) – Use two Items from stock
// Item (x3) – Use three Items from stock
// Tool – (Slot 4)
// Grappling Hook – Enables party to move to higher grounds.
// Trap – (Slot 4) set a trap that will go off when the tile is stood on.
// Set
// Poison
// Explosive
// Time Bomb
// Caltrops – spiked things you throw on the floor
// Disabled – disable a set trap.
// Natural Actions 
// Natural Actions are actions that do not need to be called to be used.
// Intimidate – Causes fear in enemy
// Escape Artist – Bonus when running away from enemy
// Concentration – stay focused
