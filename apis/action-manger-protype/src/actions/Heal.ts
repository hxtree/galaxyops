import {Action} from "./Action";
import {Thing} from "../Thing";
import {Effect} from "../Effects";
import {Attribute} from "../Attribute";

class HealAction extends Action {

    protected _id: 0;
    protected _name: "Heal";
    protected _description: "Heal a target";
    
    /* {@inheritDoc} */
    public get waitTime() : number {
        return 1; // date time now + x ?
    }

    /* {@inheritDoc} */
    public get executionTime() : number {
        return 2;
    }

    /* {@inheritDoc} */
    public get recoveryTime() : number {
        return 3;
    }

    /* {@inheritDoc} */
    public get cooldownTime() : number {
        return 10;
    }

    /* {@inheritDoc} */
    execute(actors: Array<Thing>, targets: Array<Thing>) {
        let effects: Array<Effect> = [];
        for (let target of targets) {
            effects.push(new Effect(target.id, Attribute.Life, 10));
        }
        return effects;
    }
}
