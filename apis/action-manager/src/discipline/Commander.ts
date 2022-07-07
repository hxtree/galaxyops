import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Commander extends BaseDiscipline {

    protected _name: string = 'Commander';
    protected _description: string = 'Specialize in giving orders to others.';
    protected _category = DisciplineCategory.ARCHETYPE;

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
