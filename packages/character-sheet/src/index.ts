import {connect} from 'mongoose';
import {MeekuOni} from './component/archetype/PlayerCharacter';
import {CharacterSheet} from './model/character-sheet.model';

run().catch(err => console.log(err));

async function run() {
  await connect('mongodb://localhost:27017/test');

  const charactersheet = new CharacterSheet({
    archetype: MeekuOni,
  });
  await charactersheet.save();

  console.log(charactersheet.archetype);
}
