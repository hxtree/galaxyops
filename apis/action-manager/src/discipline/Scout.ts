import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Scout extends BaseDiscipline {

    protected _name: string = 'Scout';
    protected _description: string = 'Specialize in moving ahead of the party to gathering information and reconnaissance.';
    protected _category = DisciplineCategory.ARCHETYPE;

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.actions.push(new Scout());
    //         Character.actions.push(new Scan());
    //         Character.actions.push(new Search());
    //     }
    //     return Effects;
    // }

//     Scout – Scouts specialize moving ahead of the party to gathering information and reconnaissance it.
// Actions: Scout, Scan, Search
}
