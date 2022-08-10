import { StatusEffects } from "../../StatusEffect";
import { Life, Spirit, Drive, Stats } from "../../character/Attribute";
import { Token } from "../../character/Token";
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