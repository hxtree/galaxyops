import { BaseDiscipline, DisciplineCategory } from './BaseDiscipline';

class XSolider extends BaseDiscipline {

    protected _name: string = 'XSolider';
    protected _description: string = 'Soldiers that have gone against their teachings to gain new skills.';
    protected _category = DisciplineCategory.ARCHETYPE;

    // get effects(): Array<Effect> {
    //     let effects = [];

    //     if(this.level > 0) {
    //         Character.Life.max += 10;
    //         Character.actions.push(new Liberate());
    //         Character.actions.push(new Disobey());
    //         Character.actions.push(new GreaterCleave());
    //     }
    //     return Effects;
    // }

    // X-Solider – X-Soldiers are soldiers that have gone against their teachings to gain new more powerful actions.
    // Actions: Liberate, Disobey, Cleave lv2
}
