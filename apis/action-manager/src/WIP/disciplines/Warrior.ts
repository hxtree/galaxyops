import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class Warrior extends Discipline {

    protected _name: string = 'Warrior';
    protected _description: string = 'Specializzes in combat on the battlefield.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Focus());
    //         Character.actions.push(new Parry());
    //     }

    //     return Effects;
    // }
}
