import {INonPlayerCharacter} from '../IArchetype';

export class Mischievous implements INonPlayerCharacter {
  name: 'Mischievous';
  description: 'A black and white cat with yellow eyes.';
  affiliation: Array<string> = ['The Keepers of Law'];
}
