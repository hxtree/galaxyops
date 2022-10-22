"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archetype = exports.ArchetypeList = void 0;
const trait_1 = require("../component/trait");
const discipline_1 = require("../component/discipline");
const outfit_gear_1 = require("../component/outfit.gear");
const tag_effect_1 = require("../component/tag.effect");
const summon_skill_1 = require("../component/summon.skill");
/**
 * A human or non-humanoid base character.
 * base character information not stored in database
 * contains potentialGeatSlots, potentialDisciplines, etc.
 * only contains archetypes that can become character sheets, would not include a tree, etc.
 */
var ArchetypeList;
(function (ArchetypeList) {
    /**
     * Keepers
     */
    ArchetypeList.MischievousPiebald = {
        firstName: 'Mischievous',
        lastName: 'Piebald',
        alias: ['Keeper of Law'],
        symbolizes: 'Law',
        affiliation: ['The Keepers'],
        description: 'A black and white cat with yellow eyes.',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    ArchetypeList.JanusPersian = {
        firstName: 'Janus',
        lastName: 'Persian',
        alias: ['Keeper of Time', 'Wise-Kitty'],
        symbolizes: 'Time',
        affiliation: ['The Keepers'],
        description: 'A orange old perian cat',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    ArchetypeList.LoomeeAngora = {
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
        summonCompatibility: [summon_skill_1.Summon.FELIX],
    };
    /**
     * Virtues
     */
    ArchetypeList.ArinothDiyath = {
        firstName: 'Arinoth',
        lastName: 'Diyath',
        backstory: '',
        potentialDisciplines: [],
    };
    ArchetypeList.FayeImago = {
        firstName: 'Faye',
        lastName: 'Imago',
        backstory: 'A young girl who weilds magic and studies history',
        potentialDisciplines: [
            discipline_1.Discipline.WIZARD,
            discipline_1.Discipline.HISTORIAN,
            discipline_1.Discipline.MAGI,
            discipline_1.Discipline.MAGI_BLACK,
            discipline_1.Discipline.MAGI_BLUE,
            discipline_1.Discipline.MAGI_BROWN,
            discipline_1.Discipline.MAGI_GREEN,
            discipline_1.Discipline.MAGI_PINK,
            discipline_1.Discipline.MAGI_PURPLE,
            discipline_1.Discipline.MAGI_WHITE,
            discipline_1.Discipline.MAGI_YELLOW,
        ],
        summonCompatibility: [summon_skill_1.Summon.LYRE],
    };
    ArchetypeList.GaaliRuin = {
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
    ArchetypeList.GunterStonewell = {
        firstName: 'Gunter',
        lastName: 'Stonewell',
        backstory: 'A solider for life',
        potentialDisciplines: [
            discipline_1.Discipline.GAURD,
            discipline_1.Discipline.BODY_BUILDER,
            discipline_1.Discipline.COMMANDER,
        ],
        summonCompatibility: [summon_skill_1.Summon.SCRIBBLES],
    };
    ArchetypeList.MalaceTsia = {
        firstName: 'Malace',
        lastName: 'Tsia',
        backstory: 'was used as a scarifice for his people to hold demons by sewing them to his skin',
        potentialDisciplines: [
            discipline_1.Discipline.GYMNAST,
            discipline_1.Discipline.POSSESSED,
            discipline_1.Discipline.SCOUT,
            discipline_1.Discipline.OUROBOROS,
            discipline_1.Discipline.SUMMONER,
            discipline_1.Discipline.ROUGE,
        ],
        traits: [
            {
                // Can single handedly carry party through foes of darkness due to his darkness healing trait.
                tag: tag_effect_1.EffectTag.DARKNESS,
                modifier: trait_1.Effect.HEAL,
                percent: 80,
            },
        ],
        potentialOutfits: [outfit_gear_1.Outfit.OFFICERS_UNIFORM],
        summonCompatibility: [summon_skill_1.Summon.OURUBORUS, summon_skill_1.Summon.MISCHIEVOUS],
    };
    ArchetypeList.MeekuOni = {
        firstName: 'Meeku',
        lastName: 'Oni',
        backstory: '',
        potentialDisciplines: [
            discipline_1.Discipline.SOLIDER,
            discipline_1.Discipline.XSOLIDER,
            discipline_1.Discipline.BERSERKER,
            discipline_1.Discipline.ONI,
            discipline_1.Discipline.HERO,
        ],
        traits: [
            {
                // learns quickly
                tag: tag_effect_1.EffectTag.EXPERIENCE,
                modifier: trait_1.Effect.WEAK,
                quantity: 1.2,
                operator: trait_1.Operator.MULTIPLY,
            },
        ],
        potentialOutfits: [outfit_gear_1.Outfit.TSHIRT_AND_JEANS],
        summonCompatibility: [summon_skill_1.Summon.VACHEL],
    };
    ArchetypeList.PennyKibbutz = {
        firstName: 'Penny',
        lastName: 'Kibbutz',
        backstory: '',
        potentialDisciplines: [
            discipline_1.Discipline.NINJA,
            discipline_1.Discipline.ASSASSIN,
            discipline_1.Discipline.AMBER_ASSASSIN,
            discipline_1.Discipline.ELITE_ASSASIN,
            discipline_1.Discipline.THIEF,
        ],
        traits: [
            {
                // has built up tolerance to poisons
                tag: tag_effect_1.EffectTag.POISON,
                modifier: trait_1.Effect.IMMUNE,
            },
        ],
        summonCompatibility: [summon_skill_1.Summon.HERALDIC_LION],
    };
    ArchetypeList.TraezUthsha = {
        firstName: 'Traez',
        lastName: 'Uthsha',
        backstory: '',
        potentialDisciplines: [
            discipline_1.Discipline.ENGINEER,
            discipline_1.Discipline.MECHANIC,
            discipline_1.Discipline.LIGHTENING_WARRIOR,
            discipline_1.Discipline.REBEL,
        ],
        summonCompatibility: [summon_skill_1.Summon.SANDY],
    };
    /**
     * Sins
     */
    ArchetypeList.VallonOni = {
        firstName: 'Vallon',
        lastName: 'Oni',
        description: 'White hair',
    };
    ArchetypeList.Madhi = {
        firstName: 'Mahdi',
        lastName: 'Tsia',
        description: "Malace's brother",
    };
    ArchetypeList.Lawzon = {
        firstName: 'Lawzon',
        lastName: 'Grey',
        history: 'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
    };
    ArchetypeList.Spider = {
        firstName: 'Spider',
        description: 'A spider',
    };
})(ArchetypeList = exports.ArchetypeList || (exports.ArchetypeList = {}));
const Archetype = (id) => {
    const archetypeId = id;
    const archetype = ArchetypeList[archetypeId];
    return archetype;
};
exports.Archetype = Archetype;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGV0eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FyY2hldHlwZS9hcmNoZXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsOENBQTJEO0FBRzNELHdEQUFtRDtBQUNuRCwwREFBZ0Q7QUFHaEQsd0RBQWtEO0FBQ2xELDREQUFpRDtBQU1qRDs7Ozs7R0FLRztBQUNILElBQWlCLGFBQWEsQ0E2UDdCO0FBN1BELFdBQWlCLGFBQWE7SUE0QjVCOztPQUVHO0lBQ1UsZ0NBQWtCLEdBQWM7UUFDM0MsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QixXQUFXLEVBQUUseUNBQXlDO1FBQ3RELG9CQUFvQixFQUFFLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7S0FDN0QsQ0FBQztJQUVXLDBCQUFZLEdBQWM7UUFDckMsU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO1FBQ3ZDLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLG9CQUFvQixFQUFFLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7S0FDN0QsQ0FBQztJQUVXLDBCQUFZLEdBQWM7UUFDckMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGlDQUFpQztRQUM5QyxTQUFTLEVBQ1Asb0VBQW9FO1FBQ3RFLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztR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T0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBSlcsUUFBQSxTQUFTLGFBSXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcml2ZSwgTGlmZSwgU3Bpcml0fSBmcm9tICcuLi9jb21wb25lbnQvZ2F1Z2VzJztcbmltcG9ydCB7U3RhdHN9IGZyb20gJy4uL2NvbXBvbmVudC9zdGF0cyc7XG5pbXBvcnQge0VmZmVjdCwgT3BlcmF0b3IsIFRyYWl0fSBmcm9tICcuLi9jb21wb25lbnQvdHJhaXQnO1xuaW1wb3J0IHtJdGVtc30gZnJvbSAnLi4vY29tcG9uZW50L2l0ZW0uZ2Vhcic7XG5pbXBvcnQge1N0YXR1c0VmZmVjdH0gZnJvbSAnLi4vY29tcG9uZW50L3N0YXR1cy5lZmZlY3QnO1xuaW1wb3J0IHtEaXNjaXBsaW5lfSBmcm9tICcuLi9jb21wb25lbnQvZGlzY2lwbGluZSc7XG5pbXBvcnQge091dGZpdH0gZnJvbSAnLi4vY29tcG9uZW50L291dGZpdC5nZWFyJztcbmltcG9ydCB7R2VhclNsb3R9IGZyb20gJy4uL2NvbXBvbmVudC9nZWFyJztcbmltcG9ydCB7VG9rZW59IGZyb20gJy4uL2NvbXBvbmVudC90b2tlbi5nZWFyJztcbmltcG9ydCB7RWZmZWN0VGFnfSBmcm9tICcuLi9jb21wb25lbnQvdGFnLmVmZmVjdCc7XG5pbXBvcnQge1N1bW1vbn0gZnJvbSAnLi4vY29tcG9uZW50L3N1bW1vbi5za2lsbCc7XG5cbmV4cG9ydCB0eXBlIENoYXJhY3RlclNoZWV0ID0ge1xuICB0b2tlbj86IFRva2VuO1xufTtcblxuLyoqXG4gKiBBIGh1bWFuIG9yIG5vbi1odW1hbm9pZCBiYXNlIGNoYXJhY3Rlci5cbiAqIGJhc2UgY2hhcmFjdGVyIGluZm9ybWF0aW9uIG5vdCBzdG9yZWQgaW4gZGF0YWJhc2VcbiAqIGNvbnRhaW5zIHBvdGVudGlhbEdlYXRTbG90cywgcG90ZW50aWFsRGlzY2lwbGluZXMsIGV0Yy5cbiAqIG9ubHkgY29udGFpbnMgYXJjaGV0eXBlcyB0aGF0IGNhbiBiZWNvbWUgY2hhcmFjdGVyIHNoZWV0cywgd291bGQgbm90IGluY2x1ZGUgYSB0cmVlLCBldGMuXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgQXJjaGV0eXBlTGlzdCB7XG4gIGV4cG9ydCB0eXBlIENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBoaXN0b3J5Pzogc3RyaW5nO1xuICAgIGJhY2tzdG9yeT86IHN0cmluZztcbiAgICBleHBlcmllbmNlPzogbnVtYmVyO1xuICAgIGFsaWFzPzogc3RyaW5nW107XG4gICAgc3ltYm9saXplcz86IHN0cmluZztcbiAgICBhZmZpbGlhdGlvbj86IHN0cmluZ1tdO1xuXG4gICAgLy8gdGhlc2Ugc2VlbSBtb3JlIGxpa2UgdGhleSBsb2FkZWQgb3IgZGV0ZXJtaW5lZCBmb3IgcGxheWVyIGNoYXJhY3RlcnNcbiAgICBsaWZlPzogTGlmZTtcbiAgICBkcml2ZT86IERyaXZlO1xuICAgIHNwaXJpdD86IFNwaXJpdDtcbiAgICBzdGF0cz86IFN0YXRzO1xuXG4gICAgdHJhaXRzPzogVHJhaXRbXTtcbiAgICBzdGF0dXNFZmZlY3RzPzogU3RhdHVzRWZmZWN0W107XG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM/OiBEaXNjaXBsaW5lW107XG4gICAgcG90ZW50aWFsT3V0Zml0cz86IE91dGZpdFtdO1xuICAgIHBvdGVudGlhbEdlYXRTbG90cz86IEdlYXJTbG90W107XG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eT86IFN1bW1vbltdO1xuXG4gICAgbG9vdD86IEl0ZW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBLZWVwZXJzXG4gICAqL1xuICBleHBvcnQgY29uc3QgTWlzY2hpZXZvdXNQaWViYWxkOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTWlzY2hpZXZvdXMnLFxuICAgIGxhc3ROYW1lOiAnUGllYmFsZCcsXG4gICAgYWxpYXM6IFsnS2VlcGVyIG9mIExhdyddLFxuICAgIHN5bWJvbGl6ZXM6ICdMYXcnLFxuICAgIGFmZmlsaWF0aW9uOiBbJ1RoZSBLZWVwZXJzJ10sXG4gICAgZGVzY3JpcHRpb246ICdBIGJsYWNrIGFuZCB3aGl0ZSBjYXQgd2l0aCB5ZWxsb3cgZXllcy4nLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbRGlzY2lwbGluZS5TQUdFLCBEaXNjaXBsaW5lLkdVQVJESUFOXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgSmFudXNQZXJzaWFuOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnSmFudXMnLFxuICAgIGxhc3ROYW1lOiAnUGVyc2lhbicsXG4gICAgYWxpYXM6IFsnS2VlcGVyIG9mIFRpbWUnLCAnV2lzZS1LaXR0eSddLFxuICAgIHN5bWJvbGl6ZXM6ICdUaW1lJyxcbiAgICBhZmZpbGlhdGlvbjogWydUaGUgS2VlcGVycyddLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBvcmFuZ2Ugb2xkIHBlcmlhbiBjYXQnLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbRGlzY2lwbGluZS5TQUdFLCBEaXNjaXBsaW5lLkdVQVJESUFOXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgTG9vbWVlQW5nb3JhOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTG9vbWVlJyxcbiAgICBsYXN0TmFtZTogJ0FuZ29yYScsXG4gICAgZGVzY3JpcHRpb246ICdCbG9uZGUgZ2lybCB3ZWFyaW5nIHdoaXRlIGxpbmVuJyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnQSBnaXJsIGNyZWF0ZWQgd2hlbiB0aGUgU29uZyBNYWlkZW4gbGVmdCBoZXIgcG9zdCB0byBiZWNvbWUgaHVtYW4uJyxcbiAgICBhbGlhczogWydLZWVwZXIgb2YgSGVhcnQnLCAnU29uZyBNYWlkZW4nXSxcbiAgICBzeW1ib2xpemVzOiAnSGVhcnQnLFxuICAgIGFmZmlsaWF0aW9uOiBbJ1RoZSBLZWVwZXJzJ10sXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuQ0hFRVJMRUFERVIsXG4gICAgICBEaXNjaXBsaW5lLk1BRElFTixcbiAgICAgIERpc2NpcGxpbmUuS0VFUEVSLFxuICAgICAgRGlzY2lwbGluZS5DT09LLFxuICAgICAgRGlzY2lwbGluZS5IRUFMRVIsXG4gICAgICBEaXNjaXBsaW5lLlNBR0UsXG4gICAgICBEaXNjaXBsaW5lLkdVQVJESUFOLFxuICAgIF0sXG5cbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLkZFTElYXSxcbiAgfTtcblxuICAvKipcbiAgICogVmlydHVlc1xuICAgKi9cbiAgZXhwb3J0IGNvbnN0IEFyaW5vdGhEaXlhdGg6IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdBcmlub3RoJyxcbiAgICBsYXN0TmFtZTogJ0RpeWF0aCcsXG4gICAgYmFja3N0b3J5OiAnJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEZheWVJbWFnbzogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ0ZheWUnLFxuICAgIGxhc3ROYW1lOiAnSW1hZ28nLFxuICAgIGJhY2tzdG9yeTogJ0EgeW91bmcgZ2lybCB3aG8gd2VpbGRzIG1hZ2ljIGFuZCBzdHVkaWVzIGhpc3RvcnknLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLldJWkFSRCxcbiAgICAgIERpc2NpcGxpbmUuSElTVE9SSUFOLFxuICAgICAgRGlzY2lwbGluZS5NQUdJLFxuICAgICAgRGlzY2lwbGluZS5NQUdJX0JMQUNLLFxuICAgICAgRGlzY2lwbGluZS5NQUdJX0JMVUUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfQlJPV04sXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfR1JFRU4sXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfUElOSyxcbiAgICAgIERpc2NpcGxpbmUuTUFHSV9QVVJQTEUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfV0hJVEUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfWUVMTE9XLFxuICAgIF0sXG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eTogW1N1bW1vbi5MWVJFXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgR2FhbGlSdWluOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnR2FhbGknLFxuICAgIGxhc3ROYW1lOiAnUnVpbicsXG4gICAgYmFja3N0b3J5OlxuICAgICAgJ0EgcHJpbmNlIHdpdGggbGl0dGxlIGludGVyZXN0IGluIGJlY29taW5nIGtpbmcuIEluc3RlYWQsIGhlIGxpdmVzIGZvciB0ZXN0aW5nIGhpcyBzd29yZCBpbiByYXcgZGFuZ2VyLicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuQkFSRCxcbiAgICAgIERpc2NpcGxpbmUuRFVFTElTVCxcbiAgICAgIERpc2NpcGxpbmUuS05JR0hULFxuICAgICAgRGlzY2lwbGluZS5SVU5FX0tJTkcsXG4gICAgICBEaXNjaXBsaW5lLlJPWUFMVFksXG4gICAgICAvLyAtIE5vYmVsXG4gICAgICAvLyAtIER1a2VcbiAgICAgIC8vIC0gS2luZ1xuICAgICAgRGlzY2lwbGluZS5IRVJPLFxuICAgICAgRGlzY2lwbGluZS5XQVJSSU9SLFxuICAgIF0sXG4gICAgdHJhaXRzOiBbXG4gICAgICB7XG4gICAgICAgIC8vIGlubmF0ZSBwcm9jaWVuY3kgd2l0aCBzd29yZFxuICAgICAgICB0YWc6IEVmZmVjdFRhZy5TV09SRCxcbiAgICAgICAgbW9kaWZpZXI6IEVmZmVjdC5SRVNJU1QsXG4gICAgICAgIHF1YW50aXR5OiAwLjUsXG4gICAgICAgIG9wZXJhdG9yOiBPcGVyYXRvci5ESVZJREUsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEd1bnRlclN0b25ld2VsbDogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ0d1bnRlcicsXG4gICAgbGFzdE5hbWU6ICdTdG9uZXdlbGwnLFxuICAgIGJhY2tzdG9yeTogJ0Egc29saWRlciBmb3IgbGlmZScsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuR0FVUkQsXG4gICAgICBEaXNjaXBsaW5lLkJPRFlfQlVJTERFUixcbiAgICAgIERpc2NpcGxpbmUuQ09NTUFOREVSLFxuICAgIF0sXG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eTogW1N1bW1vbi5TQ1JJQkJMRVNdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBNYWxhY2VUc2lhOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTWFsYWNlJyxcbiAgICBsYXN0TmFtZTogJ1RzaWEnLFxuICAgIGJhY2tzdG9yeTpcbiAgICAgICd3YXMgdXNlZCBhcyBhIHNjYXJpZmljZSBmb3IgaGlzIHBlb3BsZSB0byBob2xkIGRlbW9ucyBieSBzZXdpbmcgdGhlbSB0byBoaXMgc2tpbicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuR1lNTkFTVCxcbiAgICAgIERpc2NpcGxpbmUuUE9TU0VTU0VELFxuICAgICAgRGlzY2lwbGluZS5TQ09VVCxcbiAgICAgIERpc2NpcGxpbmUuT1VST0JPUk9TLFxuICAgICAgRGlzY2lwbGluZS5TVU1NT05FUixcbiAgICAgIERpc2NpcGxpbmUuUk9VR0UsXG4gICAgXSxcbiAgICB0cmFpdHM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gQ2FuIHNpbmdsZSBoYW5kZWRseSBjYXJyeSBwYXJ0eSB0aHJvdWdoIGZvZXMgb2YgZGFya25lc3MgZHVlIHRvIGhpcyBkYXJrbmVzcyBoZWFsaW5nIHRyYWl0LlxuICAgICAgICB0YWc6IEVmZmVjdFRhZy5EQVJLTkVTUyxcbiAgICAgICAgbW9kaWZpZXI6IEVmZmVjdC5IRUFMLFxuICAgICAgICBwZXJjZW50OiA4MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwb3RlbnRpYWxPdXRmaXRzOiBbT3V0Zml0Lk9GRklDRVJTX1VOSUZPUk1dLFxuXG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eTogW1N1bW1vbi5PVVJVQk9SVVMsIFN1bW1vbi5NSVNDSElFVk9VU10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1lZWt1T25pOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTWVla3UnLFxuICAgIGxhc3ROYW1lOiAnT25pJyxcbiAgICBiYWNrc3Rvcnk6ICcnLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLlNPTElERVIsXG4gICAgICBEaXNjaXBsaW5lLlhTT0xJREVSLFxuICAgICAgRGlzY2lwbGluZS5CRVJTRVJLRVIsXG4gICAgICBEaXNjaXBsaW5lLk9OSSxcbiAgICAgIERpc2NpcGxpbmUuSEVSTyxcbiAgICBdLFxuICAgIHRyYWl0czogW1xuICAgICAge1xuICAgICAgICAvLyBsZWFybnMgcXVpY2tseVxuICAgICAgICB0YWc6IEVmZmVjdFRhZy5FWFBFUklFTkNFLFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LldFQUssXG4gICAgICAgIHF1YW50aXR5OiAxLjIsXG4gICAgICAgIG9wZXJhdG9yOiBPcGVyYXRvci5NVUxUSVBMWSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwb3RlbnRpYWxPdXRmaXRzOiBbT3V0Zml0LlRTSElSVF9BTkRfSkVBTlNdLFxuICAgIHN1bW1vbkNvbXBhdGliaWxpdHk6IFtTdW1tb24uVkFDSEVMXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUGVubnlLaWJidXR6OiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnUGVubnknLFxuICAgIGxhc3ROYW1lOiAnS2liYnV0eicsXG4gICAgYmFja3N0b3J5OiAnJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5OSU5KQSxcbiAgICAgIERpc2NpcGxpbmUuQVNTQVNTSU4sXG4gICAgICBEaXNjaXBsaW5lLkFNQkVSX0FTU0FTU0lOLFxuICAgICAgRGlzY2lwbGluZS5FTElURV9BU1NBU0lOLFxuICAgICAgRGlzY2lwbGluZS5USElFRixcbiAgICBdLFxuICAgIHRyYWl0czogW1xuICAgICAge1xuICAgICAgICAvLyBoYXMgYnVpbHQgdXAgdG9sZXJhbmNlIHRvIHBvaXNvbnNcbiAgICAgICAgdGFnOiBFZmZlY3RUYWcuUE9JU09OLFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LklNTVVORSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLkhFUkFMRElDX0xJT05dLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBUcmFlelV0aHNoYTogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ1RyYWV6JyxcbiAgICBsYXN0TmFtZTogJ1V0aHNoYScsXG4gICAgYmFja3N0b3J5OiAnJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5FTkdJTkVFUixcbiAgICAgIERpc2NpcGxpbmUuTUVDSEFOSUMsXG4gICAgICBEaXNjaXBsaW5lLkxJR0hURU5JTkdfV0FSUklPUixcbiAgICAgIERpc2NpcGxpbmUuUkVCRUwsXG4gICAgXSxcbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLlNBTkRZXSxcbiAgfTtcblxuICAvKipcbiAgICogU2luc1xuICAgKi9cbiAgZXhwb3J0IGNvbnN0IFZhbGxvbk9uaTogQ2hhcmFjdGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ1ZhbGxvbicsXG4gICAgbGFzdE5hbWU6ICdPbmknLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hpdGUgaGFpcicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1hZGhpOiBDaGFyYWN0ZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnTWFoZGknLFxuICAgIGxhc3ROYW1lOiAnVHNpYScsXG4gICAgZGVzY3JpcHRpb246IFwiTWFsYWNlJ3MgYnJvdGhlclwiLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBMYXd6b246IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdMYXd6b24nLFxuICAgIGxhc3ROYW1lOiAnR3JleScsXG4gICAgaGlzdG9yeTpcbiAgICAgICdSdW1vcmVkIHRvIGJlIHRoZSBtb3N0IHBvd2VyZnVsIGZpZ2h0ZXIgZnJvbSB0aGUgbm9ydGguIEhlIGZvdWdodCBvbmx5IHRvIHByb3RlY3QgaGlzIHZpbGxhZ2UgdW50aWwgaXQgd2FzIHdpcGVkIG91dCBmcm9tIGEgZ3JlYXQgZnJvc3QuIEhlIG5vdyB3b25kZXJzIGFyb3VuZCBsaWZlbGVzc2x5IGluIHNlYXJjaCBvZiBhbiBlbmQuIEhlIGlzIGJ5IGZhciB0aGUgbW9zdCBzdHJvbmdlc3Qgb2YgdGhlIHNldmVuIGJ1dCBoYXMgbm8gd2lsbCB0byBmaWdodC4nLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTcGlkZXI6IENoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdTcGlkZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzcGlkZXInLFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBBcmNoZXR5cGVLZXkgPSB0eXBlb2YgQXJjaGV0eXBlTGlzdDtcbmV4cG9ydCB0eXBlIEFyY2hldHlwZVR5cGUgPSBrZXlvZiBBcmNoZXR5cGVLZXk7XG5cbmV4cG9ydCBjb25zdCBBcmNoZXR5cGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhcmNoZXR5cGVJZDogQXJjaGV0eXBlVHlwZSA9IGlkIGFzIEFyY2hldHlwZVR5cGU7XG4gIGNvbnN0IGFyY2hldHlwZSA9IEFyY2hldHlwZUxpc3RbYXJjaGV0eXBlSWRdO1xuICByZXR1cm4gYXJjaGV0eXBlO1xufTtcbiJdfQ==