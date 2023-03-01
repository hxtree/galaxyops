// import {BaseAction, ActionCategory} from './BaseAction';
// import {Thing} from '../character/Thing';
// import {Effect} from '../../../component/e';
// import {Attribute} from '../../../component/attribute';

// class HealAction extends BaseAction {
//   protected _id: 0;
//   protected _name: 'Heal';
//   protected _description: 'Heal a target';
//   protected _category: ActionCategory.MENU;

//   /* {@inheritDoc} */
//   public get waitTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }

//   /* {@inheritDoc} */
//   public get executionTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }

//   /* {@inheritDoc} */
//   public get recoveryTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }

//   /* {@inheritDoc} */
//   public get cooldownTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }

//   /* {@inheritDoc} */
//   execute(actors: Array<Thing>, targets: Array<Thing>) {
//     let effects: Array<Effect> = [];
//     for (let target of targets) {
//       let amount = Math.floor(Math.random() * 10);
//       effects.push(new Effect(target.id, Attribute.Life, amount));
//     }
//     return effects;
//   }
// }
