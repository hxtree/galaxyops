/**
 * Element are a type of tag used to determine weakness and resistance
 * For example, if a weapon deals fire damage but the target is immune to fire, the weapon will deal no damage.
 */
export enum Element {
    ELECTRIC = "Electric", // this is the damage type modifier for lightning. 
    AIR = "Air", // this is the damage type modifier for wind.
    EARTH = "Earth", // this is the damage type modifier for earth.
    FIRE = "Fire", // this is the damage type modifier for fire.
    WATER = "Water", // this is the damage type modifier for water.
    NATURE = "Nature", // this is the damage type modifier for nature. 
    PHYSICAL = "Physical", // this is the damage type modifier for physical.
    PSYCHIC = "Psychic", // this is the damage type modifier for psychic.
    DARKNESS = "Darkness", // this is the damage type modifier for darkness.
    LIGHT = "Light" // this is the damage type modifier for light.
}
