"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npc = exports.NPCList = void 0;
const trait_1 = require("../component/trait");
const discipline_1 = require("../component/discipline");
const tag_effect_1 = require("../component/tag.effect");
/**
 * A human or non-humanoid character.
 */
var NPCList;
(function (NPCList) {
    /**
     * Keepers
     */
    NPCList.Mischievous = {
        firstName: 'Mischievous',
        lastName: 'Piebald',
        alias: ['Keeper of Law'],
        symbolizes: 'Law',
        affiliation: ['The Keepers'],
        description: 'A black and white cat with yellow eyes.',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    NPCList.Janus = {
        firstName: 'Janus',
        lastName: 'Persian',
        alias: ['Keeper of Time', 'Wise-Kitty'],
        symbolizes: 'Time',
        affiliation: ['The Keepers'],
        description: 'A orange old perian cat',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    NPCList.Loomee = {
        firstName: 'Loomee',
        lastName: 'Angora',
        description: 'Blonde girl wearing white linen',
        backstory: 'A girl created when the Song Maiden left her post to become human.',
        alias: ['Keeper of Heart', 'Song Maiden'],
        symbolizes: 'Heart',
        affiliation: ['The Keepers'],
        potentialDisciplines: [
            discipline_1.Discipline.CHEERLEADER,
            discipline_1.Discipline.MADIEN,
            discipline_1.Discipline.KEEPER,
            discipline_1.Discipline.COOK,
            discipline_1.Discipline.HEALER,
            discipline_1.Discipline.SAGE,
            discipline_1.Discipline.GUARDIAN,
        ],
    };
    /**
     *
     */
    NPCList.GaaliRuin = {
        firstName: 'Gaali',
        lastName: 'Ruin',
        backstory: 'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.',
        potentialDisciplines: [
            discipline_1.Discipline.BARD,
            discipline_1.Discipline.DUELIST,
            discipline_1.Discipline.KNIGHT,
            discipline_1.Discipline.RUNE_KING,
            discipline_1.Discipline.ROYALTY,
            // - Nobel
            // - Duke
            // - King
            discipline_1.Discipline.HERO,
            discipline_1.Discipline.RUNE_KING,
            discipline_1.Discipline.WARRIOR,
        ],
        traits: [
            {
                // innate prociency with sword
                tag: tag_effect_1.EffectTag.SWORD,
                modifier: trait_1.Effect.RESIST,
                quantity: 0.5,
                operator: trait_1.Operator.DIVIDE,
            },
        ],
    };
    /**
     * Sins
     */
    NPCList.Vallon = {
        firstName: 'Vallon',
        lastName: 'Oni',
        description: 'White hair',
    };
    NPCList.Mahdi = {
        firstName: 'Mahdi',
        lastName: 'Tsia',
        description: "Malace's brother",
    };
    NPCList.Lawzon = {
        firstName: 'Lawzon',
        description: 'Grey',
        history: 'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
    };
    NPCList.Spider = {
        firstName: 'Spider',
        description: 'A spider',
    };
})(NPCList = exports.NPCList || (exports.NPCList = {}));
const npc = (id) => {
    const npcId = id;
    const archetype = NPCList[npcId];
    return archetype;
};
exports.npc = npc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FyY2hldHlwZS9ucGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsOENBQTJEO0FBRzNELHdEQUFtRDtBQUNuRCx3REFBa0Q7QUFFbEQ7O0dBRUc7QUFDSCxJQUFpQixPQUFPLENBMEh2QjtBQTFIRCxXQUFpQixPQUFPO0lBb0J0Qjs7T0FFRztJQUNVLG1CQUFXLEdBQWM7UUFDcEMsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QixXQUFXLEVBQUUseUNBQXlDO1FBQ3RELG9CQUFvQixFQUFFLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7S0FDN0QsQ0FBQztJQUVXLGFBQUssR0FBYztRQUM5QixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7UUFDdkMsVUFBVSxFQUFFLE1BQU07UUFDbEIsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsb0JBQW9CLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLElBQUksRUFBRSx1QkFBVSxDQUFDLFFBQVEsQ0FBQztLQUM3RCxDQUFDO0lBRVcsY0FBTSxHQUFjO1FBQy9CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsU0FBUyxFQUNQLG9FQUFvRTtRQUN0RSxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUM7UUFDekMsVUFBVSxFQUFFLE9BQU87UUFDbkIsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVCLG9CQUFvQixFQUFFO1lBQ3BCLHVCQUFVLENBQUMsV0FBVztZQUN0Qix1QkFBVSxDQUFDLE1BQU07WUFDakIsdUJBQVUsQ0FBQyxNQUFNO1lBQ2pCLHVCQUFVLENBQUMsSUFBSTtZQUNmLHVCQUFVLENBQUMsTUFBTTtZQUNqQix1QkFBVSxDQUFDLElBQUk7WUFDZix1QkFBVSxDQUFDLFFBQVE7U0FDcEI7S0FDRixDQUFDO0lBRUY7O09BRUc7SUFFVSxpQkFBUyxHQUFjO1FBQ2xDLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFDUCx3R0FBd0c7UUFDMUcsb0JBQW9CLEVBQUU7WUFDcEIsdUJBQVUsQ0FBQyxJQUFJO1lBQ2YsdUJBQVUsQ0FBQyxPQUFPO1lBQ2xCLHVCQUFVLENBQUMsTUFBTTtZQUNqQix1QkFBVSxDQUFDLFNBQVM7WUFDcEIsdUJBQVUsQ0FBQyxPQUFPO1lBQ2xCLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULHVCQUFVLENBQUMsSUFBSTtZQUNmLHVCQUFVLENBQUMsU0FBUztZQUNwQix1QkFBVSxDQUFDLE9BQU87U0FDbkI7UUFDRCxNQUFNLEVBQUU7WUFDTjtnQkFDRSw4QkFBOEI7Z0JBQzlCLEdBQUcsRUFBRSxzQkFBUyxDQUFDLEtBQUs7Z0JBQ3BCLFFBQVEsRUFBRSxjQUFNLENBQUMsTUFBTTtnQkFDdkIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLGdCQUFRLENBQUMsTUFBTTthQUMxQjtTQUNGO0tBQ0YsQ0FBQztJQUVGOztPQUVHO0lBQ1UsY0FBTSxHQUFjO1FBQy9CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLFlBQVk7S0FDMUIsQ0FBQztJQUVXLGFBQUssR0FBYztRQUM5QixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsa0JBQWtCO0tBQ2hDLENBQUM7SUFFVyxjQUFNLEdBQWM7UUFDL0IsU0FBUyxFQUFFLFFBQVE7UUFDbkIsV0FBVyxFQUFFLE1BQU07UUFDbkIsT0FBTyxFQUNMLHVRQUF1UTtLQUMxUSxDQUFDO0lBRVcsY0FBTSxHQUFjO1FBQy9CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxVQUFVO0tBQ3hCLENBQUM7QUFDSixDQUFDLEVBMUhnQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUEwSHZCO0FBS00sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEtBQUssR0FBWSxFQUFhLENBQUM7SUFDckMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUpXLFFBQUEsR0FBRyxPQUlkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcml2ZSwgTGlmZSwgU3Bpcml0fSBmcm9tICcuLi9jb21wb25lbnQvZ2F1Z2VzJztcbmltcG9ydCB7U3RhdHN9IGZyb20gJy4uL2NvbXBvbmVudC9zdGF0cyc7XG5pbXBvcnQge0VmZmVjdCwgT3BlcmF0b3IsIFRyYWl0fSBmcm9tICcuLi9jb21wb25lbnQvdHJhaXQnO1xuaW1wb3J0IHtJdGVtc30gZnJvbSAnLi4vY29tcG9uZW50L2l0ZW0uZ2Vhcic7XG5pbXBvcnQge1N0YXR1c0VmZmVjdH0gZnJvbSAnLi4vY29tcG9uZW50L3N0YXR1cy5lZmZlY3QnO1xuaW1wb3J0IHtEaXNjaXBsaW5lfSBmcm9tICcuLi9jb21wb25lbnQvZGlzY2lwbGluZSc7XG5pbXBvcnQge0VmZmVjdFRhZ30gZnJvbSAnLi4vY29tcG9uZW50L3RhZy5lZmZlY3QnO1xuXG4vKipcbiAqIEEgaHVtYW4gb3Igbm9uLWh1bWFub2lkIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBOUENMaXN0IHtcbiAgZXhwb3J0IHR5cGUgQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIGFsaWFzPzogc3RyaW5nW107XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYmFja3N0b3J5Pzogc3RyaW5nO1xuICAgIHN5bWJvbGl6ZXM/OiBzdHJpbmc7XG4gICAgYWZmaWxpYXRpb24/OiBzdHJpbmdbXTtcbiAgICBoaXN0b3J5Pzogc3RyaW5nO1xuICAgIGxpZmU/OiBMaWZlO1xuICAgIGRyaXZlPzogRHJpdmU7XG4gICAgc3Bpcml0PzogU3Bpcml0O1xuICAgIHN0YXRzPzogU3RhdHM7XG4gICAgdHJhaXRzPzogVHJhaXRbXTtcbiAgICBzdGF0dXNFZmZlY3RzPzogU3RhdHVzRWZmZWN0W107XG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM/OiBEaXNjaXBsaW5lW107XG4gICAgbG9vdD86IEl0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBLZWVwZXJzXG4gICAqL1xuICBleHBvcnQgY29uc3QgTWlzY2hpZXZvdXM6IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdNaXNjaGlldm91cycsXG4gICAgbGFzdE5hbWU6ICdQaWViYWxkJyxcbiAgICBhbGlhczogWydLZWVwZXIgb2YgTGF3J10sXG4gICAgc3ltYm9saXplczogJ0xhdycsXG4gICAgYWZmaWxpYXRpb246IFsnVGhlIEtlZXBlcnMnXSxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYmxhY2sgYW5kIHdoaXRlIGNhdCB3aXRoIHllbGxvdyBleWVzLicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLlNBR0UsIERpc2NpcGxpbmUuR1VBUkRJQU5dLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBKYW51czogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ0phbnVzJyxcbiAgICBsYXN0TmFtZTogJ1BlcnNpYW4nLFxuICAgIGFsaWFzOiBbJ0tlZXBlciBvZiBUaW1lJywgJ1dpc2UtS2l0dHknXSxcbiAgICBzeW1ib2xpemVzOiAnVGltZScsXG4gICAgYWZmaWxpYXRpb246IFsnVGhlIEtlZXBlcnMnXSxcbiAgICBkZXNjcmlwdGlvbjogJ0Egb3JhbmdlIG9sZCBwZXJpYW4gY2F0JyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW0Rpc2NpcGxpbmUuU0FHRSwgRGlzY2lwbGluZS5HVUFSRElBTl0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IExvb21lZTogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ0xvb21lZScsXG4gICAgbGFzdE5hbWU6ICdBbmdvcmEnLFxuICAgIGRlc2NyaXB0aW9uOiAnQmxvbmRlIGdpcmwgd2VhcmluZyB3aGl0ZSBsaW5lbicsXG4gICAgYmFja3N0b3J5OlxuICAgICAgJ0EgZ2lybCBjcmVhdGVkIHdoZW4gdGhlIFNvbmcgTWFpZGVuIGxlZnQgaGVyIHBvc3QgdG8gYmVjb21lIGh1bWFuLicsXG4gICAgYWxpYXM6IFsnS2VlcGVyIG9mIEhlYXJ0JywgJ1NvbmcgTWFpZGVuJ10sXG4gICAgc3ltYm9saXplczogJ0hlYXJ0JyxcbiAgICBhZmZpbGlhdGlvbjogWydUaGUgS2VlcGVycyddLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLkNIRUVSTEVBREVSLFxuICAgICAgRGlzY2lwbGluZS5NQURJRU4sXG4gICAgICBEaXNjaXBsaW5lLktFRVBFUixcbiAgICAgIERpc2NpcGxpbmUuQ09PSyxcbiAgICAgIERpc2NpcGxpbmUuSEVBTEVSLFxuICAgICAgRGlzY2lwbGluZS5TQUdFLFxuICAgICAgRGlzY2lwbGluZS5HVUFSRElBTixcbiAgICBdLFxuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKi9cblxuICBleHBvcnQgY29uc3QgR2FhbGlSdWluOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnR2FhbGknLFxuICAgIGxhc3ROYW1lOiAnUnVpbicsXG4gICAgYmFja3N0b3J5OlxuICAgICAgJ0EgcHJpbmNlIHdpdGggbGl0dGxlIGludGVyZXN0IGluIGJlY29taW5nIGtpbmcuIEluc3RlYWQsIGhlIGxpdmVzIGZvciB0ZXN0aW5nIGhpcyBzd29yZCBpbiByYXcgZGFuZ2VyLicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuQkFSRCxcbiAgICAgIERpc2NpcGxpbmUuRFVFTElTVCxcbiAgICAgIERpc2NpcGxpbmUuS05JR0hULFxuICAgICAgRGlzY2lwbGluZS5SVU5FX0tJTkcsXG4gICAgICBEaXNjaXBsaW5lLlJPWUFMVFksXG4gICAgICAvLyAtIE5vYmVsXG4gICAgICAvLyAtIER1a2VcbiAgICAgIC8vIC0gS2luZ1xuICAgICAgRGlzY2lwbGluZS5IRVJPLFxuICAgICAgRGlzY2lwbGluZS5SVU5FX0tJTkcsXG4gICAgICBEaXNjaXBsaW5lLldBUlJJT1IsXG4gICAgXSxcbiAgICB0cmFpdHM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gaW5uYXRlIHByb2NpZW5jeSB3aXRoIHN3b3JkXG4gICAgICAgIHRhZzogRWZmZWN0VGFnLlNXT1JELFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LlJFU0lTVCxcbiAgICAgICAgcXVhbnRpdHk6IDAuNSxcbiAgICAgICAgb3BlcmF0b3I6IE9wZXJhdG9yLkRJVklERSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICAvKipcbiAgICogU2luc1xuICAgKi9cbiAgZXhwb3J0IGNvbnN0IFZhbGxvbjogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ1ZhbGxvbicsXG4gICAgbGFzdE5hbWU6ICdPbmknLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hpdGUgaGFpcicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1haGRpOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTWFoZGknLFxuICAgIGxhc3ROYW1lOiAnVHNpYScsXG4gICAgZGVzY3JpcHRpb246IFwiTWFsYWNlJ3MgYnJvdGhlclwiLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBMYXd6b246IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdMYXd6b24nLFxuICAgIGRlc2NyaXB0aW9uOiAnR3JleScsXG4gICAgaGlzdG9yeTpcbiAgICAgICdSdW1vcmVkIHRvIGJlIHRoZSBtb3N0IHBvd2VyZnVsIGZpZ2h0ZXIgZnJvbSB0aGUgbm9ydGguIEhlIGZvdWdodCBvbmx5IHRvIHByb3RlY3QgaGlzIHZpbGxhZ2UgdW50aWwgaXQgd2FzIHdpcGVkIG91dCBmcm9tIGEgZ3JlYXQgZnJvc3QuIEhlIG5vdyB3b25kZXJzIGFyb3VuZCBsaWZlbGVzc2x5IGluIHNlYXJjaCBvZiBhbiBlbmQuIEhlIGlzIGJ5IGZhciB0aGUgbW9zdCBzdHJvbmdlc3Qgb2YgdGhlIHNldmVuIGJ1dCBoYXMgbm8gd2lsbCB0byBmaWdodC4nLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTcGlkZXI6IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdTcGlkZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzcGlkZXInLFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBOUENLZXkgPSB0eXBlb2YgTlBDTGlzdDtcbmV4cG9ydCB0eXBlIE5QQ1R5cGUgPSBrZXlvZiBOUENLZXk7XG5cbmV4cG9ydCBjb25zdCBucGMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBucGNJZDogTlBDVHlwZSA9IGlkIGFzIE5QQ1R5cGU7XG4gIGNvbnN0IGFyY2hldHlwZSA9IE5QQ0xpc3RbbnBjSWRdO1xuICByZXR1cm4gYXJjaGV0eXBlO1xufTtcbiJdfQ==