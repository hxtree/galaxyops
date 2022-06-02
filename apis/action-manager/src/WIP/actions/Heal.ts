import {Action} from "./Action";
import {Thing} from "../character/Thing";
import {Effect} from "../Effects";
import {Attribute} from "../Attribute";

class HealAction extends Action {

    protected _id: 0;
    protected _name: "Heal";
    protected _description: "Heal a target";
      
    /* {@inheritDoc} */
    public get waitTime() : number {
        let avgSpeed = 0;
        this._targets.forEach(target => { 
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }

    /* {@inheritDoc} */
    public get executionTime() : number {
        let avgSpeed = 0;
        this._targets.forEach(target => { 
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }

    /* {@inheritDoc} */
    public get recoveryTime() : number {
        let avgSpeed = 0;
        this._targets.forEach(target => { 
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }

    /* {@inheritDoc} */
    public get cooldownTime() : number {
        let avgSpeed = 0;
        this._targets.forEach(target => { 
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }

    /* {@inheritDoc} */
    execute(actors: Array<Thing>, targets: Array<Thing>) {
        let effects: Array<Effect> = [];
        for (let target of targets) {
            let amount = Math.floor(Math.random() * 10); 
            effects.push(new Effect(target.id, Attribute.Life, amount));
        }
        return effects;
    }
}
