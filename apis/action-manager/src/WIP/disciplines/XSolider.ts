import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class XSolider extends Discipline {

    protected _name: string = 'XSolider';
    protected _description: string = 'Soldiers that have gone against their teachings to gain new skills.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.Life.max += 10;
    //         Character.actions.push(new Liberate());
    //         Character.actions.push(new Disobey());
    //         Character.actions.push(new GreaterCleave());
    //     }
    //     return Effects;
    // }
}
