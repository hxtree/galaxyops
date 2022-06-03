import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class Commander extends Discipline {

    protected _name: string = 'Commander';
    protected _description: string = 'Specialize in giving orders to others.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Order());
    //         Character.actions.push(new Formations());
    //         Character.actions.push(new Boast());
    //     }

    //     return Effects;
    // }
}
