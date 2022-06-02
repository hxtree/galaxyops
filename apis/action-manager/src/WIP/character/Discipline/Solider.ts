import { Discipline } from './Discipline';
import { Effects } from './../Effects';

class Solider extends Discipline {

    get effects(): Array<Effect> {
        let effects = [];

        if(this.level > 0) {
            Character.Life.max += 10;
            Character.actions.push(new HealAction());
        }

        if(this.level > 5) {
            Character.Life.max += 10;
            Character.speed += 5;
        }

        return Effects;
    }
}
