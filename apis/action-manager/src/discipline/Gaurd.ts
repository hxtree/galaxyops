import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Gaurd extends BaseDiscipline {

    protected _name: string = 'Gaurd';
    protected _description: string = 'Specialize in protection.';
    protected _category = DisciplineCategory.ARCHETYPE;

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Gaurd());
    //         Character.actions.push(new Protect());
    //     }

    //     return Effects;
    // }
}
