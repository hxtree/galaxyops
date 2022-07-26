import { StatusEffects } from "../../actions/StatusEffect";
import { Life, Spirit, Drive, Stats } from "../../Attribute";
import { Token } from "../Token";
import { Traits } from "../../Trait";
import { IPlayerCharacter } from "../IArchetype";

class TraezUthsha implements IPlayerCharacter {
    name: string = 'Traez Uthsha';
    description: string = '';
    life: Life;
    drive: Drive;
    spirit: Spirit;
    stats: Stats;
    traits: Traits;
    statusEffects: StatusEffects;
    token: Token;
}