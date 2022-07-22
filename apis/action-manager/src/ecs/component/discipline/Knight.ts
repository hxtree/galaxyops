import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class Knight extends BaseDiscipline {

    protected _name: string = 'Knight';
    protected _description: string = 'A honored fighter for protects the kingdom.';
    protected _category = DisciplineCategory.ARCHETYPE;

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //     }

    //     return Effects;
    // }
}
