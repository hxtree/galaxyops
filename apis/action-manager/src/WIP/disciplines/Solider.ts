import { Discipline } from '../contracts/Discipline';
import { Effects } from '../Effects';

class Solider extends Discipline {

    protected _name: string = 'Solider';
    protected _description: string = 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.Life.max += 10;
    //         Character.actions.push(new Cleave());
    //     }

    //     if(this.level > 5) {
    //         Character.Life.max += 10;
    //         Character.speed += 5;
    //     }

    //     return Effects;
    // }
}
