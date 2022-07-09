import { NonPlayerCharacter } from './NonPlayerCharacter';

class Mischievous extends NonPlayerCharacter {
    protected _name: string = 'Mischievous';
    protected _description: string = 'A black and white cat with yellow eyes.';
    protected _affiliation: Array<string> = [
        'The Keepers of Law'
    ];
}