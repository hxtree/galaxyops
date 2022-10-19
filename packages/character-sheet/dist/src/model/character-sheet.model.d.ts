/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Trait } from '../component/trait';
import { Discipline } from '../component/discipline';
import { Drive, Life, Spirit } from '../component/gauges';
import { GearSlot } from '../component/gear';
import { Equipment } from '../component/equipment.gear';
export interface ICharacterSheet {
    id: typeof uuidv4;
    archetype: string;
    traits: Trait[];
    attributes: {
        life: Life;
        spirit: Spirit;
        drive: Drive;
        power: number;
        speed: number;
        wisdom: number;
        intelligence: number;
        defense: number;
        accuracy: number;
        evasion: number;
        luck: number;
    };
    experiences: {
        discipline: Discipline;
        experience: number;
    }[];
    equipment: {
        gearSlot: GearSlot;
        equipment: Equipment;
    }[];
    updatedAt: Date;
    createdAt: Date;
}
export declare const characterSheetSchema: Schema<ICharacterSheet, import("mongoose").Model<ICharacterSheet, any, any, any, any>, {}, {}, {}, {}, "type", ICharacterSheet>;
export declare const CharacterSheet: import("mongoose").Model<ICharacterSheet, {}, {}, {}, any>;
