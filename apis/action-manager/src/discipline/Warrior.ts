import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Warrior extends BaseDiscipline {

    protected _name: string = 'Warrior';
    protected _description: string = 'Specializzes in combat on the battlefield.';
    protected _category = DisciplineCategory.ARCHETYPE;

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Focus());
    //         Character.actions.push(new Parry());
    //     }

    //     return Effects;
    // }
}
