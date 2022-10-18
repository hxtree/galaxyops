"use strict";
// export enum Operator {
//   ADD = 'ADD',
//   MULTIPLY = 'MULTIPLY',
//   SUBTRACT = 'SUBTRACT',
//   DIVIDE = 'DIVIDE',
// }
// export enum Effect {
//   WEAK = 'Weak', // Weakness, increases damage taken by the damage type.
//   RESIST = 'Resist', // Resistance. decreases damage taken by the damage type.
//   ABSORB = 'Absorb', // Absorption, reduces damage type area of effect to nearby targets.
//   IMMUNE = 'Immune', // Immunity, completely blocks damage taken by the damage type.
//   HEAL = 'Heal', // Healing, reverses damage taken into healing by the damage type.
// }
// /**
//  * Trait indicates a characters single resistances or weakness to type of effect
//  * Trait-based resistances and weaknesses are calculated by the game engine based on whether tag is associated
//  * with action being applied to target character.
//  * Traits are stackable; a character can have multiple traits with the same ModifierType.
//  *
//  * e.g.
//  * RESIST FIRE ADD 50
//  * WEAK ICE MULTIPLY 0.5
//  * IMMUNE BLADE NULL NULL
//  * IMMUNE POSION NULL NULL
//  * RESISTANT SPEED_DECREASE DIVIDE 0.5
//  * HEAL LIFE_INCREASE MULTIPLY 1.25
//  */
// @Entity()
// export class Trait {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//   @ManyToOne(() => Character, character => character.traits)
//   character: Character;
//   @Column({
//     type: 'enum',
//     enum: Effect,
//   })
//   effect: Effect;
//   @Column({
//     type: 'enum',
//     enum: ModifierTag,
//   })
//   modifier: ModifierTag;
//   @Column({
//     type: 'enum',
//     enum: Operator,
//   })
//   operator: Operator;
//   @Column()
//   value: number;
//   @UpdateDateColumn()
//   updatedAt: Date;
//   @CreateDateColumn()
//   createdAt: Date;
//   public toJSON(): any {
//     return {
//       id: this.id,
//       character: this.character,
//       modifier: this.modifier,
//       operator: this.operator,
//       value: this.value,
//       updateAt: this.updatedAt,
//       createdAt: this.createdAt,
//     };
//   }
//   /**
//    * "Resistant to fire (-70%)"
//    * "Weak to cold (x2.5)"
//    * "Immune to frost"
//    */
//   public toString(): string {
//     let description = '';
//     let modifier = this.modifier.toString().toLowerCase();
//     switch (this.effect) {
//       case Effect.WEAK:
//         description = `Weak to ${modifier}`;
//         break;
//       case Effect.RESIST:
//         description = `Resistant to ${modifier}`;
//         break;
//       case Effect.ABSORB:
//         description = `Absorbs ${modifier}`;
//         break;
//       case Effect.IMMUNE:
//         description = `Immune to ${modifier}`;
//         return description;
//       case Effect.HEAL:
//         description = `Heals ${modifier}`;
//         break;
//     }
//     // todo revisit this
//     switch (this.operator) {
//       case Operator.ADD:
//         description += ` (+${modifier})`;
//         break;
//       case Operator.MULTIPLY:
//         description += ` (x${modifier})`;
//         break;
//       case Operator.SUBTRACT:
//         description += ` (-${modifier})`;
//         break;
//       case Operator.DIVIDE:
//         description += ` (-${modifier}%)`;
//         break;
//     }
//     return description;
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3lzdGVtL1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3ZCLElBQUk7QUFFSix1QkFBdUI7QUFDdkIsMkVBQTJFO0FBQzNFLGlGQUFpRjtBQUNqRiw0RkFBNEY7QUFDNUYsdUZBQXVGO0FBQ3ZGLHNGQUFzRjtBQUN0RixJQUFJO0FBRUosTUFBTTtBQUNOLG1GQUFtRjtBQUNuRixpSEFBaUg7QUFDakgsb0RBQW9EO0FBQ3BELDRGQUE0RjtBQUM1RixLQUFLO0FBQ0wsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qix5Q0FBeUM7QUFDekMsc0NBQXNDO0FBQ3RDLE1BQU07QUFDTixZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLG9DQUFvQztBQUNwQyxnQkFBZ0I7QUFFaEIsK0RBQStEO0FBQy9ELDBCQUEwQjtBQUUxQixjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixPQUFPO0FBQ1Asb0JBQW9CO0FBRXBCLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLE9BQU87QUFDUCwyQkFBMkI7QUFFM0IsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEIsT0FBTztBQUNQLHdCQUF3QjtBQUV4QixjQUFjO0FBQ2QsbUJBQW1CO0FBRW5CLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFFckIsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUVyQiwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0Isa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxTQUFTO0FBQ1QsTUFBTTtBQUVOLFFBQVE7QUFDUixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1IsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1Qiw2REFBNkQ7QUFFN0QsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQiwrQ0FBK0M7QUFDL0MsaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QixvREFBb0Q7QUFDcEQsaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QiwrQ0FBK0M7QUFDL0MsaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QixpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCLDBCQUEwQjtBQUMxQiw2Q0FBNkM7QUFDN0MsaUJBQWlCO0FBQ2pCLFFBQVE7QUFFUiwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ2pCLGdDQUFnQztBQUNoQyw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ2pCLGdDQUFnQztBQUNoQyw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5Qiw2Q0FBNkM7QUFDN0MsaUJBQWlCO0FBQ2pCLFFBQVE7QUFFUiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZW51bSBPcGVyYXRvciB7XG4vLyAgIEFERCA9ICdBREQnLFxuLy8gICBNVUxUSVBMWSA9ICdNVUxUSVBMWScsXG4vLyAgIFNVQlRSQUNUID0gJ1NVQlRSQUNUJyxcbi8vICAgRElWSURFID0gJ0RJVklERScsXG4vLyB9XG5cbi8vIGV4cG9ydCBlbnVtIEVmZmVjdCB7XG4vLyAgIFdFQUsgPSAnV2VhaycsIC8vIFdlYWtuZXNzLCBpbmNyZWFzZXMgZGFtYWdlIHRha2VuIGJ5IHRoZSBkYW1hZ2UgdHlwZS5cbi8vICAgUkVTSVNUID0gJ1Jlc2lzdCcsIC8vIFJlc2lzdGFuY2UuIGRlY3JlYXNlcyBkYW1hZ2UgdGFrZW4gYnkgdGhlIGRhbWFnZSB0eXBlLlxuLy8gICBBQlNPUkIgPSAnQWJzb3JiJywgLy8gQWJzb3JwdGlvbiwgcmVkdWNlcyBkYW1hZ2UgdHlwZSBhcmVhIG9mIGVmZmVjdCB0byBuZWFyYnkgdGFyZ2V0cy5cbi8vICAgSU1NVU5FID0gJ0ltbXVuZScsIC8vIEltbXVuaXR5LCBjb21wbGV0ZWx5IGJsb2NrcyBkYW1hZ2UgdGFrZW4gYnkgdGhlIGRhbWFnZSB0eXBlLlxuLy8gICBIRUFMID0gJ0hlYWwnLCAvLyBIZWFsaW5nLCByZXZlcnNlcyBkYW1hZ2UgdGFrZW4gaW50byBoZWFsaW5nIGJ5IHRoZSBkYW1hZ2UgdHlwZS5cbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBUcmFpdCBpbmRpY2F0ZXMgYSBjaGFyYWN0ZXJzIHNpbmdsZSByZXNpc3RhbmNlcyBvciB3ZWFrbmVzcyB0byB0eXBlIG9mIGVmZmVjdFxuLy8gICogVHJhaXQtYmFzZWQgcmVzaXN0YW5jZXMgYW5kIHdlYWtuZXNzZXMgYXJlIGNhbGN1bGF0ZWQgYnkgdGhlIGdhbWUgZW5naW5lIGJhc2VkIG9uIHdoZXRoZXIgdGFnIGlzIGFzc29jaWF0ZWRcbi8vICAqIHdpdGggYWN0aW9uIGJlaW5nIGFwcGxpZWQgdG8gdGFyZ2V0IGNoYXJhY3Rlci5cbi8vICAqIFRyYWl0cyBhcmUgc3RhY2thYmxlOyBhIGNoYXJhY3RlciBjYW4gaGF2ZSBtdWx0aXBsZSB0cmFpdHMgd2l0aCB0aGUgc2FtZSBNb2RpZmllclR5cGUuXG4vLyAgKlxuLy8gICogZS5nLlxuLy8gICogUkVTSVNUIEZJUkUgQUREIDUwXG4vLyAgKiBXRUFLIElDRSBNVUxUSVBMWSAwLjVcbi8vICAqIElNTVVORSBCTEFERSBOVUxMIE5VTExcbi8vICAqIElNTVVORSBQT1NJT04gTlVMTCBOVUxMXG4vLyAgKiBSRVNJU1RBTlQgU1BFRURfREVDUkVBU0UgRElWSURFIDAuNVxuLy8gICogSEVBTCBMSUZFX0lOQ1JFQVNFIE1VTFRJUExZIDEuMjVcbi8vICAqL1xuLy8gQEVudGl0eSgpXG4vLyBleHBvcnQgY2xhc3MgVHJhaXQge1xuLy8gICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4vLyAgIGlkOiBzdHJpbmc7XG5cbi8vICAgQE1hbnlUb09uZSgoKSA9PiBDaGFyYWN0ZXIsIGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIudHJhaXRzKVxuLy8gICBjaGFyYWN0ZXI6IENoYXJhY3RlcjtcblxuLy8gICBAQ29sdW1uKHtcbi8vICAgICB0eXBlOiAnZW51bScsXG4vLyAgICAgZW51bTogRWZmZWN0LFxuLy8gICB9KVxuLy8gICBlZmZlY3Q6IEVmZmVjdDtcblxuLy8gICBAQ29sdW1uKHtcbi8vICAgICB0eXBlOiAnZW51bScsXG4vLyAgICAgZW51bTogTW9kaWZpZXJUYWcsXG4vLyAgIH0pXG4vLyAgIG1vZGlmaWVyOiBNb2RpZmllclRhZztcblxuLy8gICBAQ29sdW1uKHtcbi8vICAgICB0eXBlOiAnZW51bScsXG4vLyAgICAgZW51bTogT3BlcmF0b3IsXG4vLyAgIH0pXG4vLyAgIG9wZXJhdG9yOiBPcGVyYXRvcjtcblxuLy8gICBAQ29sdW1uKClcbi8vICAgdmFsdWU6IG51bWJlcjtcblxuLy8gICBAVXBkYXRlRGF0ZUNvbHVtbigpXG4vLyAgIHVwZGF0ZWRBdDogRGF0ZTtcblxuLy8gICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4vLyAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuLy8gICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIGlkOiB0aGlzLmlkLFxuLy8gICAgICAgY2hhcmFjdGVyOiB0aGlzLmNoYXJhY3Rlcixcbi8vICAgICAgIG1vZGlmaWVyOiB0aGlzLm1vZGlmaWVyLFxuLy8gICAgICAgb3BlcmF0b3I6IHRoaXMub3BlcmF0b3IsXG4vLyAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbi8vICAgICAgIHVwZGF0ZUF0OiB0aGlzLnVwZGF0ZWRBdCxcbi8vICAgICAgIGNyZWF0ZWRBdDogdGhpcy5jcmVhdGVkQXQsXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIC8qKlxuLy8gICAgKiBcIlJlc2lzdGFudCB0byBmaXJlICgtNzAlKVwiXG4vLyAgICAqIFwiV2VhayB0byBjb2xkICh4Mi41KVwiXG4vLyAgICAqIFwiSW1tdW5lIHRvIGZyb3N0XCJcbi8vICAgICovXG4vLyAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuLy8gICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnO1xuLy8gICAgIGxldCBtb2RpZmllciA9IHRoaXMubW9kaWZpZXIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4vLyAgICAgc3dpdGNoICh0aGlzLmVmZmVjdCkge1xuLy8gICAgICAgY2FzZSBFZmZlY3QuV0VBSzpcbi8vICAgICAgICAgZGVzY3JpcHRpb24gPSBgV2VhayB0byAke21vZGlmaWVyfWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBFZmZlY3QuUkVTSVNUOlxuLy8gICAgICAgICBkZXNjcmlwdGlvbiA9IGBSZXNpc3RhbnQgdG8gJHttb2RpZmllcn1gO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGNhc2UgRWZmZWN0LkFCU09SQjpcbi8vICAgICAgICAgZGVzY3JpcHRpb24gPSBgQWJzb3JicyAke21vZGlmaWVyfWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBFZmZlY3QuSU1NVU5FOlxuLy8gICAgICAgICBkZXNjcmlwdGlvbiA9IGBJbW11bmUgdG8gJHttb2RpZmllcn1gO1xuLy8gICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4vLyAgICAgICBjYXNlIEVmZmVjdC5IRUFMOlxuLy8gICAgICAgICBkZXNjcmlwdGlvbiA9IGBIZWFscyAke21vZGlmaWVyfWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cblxuLy8gICAgIC8vIHRvZG8gcmV2aXNpdCB0aGlzXG4vLyAgICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG4vLyAgICAgICBjYXNlIE9wZXJhdG9yLkFERDpcbi8vICAgICAgICAgZGVzY3JpcHRpb24gKz0gYCAoKyR7bW9kaWZpZXJ9KWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBPcGVyYXRvci5NVUxUSVBMWTpcbi8vICAgICAgICAgZGVzY3JpcHRpb24gKz0gYCAoeCR7bW9kaWZpZXJ9KWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBPcGVyYXRvci5TVUJUUkFDVDpcbi8vICAgICAgICAgZGVzY3JpcHRpb24gKz0gYCAoLSR7bW9kaWZpZXJ9KWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBPcGVyYXRvci5ESVZJREU6XG4vLyAgICAgICAgIGRlc2NyaXB0aW9uICs9IGAgKC0ke21vZGlmaWVyfSUpYDtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuLy8gICB9XG4vLyB9XG4iXX0=