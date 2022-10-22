// import {connect} from 'mongoose';
// import {MeekuOni} from './archetype/player';
// import {CharacterSheet} from './model/character-sheet.model';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.axqeoec.mongodb.net/?retryWrites=true&w=majority`;

// run().catch(err => console.log(err));

// async function run() {
//   await connect(connectionString);

//   const charactersheet = new CharacterSheet({
//     archetype: MeekuOni,
//   });
//   await charactersheet.save();

//   console.log(charactersheet.archetype);
// }
