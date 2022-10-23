"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArchetypeList = exports.Archetype = exports.ArchetypeList = void 0;
const trait_1 = require("../component/trait");
const discipline_1 = require("../component/discipline");
const outfit_gear_1 = require("../component/outfit.gear");
const tag_effect_1 = require("../component/tag.effect");
const summon_skill_1 = require("../component/skill/summon.skill");
/**
 * A human or non-humanoid base character.
 * base character information not stored in database
 * contains potentialGeatSlots, potentialDisciplines, etc.
 * only contains archetypes that can become character sheets, would not include a tree, etc.
 */
var ArchetypeList;
(function (ArchetypeList) {
    /**
     * Three Keepers
     */
    ArchetypeList.MischievousPiebald = {
        name: 'Mischievous',
        surname: 'Piebald',
        alias: ['Keeper of Law'],
        backstory: 'Governs the logical of this realm.',
        symbolizes: ['Law'],
        affiliation: ['The Keepers'],
        description: 'A black and white cat with yellow eyes.',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    ArchetypeList.JanusPersian = {
        name: 'Janus',
        surname: 'Persian',
        backstory: 'Governs the flow of time the one has been in this state',
        alias: ['Keeper of Time', 'Wise-Kitty'],
        symbolizes: ['Time'],
        affiliation: ['The Keepers'],
        description: 'A orange old perian cat',
        potentialDisciplines: [discipline_1.Discipline.SAGE, discipline_1.Discipline.GUARDIAN],
    };
    ArchetypeList.LoomeeAngora = {
        name: 'Loomee',
        surname: 'Angora',
        description: 'Light blonde girl wearing white linen',
        backstory: 'She governs and protects the ones heart to make sure it is not lost. A girl created when the Song Maiden left her post to become human.',
        alias: ['Keeper of Heart', 'Song Maiden', 'Mom'],
        symbolizes: ['Chastity'],
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
     * Three Destroyer
     */
    ArchetypeList.VallonOni = {
        name: 'Vallon',
        surname: 'Oni',
        symbolizes: ['Destroyer of Heart'],
        description: 'White hair',
        potentialDisciplines: [discipline_1.Discipline.SOLIDER, discipline_1.Discipline.XSOLIDER],
    };
    ArchetypeList.OuernOni = {
        name: 'Ouern',
        surname: 'Oni',
        symbolizes: ['Destroyer of Time'],
        alias: ['The Black Plague'],
        backstory: 'Said to led to end of all who exist',
        description: 'White hair',
        potentialDisciplines: [discipline_1.Discipline.SOLIDER, discipline_1.Discipline.XSOLIDER],
    };
    ArchetypeList.MeekuOni = {
        name: 'Meeku',
        surname: 'Oni',
        symbolizes: ['Destroyer of Law'],
        alias: ['Kid', 'Brother'],
        backstory: 'A boy who has lost his past',
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
    /**
     * Seven Virtues
     */
    ArchetypeList.ArinothDiyath = {
        name: 'Arinoth',
        surname: 'Diyath',
        symbolizes: ['Patience'],
        backstory: '',
        potentialDisciplines: [],
    };
    ArchetypeList.FayeImago = {
        name: 'Faye',
        surname: 'Imago',
        backstory: 'A young girl with light violet hair who weilds magic and studies history',
        symbolizes: ['Charity'],
        alias: ['Bookworm'],
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
        name: 'Gaali',
        surname: 'Runewin',
        symbolizes: ['Temperance'],
        description: 'A white haired thin teenager',
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
        name: 'Gunter',
        surname: 'Stonewell',
        symbolizes: ['Humility'],
        description: 'A large old man with grey hair who looks as though they have spend their life in battle',
        backstory: 'A solider for life',
        potentialDisciplines: [
            discipline_1.Discipline.GAURD,
            discipline_1.Discipline.BODY_BUILDER,
            discipline_1.Discipline.COMMANDER,
        ],
        summonCompatibility: [summon_skill_1.Summon.SCRIBBLES],
    };
    ArchetypeList.MalaceTsia = {
        name: 'Malace',
        surname: 'Tsia',
        alias: [
            'Black',
            'Sacrifice',
            'Ouroboros',
            'The Bringer of Death',
            'Dragon',
        ],
        symbolizes: ['Despair'],
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
    ArchetypeList.PennyKibbutz = {
        name: 'Penny',
        surname: 'Kibbutz',
        description: 'A red head girl',
        backstory: '',
        symbolizes: ['Kindness'],
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
        name: 'Traez',
        surname: 'Uthsha',
        backstory: '',
        symbolizes: ['Diligence'],
        potentialDisciplines: [
            discipline_1.Discipline.ENGINEER,
            discipline_1.Discipline.MECHANIC,
            discipline_1.Discipline.LIGHTENING_WARRIOR,
            discipline_1.Discipline.REBEL,
        ],
        summonCompatibility: [summon_skill_1.Summon.SANDY],
    };
    /**
     * Seven Sins
     */
    ArchetypeList.Void = {
        name: 'Void',
        backstory: 'Is one of the original seven demons. He was killed before the story begins. His place is taken by Mahdi.',
        potentialDisciplines: [discipline_1.Discipline.MAGI_BLACK],
    };
    ArchetypeList.Genki = {
        name: 'Genki',
        symbolizes: ['Wrath', 'Fish'],
        potentialDisciplines: [discipline_1.Discipline.MAGI_BLUE],
    };
    ArchetypeList.Lawzon = {
        name: 'Lawzon',
        surname: 'Grey',
        symbolizes: ['Sloth', 'Wolf'],
        history: 'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
        potentialDisciplines: [discipline_1.Discipline.MAGI_WHITE],
    };
    ArchetypeList.Madhi = {
        name: 'Mahdi',
        surname: 'Tsia',
        description: "Malace's brother",
        backstory: 'When the world is about to end he is its savor',
        potentialDisciplines: [discipline_1.Discipline.POSSESSED, discipline_1.Discipline.MAGI_BLACK],
    };
    ArchetypeList.Suyri = {
        name: 'Suyri',
        description: 'uses strong magical powers',
        symbolizes: ['Luxury (later lust)', 'Fox'],
        potentialDisciplines: [discipline_1.Discipline.WIZARD, discipline_1.Discipline.MAGI_PINK],
    };
    ArchetypeList.Wisp = {
        name: 'Wisp',
        symbolizes: ['Gluttony', 'Henya'],
        potentialDisciplines: [discipline_1.Discipline.MAGI_YELLOW],
    };
    ArchetypeList.Asmin = {
        name: 'Asmin',
        symbolizes: ['Pride', 'Ox'],
        potentialDisciplines: [discipline_1.Discipline.MAGI_BROWN],
    };
    ArchetypeList.Diag = {
        name: 'Diag',
        symbolizes: ['Envy', 'Snake'],
        potentialDisciplines: [discipline_1.Discipline.MAGI_PURPLE],
    };
    /**
     * Notable Bad Guys
     */
    ArchetypeList.Monarch = {
        name: 'Monarch',
        alias: ['The Deadly One'],
    };
    ArchetypeList.Viceroy = {
        name: 'Viceroy',
        backstory: 'mimic monarch',
    };
    /**
     * Battlers
     */
    ArchetypeList.Spider = {
        name: 'Spider',
        description: 'A spider',
    };
    ArchetypeList.SeaHorse = {
        name: 'Sea Horse',
        description: 'A spider',
    };
    ArchetypeList.SensitivePlant = {
        name: 'Sensitive Plant',
        description: 'A plant that drops when touched',
    };
    // Bird of Fire - phoenix
    // Snake of Water – dragon
    // Chimera – a combination of two or more animals
    // A type of sloth like creature that lives around the maiden of the mist
    // A snow leopard creature that lives up north (can be seen near Lawzon)
})(ArchetypeList = exports.ArchetypeList || (exports.ArchetypeList = {}));
const Archetype = (id) => {
    const archetypeId = id;
    const archetype = ArchetypeList[archetypeId];
    return archetype;
};
exports.Archetype = Archetype;
const getArchetypeList = () => {
    return Object.keys(ArchetypeList);
};
exports.getArchetypeList = getArchetypeList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGV0eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FyY2hldHlwZS9hcmNoZXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsOENBQTJEO0FBRzNELHdEQUFtRDtBQUNuRCwwREFBZ0Q7QUFHaEQsd0RBQWtEO0FBQ2xELGtFQUF1RDtBQU92RDs7Ozs7R0FLRztBQUNILElBQWlCLGFBQWEsQ0FzWDdCO0FBdFhELFdBQWlCLGFBQWE7SUFvQzVCOztPQUVHO0lBQ1UsZ0NBQWtCLEdBQWM7UUFDM0MsSUFBSSxFQUFFLGFBQWE7UUFDbkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3hCLFNBQVMsRUFBRSxvQ0FBb0M7UUFDL0MsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ25CLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QixXQUFXLEVBQUUseUNBQXlDO1FBQ3RELG9CQUFvQixFQUFFLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7S0FDN0QsQ0FBQztJQUVXLDBCQUFZLEdBQWM7UUFDckMsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsU0FBUztRQUNsQixTQUFTLEVBQUUseURBQXlEO1FBQ3BFLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQztRQUN2QyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDcEIsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsb0JBQW9CLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLElBQUksRUFBRSx1QkFBVSxDQUFDLFFBQVEsQ0FBQztLQUM3RCxDQUFDO0lBRVcsMEJBQVksR0FBYztRQUNyQyxJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFdBQVcsRUFBRSx1Q0FBdUM7UUFD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O09BRUc7SUFDVSxvQkFBTSxHQUFjO1FBQy9CLElBQUksRUFBRSxRQUFRO1FBQ2QsV0FBVyxFQUFFLFVBQVU7S0FDeEIsQ0FBQztJQUVXLHNCQUFRLEdBQWM7UUFDakMsSUFBSSxFQUFFLFdBQVc7UUFDakIsV0FBVyxFQUFFLFVBQVU7S0FDeEIsQ0FBQztJQUVXLDRCQUFjLEdBQWM7UUFDdkMsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixXQUFXLEVBQUUsaUNBQWlDO0tBQy9DLENBQUM7SUFFRix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGlEQUFpRDtJQUNqRCx5RUFBeUU7SUFDekUsd0VBQXdFO0FBQzFFLENBQUMsRUF0WGdCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBc1g3QjtBQUtNLE1BQU0sU0FBUyxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7SUFDdEMsTUFBTSxXQUFXLEdBQWtCLEVBQW1CLENBQUM7SUFDdkQsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUpXLFFBQUEsU0FBUyxhQUlwQjtBQUVLLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFGVyxRQUFBLGdCQUFnQixvQkFFM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RyaXZlLCBMaWZlLCBTcGlyaXR9IGZyb20gJy4uL2NvbXBvbmVudC9nYXVnZXMnO1xuaW1wb3J0IHtTdGF0c30gZnJvbSAnLi4vY29tcG9uZW50L3N0YXRzJztcbmltcG9ydCB7RWZmZWN0LCBPcGVyYXRvciwgVHJhaXR9IGZyb20gJy4uL2NvbXBvbmVudC90cmFpdCc7XG5pbXBvcnQge0l0ZW1zfSBmcm9tICcuLi9jb21wb25lbnQvaXRlbS5nZWFyJztcbmltcG9ydCB7U3RhdHVzRWZmZWN0fSBmcm9tICcuLi9jb21wb25lbnQvc3RhdHVzLmVmZmVjdCc7XG5pbXBvcnQge0Rpc2NpcGxpbmV9IGZyb20gJy4uL2NvbXBvbmVudC9kaXNjaXBsaW5lJztcbmltcG9ydCB7T3V0Zml0fSBmcm9tICcuLi9jb21wb25lbnQvb3V0Zml0LmdlYXInO1xuaW1wb3J0IHtHZWFyU2xvdH0gZnJvbSAnLi4vY29tcG9uZW50L2dlYXInO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSAnLi4vY29tcG9uZW50L3Rva2VuLmdlYXInO1xuaW1wb3J0IHtFZmZlY3RUYWd9IGZyb20gJy4uL2NvbXBvbmVudC90YWcuZWZmZWN0JztcbmltcG9ydCB7U3VtbW9ufSBmcm9tICcuLi9jb21wb25lbnQvc2tpbGwvc3VtbW9uLnNraWxsJztcbmltcG9ydCB7V2VhcG9ufSBmcm9tICcuLi9jb21wb25lbnQvd2VhcG9uLmdlYXInO1xuXG5leHBvcnQgdHlwZSBDaGFyYWN0ZXJTaGVldCA9IHtcbiAgdG9rZW4/OiBUb2tlbjtcbn07XG5cbi8qKlxuICogQSBodW1hbiBvciBub24taHVtYW5vaWQgYmFzZSBjaGFyYWN0ZXIuXG4gKiBiYXNlIGNoYXJhY3RlciBpbmZvcm1hdGlvbiBub3Qgc3RvcmVkIGluIGRhdGFiYXNlXG4gKiBjb250YWlucyBwb3RlbnRpYWxHZWF0U2xvdHMsIHBvdGVudGlhbERpc2NpcGxpbmVzLCBldGMuXG4gKiBvbmx5IGNvbnRhaW5zIGFyY2hldHlwZXMgdGhhdCBjYW4gYmVjb21lIGNoYXJhY3RlciBzaGVldHMsIHdvdWxkIG5vdCBpbmNsdWRlIGEgdHJlZSwgZXRjLlxuICovXG5leHBvcnQgbmFtZXNwYWNlIEFyY2hldHlwZUxpc3Qge1xuICBleHBvcnQgdHlwZSBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN1cm5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgaGlzdG9yeT86IHN0cmluZztcbiAgICBiYWNrc3Rvcnk/OiBzdHJpbmc7XG4gICAgZXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBhbGlhcz86IHN0cmluZ1tdO1xuICAgIHN5bWJvbGl6ZXM/OiBzdHJpbmdbXTtcbiAgICBhZmZpbGlhdGlvbj86IHN0cmluZ1tdO1xuICAgIHdlYXBvblByb2ZpY2llbmN5PzogV2VhcG9uW107XG5cbiAgICAvLyB0aGVzZSBzZWVtIG1vcmUgbGlrZSB0aGV5IGxvYWRlZCBvciBkZXRlcm1pbmVkIGZvciBwbGF5ZXIgY2hhcmFjdGVyc1xuICAgIGxpZmU/OiBMaWZlO1xuICAgIGRyaXZlPzogRHJpdmU7XG4gICAgc3Bpcml0PzogU3Bpcml0O1xuICAgIHN0YXRzPzogU3RhdHM7XG5cbiAgICB0cmFpdHM/OiBUcmFpdFtdO1xuICAgIHN0YXR1c0VmZmVjdHM/OiBTdGF0dXNFZmZlY3RbXTtcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lcz86IERpc2NpcGxpbmVbXTtcbiAgICBwb3RlbnRpYWxPdXRmaXRzPzogT3V0Zml0W107XG4gICAgcG90ZW50aWFsR2VhdFNsb3RzPzogR2VhclNsb3RbXTtcbiAgICBzdW1tb25Db21wYXRpYmlsaXR5PzogU3VtbW9uW107XG5cbiAgICAvLyBjb21wYXRpYmlsaXR5IFtcbiAgICAvLyBkaXNjaXBsaW5lcz86IERpc2NpcGxpbmVbXTtcbiAgICAvLyBvdXRmaXRzPzogT3V0Zml0W107XG4gICAgLy8gZ2VhdFNsb3RzPzogR2VhclNsb3RbXTtcbiAgICAvLyBzdW1tb24/OiBTdW1tb25bXTtcbiAgICAvLyBdXG5cbiAgICBsb290PzogSXRlbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRocmVlIEtlZXBlcnNcbiAgICovXG4gIGV4cG9ydCBjb25zdCBNaXNjaGlldm91c1BpZWJhbGQ6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnTWlzY2hpZXZvdXMnLFxuICAgIHN1cm5hbWU6ICdQaWViYWxkJyxcbiAgICBhbGlhczogWydLZWVwZXIgb2YgTGF3J10sXG4gICAgYmFja3N0b3J5OiAnR292ZXJucyB0aGUgbG9naWNhbCBvZiB0aGlzIHJlYWxtLicsXG4gICAgc3ltYm9saXplczogWydMYXcnXSxcbiAgICBhZmZpbGlhdGlvbjogWydUaGUgS2VlcGVycyddLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBibGFjayBhbmQgd2hpdGUgY2F0IHdpdGggeWVsbG93IGV5ZXMuJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW0Rpc2NpcGxpbmUuU0FHRSwgRGlzY2lwbGluZS5HVUFSRElBTl0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEphbnVzUGVyc2lhbjogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdKYW51cycsXG4gICAgc3VybmFtZTogJ1BlcnNpYW4nLFxuICAgIGJhY2tzdG9yeTogJ0dvdmVybnMgdGhlIGZsb3cgb2YgdGltZSB0aGUgb25lIGhhcyBiZWVuIGluIHRoaXMgc3RhdGUnLFxuICAgIGFsaWFzOiBbJ0tlZXBlciBvZiBUaW1lJywgJ1dpc2UtS2l0dHknXSxcbiAgICBzeW1ib2xpemVzOiBbJ1RpbWUnXSxcbiAgICBhZmZpbGlhdGlvbjogWydUaGUgS2VlcGVycyddLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBvcmFuZ2Ugb2xkIHBlcmlhbiBjYXQnLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbRGlzY2lwbGluZS5TQUdFLCBEaXNjaXBsaW5lLkdVQVJESUFOXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgTG9vbWVlQW5nb3JhOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ0xvb21lZScsXG4gICAgc3VybmFtZTogJ0FuZ29yYScsXG4gICAgZGVzY3JpcHRpb246ICdMaWdodCBibG9uZGUgZ2lybCB3ZWFyaW5nIHdoaXRlIGxpbmVuJyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnU2hlIGdvdmVybnMgYW5kIHByb3RlY3RzIHRoZSBvbmVzIGhlYXJ0IHRvIG1ha2Ugc3VyZSBpdCBpcyBub3QgbG9zdC4gQSBnaXJsIGNyZWF0ZWQgd2hlbiB0aGUgU29uZyBNYWlkZW4gbGVmdCBoZXIgcG9zdCB0byBiZWNvbWUgaHVtYW4uJyxcbiAgICBhbGlhczogWydLZWVwZXIgb2YgSGVhcnQnLCAnU29uZyBNYWlkZW4nLCAnTW9tJ10sXG4gICAgc3ltYm9saXplczogWydDaGFzdGl0eSddLFxuICAgIGFmZmlsaWF0aW9uOiBbJ1RoZSBLZWVwZXJzJ10sXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtcbiAgICAgIERpc2NpcGxpbmUuQ0hFRVJMRUFERVIsXG4gICAgICBEaXNjaXBsaW5lLk1BRElFTixcbiAgICAgIERpc2NpcGxpbmUuS0VFUEVSLFxuICAgICAgRGlzY2lwbGluZS5DT09LLFxuICAgICAgRGlzY2lwbGluZS5IRUFMRVIsXG4gICAgICBEaXNjaXBsaW5lLlNBR0UsXG4gICAgICBEaXNjaXBsaW5lLkdVQVJESUFOLFxuICAgIF0sXG5cbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLkZFTElYXSxcbiAgfTtcblxuICAvKipcbiAgICogVGhyZWUgRGVzdHJveWVyXG4gICAqL1xuICBleHBvcnQgY29uc3QgVmFsbG9uT25pOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ1ZhbGxvbicsXG4gICAgc3VybmFtZTogJ09uaScsXG4gICAgc3ltYm9saXplczogWydEZXN0cm95ZXIgb2YgSGVhcnQnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1doaXRlIGhhaXInLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbRGlzY2lwbGluZS5TT0xJREVSLCBEaXNjaXBsaW5lLlhTT0xJREVSXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgT3Vlcm5Pbmk6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnT3Vlcm4nLFxuICAgIHN1cm5hbWU6ICdPbmknLFxuICAgIHN5bWJvbGl6ZXM6IFsnRGVzdHJveWVyIG9mIFRpbWUnXSxcbiAgICBhbGlhczogWydUaGUgQmxhY2sgUGxhZ3VlJ10sXG4gICAgYmFja3N0b3J5OiAnU2FpZCB0byBsZWQgdG8gZW5kIG9mIGFsbCB3aG8gZXhpc3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hpdGUgaGFpcicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLlNPTElERVIsIERpc2NpcGxpbmUuWFNPTElERVJdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBNZWVrdU9uaTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdNZWVrdScsXG4gICAgc3VybmFtZTogJ09uaScsXG4gICAgc3ltYm9saXplczogWydEZXN0cm95ZXIgb2YgTGF3J10sXG4gICAgYWxpYXM6IFsnS2lkJywgJ0Jyb3RoZXInXSxcbiAgICBiYWNrc3Rvcnk6ICdBIGJveSB3aG8gaGFzIGxvc3QgaGlzIHBhc3QnLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLlNPTElERVIsXG4gICAgICBEaXNjaXBsaW5lLlhTT0xJREVSLFxuICAgICAgRGlzY2lwbGluZS5CRVJTRVJLRVIsXG4gICAgICBEaXNjaXBsaW5lLk9OSSxcbiAgICAgIERpc2NpcGxpbmUuSEVSTyxcbiAgICBdLFxuICAgIHRyYWl0czogW1xuICAgICAge1xuICAgICAgICAvLyBsZWFybnMgcXVpY2tseVxuICAgICAgICB0YWc6IEVmZmVjdFRhZy5FWFBFUklFTkNFLFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LldFQUssXG4gICAgICAgIHF1YW50aXR5OiAxLjIsXG4gICAgICAgIG9wZXJhdG9yOiBPcGVyYXRvci5NVUxUSVBMWSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwb3RlbnRpYWxPdXRmaXRzOiBbT3V0Zml0LlRTSElSVF9BTkRfSkVBTlNdLFxuICAgIHN1bW1vbkNvbXBhdGliaWxpdHk6IFtTdW1tb24uVkFDSEVMXSxcbiAgfTtcblxuICAvKipcbiAgICogU2V2ZW4gVmlydHVlc1xuICAgKi9cbiAgZXhwb3J0IGNvbnN0IEFyaW5vdGhEaXlhdGg6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnQXJpbm90aCcsXG4gICAgc3VybmFtZTogJ0RpeWF0aCcsXG4gICAgc3ltYm9saXplczogWydQYXRpZW5jZSddLFxuICAgIGJhY2tzdG9yeTogJycsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBGYXllSW1hZ286IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnRmF5ZScsXG4gICAgc3VybmFtZTogJ0ltYWdvJyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnQSB5b3VuZyBnaXJsIHdpdGggbGlnaHQgdmlvbGV0IGhhaXIgd2hvIHdlaWxkcyBtYWdpYyBhbmQgc3R1ZGllcyBoaXN0b3J5JyxcbiAgICBzeW1ib2xpemVzOiBbJ0NoYXJpdHknXSxcbiAgICBhbGlhczogWydCb29rd29ybSddLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLldJWkFSRCxcbiAgICAgIERpc2NpcGxpbmUuSElTVE9SSUFOLFxuICAgICAgRGlzY2lwbGluZS5NQUdJLFxuICAgICAgRGlzY2lwbGluZS5NQUdJX0JMQUNLLFxuICAgICAgRGlzY2lwbGluZS5NQUdJX0JMVUUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfQlJPV04sXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfR1JFRU4sXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfUElOSyxcbiAgICAgIERpc2NpcGxpbmUuTUFHSV9QVVJQTEUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfV0hJVEUsXG4gICAgICBEaXNjaXBsaW5lLk1BR0lfWUVMTE9XLFxuICAgIF0sXG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eTogW1N1bW1vbi5MWVJFXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgR2FhbGlSdWluOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ0dhYWxpJyxcbiAgICBzdXJuYW1lOiAnUnVuZXdpbicsXG4gICAgc3ltYm9saXplczogWydUZW1wZXJhbmNlJ10sXG4gICAgZGVzY3JpcHRpb246ICdBIHdoaXRlIGhhaXJlZCB0aGluIHRlZW5hZ2VyJyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnQSBwcmluY2Ugd2l0aCBsaXR0bGUgaW50ZXJlc3QgaW4gYmVjb21pbmcga2luZy4gSW5zdGVhZCwgaGUgbGl2ZXMgZm9yIHRlc3RpbmcgaGlzIHN3b3JkIGluIHJhdyBkYW5nZXIuJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5CQVJELFxuICAgICAgRGlzY2lwbGluZS5EVUVMSVNULFxuICAgICAgRGlzY2lwbGluZS5LTklHSFQsXG4gICAgICBEaXNjaXBsaW5lLlJVTkVfS0lORyxcbiAgICAgIERpc2NpcGxpbmUuUk9ZQUxUWSxcbiAgICAgIC8vIC0gTm9iZWxcbiAgICAgIC8vIC0gRHVrZVxuICAgICAgLy8gLSBLaW5nXG4gICAgICBEaXNjaXBsaW5lLkhFUk8sXG4gICAgICBEaXNjaXBsaW5lLldBUlJJT1IsXG4gICAgXSxcbiAgICB0cmFpdHM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gaW5uYXRlIHByb2NpZW5jeSB3aXRoIHN3b3JkXG4gICAgICAgIHRhZzogRWZmZWN0VGFnLlNXT1JELFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LlJFU0lTVCxcbiAgICAgICAgcXVhbnRpdHk6IDAuNSxcbiAgICAgICAgb3BlcmF0b3I6IE9wZXJhdG9yLkRJVklERSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgR3VudGVyU3RvbmV3ZWxsOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ0d1bnRlcicsXG4gICAgc3VybmFtZTogJ1N0b25ld2VsbCcsXG4gICAgc3ltYm9saXplczogWydIdW1pbGl0eSddLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0EgbGFyZ2Ugb2xkIG1hbiB3aXRoIGdyZXkgaGFpciB3aG8gbG9va3MgYXMgdGhvdWdoIHRoZXkgaGF2ZSBzcGVuZCB0aGVpciBsaWZlIGluIGJhdHRsZScsXG4gICAgYmFja3N0b3J5OiAnQSBzb2xpZGVyIGZvciBsaWZlJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5HQVVSRCxcbiAgICAgIERpc2NpcGxpbmUuQk9EWV9CVUlMREVSLFxuICAgICAgRGlzY2lwbGluZS5DT01NQU5ERVIsXG4gICAgXSxcbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLlNDUklCQkxFU10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1hbGFjZVRzaWE6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnTWFsYWNlJyxcbiAgICBzdXJuYW1lOiAnVHNpYScsXG4gICAgYWxpYXM6IFtcbiAgICAgICdCbGFjaycsXG4gICAgICAnU2FjcmlmaWNlJyxcbiAgICAgICdPdXJvYm9yb3MnLFxuICAgICAgJ1RoZSBCcmluZ2VyIG9mIERlYXRoJyxcbiAgICAgICdEcmFnb24nLFxuICAgIF0sXG4gICAgc3ltYm9saXplczogWydEZXNwYWlyJ10sXG4gICAgYmFja3N0b3J5OlxuICAgICAgJ3dhcyB1c2VkIGFzIGEgc2NhcmlmaWNlIGZvciBoaXMgcGVvcGxlIHRvIGhvbGQgZGVtb25zIGJ5IHNld2luZyB0aGVtIHRvIGhpcyBza2luJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5HWU1OQVNULFxuICAgICAgRGlzY2lwbGluZS5QT1NTRVNTRUQsXG4gICAgICBEaXNjaXBsaW5lLlNDT1VULFxuICAgICAgRGlzY2lwbGluZS5PVVJPQk9ST1MsXG4gICAgICBEaXNjaXBsaW5lLlNVTU1PTkVSLFxuICAgICAgRGlzY2lwbGluZS5ST1VHRSxcbiAgICBdLFxuICAgIHRyYWl0czogW1xuICAgICAge1xuICAgICAgICAvLyBDYW4gc2luZ2xlIGhhbmRlZGx5IGNhcnJ5IHBhcnR5IHRocm91Z2ggZm9lcyBvZiBkYXJrbmVzcyBkdWUgdG8gaGlzIGRhcmtuZXNzIGhlYWxpbmcgdHJhaXQuXG4gICAgICAgIHRhZzogRWZmZWN0VGFnLkRBUktORVNTLFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LkhFQUwsXG4gICAgICAgIHBlcmNlbnQ6IDgwLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHBvdGVudGlhbE91dGZpdHM6IFtPdXRmaXQuT0ZGSUNFUlNfVU5JRk9STV0sXG4gICAgc3VtbW9uQ29tcGF0aWJpbGl0eTogW1N1bW1vbi5PVVJVQk9SVVMsIFN1bW1vbi5NSVNDSElFVk9VU10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFBlbm55S2liYnV0ejogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdQZW5ueScsXG4gICAgc3VybmFtZTogJ0tpYmJ1dHonLFxuICAgIGRlc2NyaXB0aW9uOiAnQSByZWQgaGVhZCBnaXJsJyxcbiAgICBiYWNrc3Rvcnk6ICcnLFxuICAgIHN5bWJvbGl6ZXM6IFsnS2luZG5lc3MnXSxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW1xuICAgICAgRGlzY2lwbGluZS5OSU5KQSxcbiAgICAgIERpc2NpcGxpbmUuQVNTQVNTSU4sXG4gICAgICBEaXNjaXBsaW5lLkFNQkVSX0FTU0FTU0lOLFxuICAgICAgRGlzY2lwbGluZS5FTElURV9BU1NBU0lOLFxuICAgICAgRGlzY2lwbGluZS5USElFRixcbiAgICBdLFxuICAgIHRyYWl0czogW1xuICAgICAge1xuICAgICAgICAvLyBoYXMgYnVpbHQgdXAgdG9sZXJhbmNlIHRvIHBvaXNvbnNcbiAgICAgICAgdGFnOiBFZmZlY3RUYWcuUE9JU09OLFxuICAgICAgICBtb2RpZmllcjogRWZmZWN0LklNTVVORSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdW1tb25Db21wYXRpYmlsaXR5OiBbU3VtbW9uLkhFUkFMRElDX0xJT05dLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBUcmFlelV0aHNoYTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdUcmFleicsXG4gICAgc3VybmFtZTogJ1V0aHNoYScsXG4gICAgYmFja3N0b3J5OiAnJyxcbiAgICBzeW1ib2xpemVzOiBbJ0RpbGlnZW5jZSddLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbXG4gICAgICBEaXNjaXBsaW5lLkVOR0lORUVSLFxuICAgICAgRGlzY2lwbGluZS5NRUNIQU5JQyxcbiAgICAgIERpc2NpcGxpbmUuTElHSFRFTklOR19XQVJSSU9SLFxuICAgICAgRGlzY2lwbGluZS5SRUJFTCxcbiAgICBdLFxuICAgIHN1bW1vbkNvbXBhdGliaWxpdHk6IFtTdW1tb24uU0FORFldLFxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXZlbiBTaW5zXG4gICAqL1xuICBleHBvcnQgY29uc3QgVm9pZDogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdWb2lkJyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnSXMgb25lIG9mIHRoZSBvcmlnaW5hbCBzZXZlbiBkZW1vbnMuIEhlIHdhcyBraWxsZWQgYmVmb3JlIHRoZSBzdG9yeSBiZWdpbnMuIEhpcyBwbGFjZSBpcyB0YWtlbiBieSBNYWhkaS4nLFxuXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLk1BR0lfQkxBQ0tdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBHZW5raTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdHZW5raScsXG4gICAgc3ltYm9saXplczogWydXcmF0aCcsICdGaXNoJ10sXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLk1BR0lfQkxVRV0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IExhd3pvbjogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdMYXd6b24nLFxuICAgIHN1cm5hbWU6ICdHcmV5JyxcbiAgICBzeW1ib2xpemVzOiBbJ1Nsb3RoJywgJ1dvbGYnXSxcbiAgICBoaXN0b3J5OlxuICAgICAgJ1J1bW9yZWQgdG8gYmUgdGhlIG1vc3QgcG93ZXJmdWwgZmlnaHRlciBmcm9tIHRoZSBub3J0aC4gSGUgZm91Z2h0IG9ubHkgdG8gcHJvdGVjdCBoaXMgdmlsbGFnZSB1bnRpbCBpdCB3YXMgd2lwZWQgb3V0IGZyb20gYSBncmVhdCBmcm9zdC4gSGUgbm93IHdvbmRlcnMgYXJvdW5kIGxpZmVsZXNzbHkgaW4gc2VhcmNoIG9mIGFuIGVuZC4gSGUgaXMgYnkgZmFyIHRoZSBtb3N0IHN0cm9uZ2VzdCBvZiB0aGUgc2V2ZW4gYnV0IGhhcyBubyB3aWxsIHRvIGZpZ2h0LicsXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLk1BR0lfV0hJVEVdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBNYWRoaTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdNYWhkaScsXG4gICAgc3VybmFtZTogJ1RzaWEnLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbGFjZSdzIGJyb3RoZXJcIixcbiAgICBiYWNrc3Rvcnk6ICdXaGVuIHRoZSB3b3JsZCBpcyBhYm91dCB0byBlbmQgaGUgaXMgaXRzIHNhdm9yJyxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW0Rpc2NpcGxpbmUuUE9TU0VTU0VELCBEaXNjaXBsaW5lLk1BR0lfQkxBQ0tdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTdXlyaTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdTdXlyaScsXG4gICAgZGVzY3JpcHRpb246ICd1c2VzIHN0cm9uZyBtYWdpY2FsIHBvd2VycycsXG4gICAgc3ltYm9saXplczogWydMdXh1cnkgKGxhdGVyIGx1c3QpJywgJ0ZveCddLFxuICAgIHBvdGVudGlhbERpc2NpcGxpbmVzOiBbRGlzY2lwbGluZS5XSVpBUkQsIERpc2NpcGxpbmUuTUFHSV9QSU5LXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgV2lzcDogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdXaXNwJyxcbiAgICBzeW1ib2xpemVzOiBbJ0dsdXR0b255JywgJ0hlbnlhJ10sXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLk1BR0lfWUVMTE9XXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQXNtaW46IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnQXNtaW4nLFxuICAgIHN5bWJvbGl6ZXM6IFsnUHJpZGUnLCAnT3gnXSxcbiAgICBwb3RlbnRpYWxEaXNjaXBsaW5lczogW0Rpc2NpcGxpbmUuTUFHSV9CUk9XTl0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IERpYWc6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnRGlhZycsXG4gICAgc3ltYm9saXplczogWydFbnZ5JywgJ1NuYWtlJ10sXG4gICAgcG90ZW50aWFsRGlzY2lwbGluZXM6IFtEaXNjaXBsaW5lLk1BR0lfUFVSUExFXSxcbiAgfTtcblxuICAvKipcbiAgICogTm90YWJsZSBCYWQgR3V5c1xuICAgKi9cbiAgZXhwb3J0IGNvbnN0IE1vbmFyY2g6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnTW9uYXJjaCcsXG4gICAgYWxpYXM6IFsnVGhlIERlYWRseSBPbmUnXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgVmljZXJveTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdWaWNlcm95JyxcbiAgICBiYWNrc3Rvcnk6ICdtaW1pYyBtb25hcmNoJyxcbiAgfTtcblxuICAvKipcbiAgICogQmF0dGxlcnNcbiAgICovXG4gIGV4cG9ydCBjb25zdCBTcGlkZXI6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnU3BpZGVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Egc3BpZGVyJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgU2VhSG9yc2U6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnU2VhIEhvcnNlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Egc3BpZGVyJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgU2Vuc2l0aXZlUGxhbnQ6IENoYXJhY3RlciA9IHtcbiAgICBuYW1lOiAnU2Vuc2l0aXZlIFBsYW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgcGxhbnQgdGhhdCBkcm9wcyB3aGVuIHRvdWNoZWQnLFxuICB9O1xuXG4gIC8vIEJpcmQgb2YgRmlyZSAtIHBob2VuaXhcbiAgLy8gU25ha2Ugb2YgV2F0ZXIg4oCTIGRyYWdvblxuICAvLyBDaGltZXJhIOKAkyBhIGNvbWJpbmF0aW9uIG9mIHR3byBvciBtb3JlIGFuaW1hbHNcbiAgLy8gQSB0eXBlIG9mIHNsb3RoIGxpa2UgY3JlYXR1cmUgdGhhdCBsaXZlcyBhcm91bmQgdGhlIG1haWRlbiBvZiB0aGUgbWlzdFxuICAvLyBBIHNub3cgbGVvcGFyZCBjcmVhdHVyZSB0aGF0IGxpdmVzIHVwIG5vcnRoIChjYW4gYmUgc2VlbiBuZWFyIExhd3pvbilcbn1cblxuZXhwb3J0IHR5cGUgQXJjaGV0eXBlS2V5ID0gdHlwZW9mIEFyY2hldHlwZUxpc3Q7XG5leHBvcnQgdHlwZSBBcmNoZXR5cGVUeXBlID0ga2V5b2YgQXJjaGV0eXBlS2V5O1xuXG5leHBvcnQgY29uc3QgQXJjaGV0eXBlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXJjaGV0eXBlSWQ6IEFyY2hldHlwZVR5cGUgPSBpZCBhcyBBcmNoZXR5cGVUeXBlO1xuICBjb25zdCBhcmNoZXR5cGUgPSBBcmNoZXR5cGVMaXN0W2FyY2hldHlwZUlkXTtcbiAgcmV0dXJuIGFyY2hldHlwZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBcmNoZXR5cGVMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoQXJjaGV0eXBlTGlzdCk7XG59O1xuIl19