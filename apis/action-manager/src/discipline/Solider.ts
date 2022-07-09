import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Solider extends BaseDiscipline {

    protected _name: string = 'Solider';
    protected _description: string = 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
    protected _category = DisciplineCategory.ARCHETYPE;

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

//     Solider - Solider is a class based upon strict maneuvers. Solider is a classed formed for followers of the United Forces. This class can be taken up by: Gunter, Meeku and Malace.
// Ranks: Cleave
}
