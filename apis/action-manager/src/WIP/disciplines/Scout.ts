import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class Scout extends Discipline {

    protected _name: string = 'Scout';
    protected _description: string = 'Specialize in moving ahead of the party to gathering information and reconnaissance.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Scout());
    //         Character.actions.push(new Scan());
    //         Character.actions.push(new Search());
    //     }
    //     return Effects;
    // }
}
