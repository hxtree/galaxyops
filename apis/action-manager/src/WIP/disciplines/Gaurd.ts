import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class Gaurd extends Discipline {

    protected _name: string = 'Gaurd';
    protected _description: string = 'Specialize in protection.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Gaurd());
    //         Character.actions.push(new Protect());
    //     }

    //     return Effects;
    // }
}
