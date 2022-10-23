export declare enum Drive {
    BERSERK = "Berserk",
    TOXIC_THRUST = "Toxic Thrust",
    AERIAL_ASSUALT = "Aerial Assualt",
    ONI = "Oni",
    TRUE_ONI = "True Oni"
}
/**
 * Drive Actions are special actions that consume drive gauge
 */
export declare namespace DriveSkill {
    type DriveType = {
        name: Drive;
        description: string;
        conditions?: string;
    };
    const Berserk: DriveType;
    const ToxicThrust: DriveType;
    const AerialAssault: DriveType;
    const Oni: DriveType;
    const TrueOni: DriveType;
}
