import { IPlayerCharacter } from '../IArchetype';

class LoomeeAngora implements IPlayerCharacter {
    name: 'Loomee Angora';
    description: string = 'A girl created when the Song Maiden left her post to become human.';
    symbolizes: string = 'The Keeper of Heart';
    affiliation: Array<string> = [
        'The Keeper'
    ];
}