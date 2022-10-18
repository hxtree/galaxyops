"use strict";
/*
 * Attributes are the primary way to describe a character's **last known state**.
 * Gauge attributes such as Life, Spirit, and Drive have a current value and a maximum value.
 * The maximum value may be exceeded, but the current value cannot be negative.
 * The current value is variable, and may be modified by actions.
 * The maximum value is fixed, and cannot be modified by actions. Instead it is computed from the
 * character's discipline, the character's level, and the character's equipment.
 * https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
var Attribute;
(function (Attribute) {
    Attribute["EXPERIENCE"] = "Experience";
    Attribute["LIFE"] = "Life";
    Attribute["SPIRIT"] = "Spirit";
    Attribute["DRIVE"] = "Drive";
    Attribute["POWER"] = "Power";
    Attribute["SPEED"] = "Speed";
    Attribute["WISDOM"] = "Wisdom";
    Attribute["INTELLIGENCE"] = "Intelligence";
    Attribute["DEFENSE"] = "Defense";
    Attribute["ACCURACY"] = "Accuracy";
    Attribute["EVASION"] = "Evasion";
    Attribute["LUCK"] = "Luck";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOzs7QUFFSCxJQUFZLFNBYVg7QUFiRCxXQUFZLFNBQVM7SUFDbkIsc0NBQXlCLENBQUE7SUFDekIsMEJBQWEsQ0FBQTtJQUNiLDhCQUFpQixDQUFBO0lBQ2pCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsNEJBQWUsQ0FBQTtJQUNmLDhCQUFpQixDQUFBO0lBQ2pCLDBDQUE2QixDQUFBO0lBQzdCLGdDQUFtQixDQUFBO0lBQ25CLGtDQUFxQixDQUFBO0lBQ3JCLGdDQUFtQixDQUFBO0lBQ25CLDBCQUFhLENBQUE7QUFDZixDQUFDLEVBYlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFhcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXR0cmlidXRlcyBhcmUgdGhlIHByaW1hcnkgd2F5IHRvIGRlc2NyaWJlIGEgY2hhcmFjdGVyJ3MgKipsYXN0IGtub3duIHN0YXRlKiouXG4gKiBHYXVnZSBhdHRyaWJ1dGVzIHN1Y2ggYXMgTGlmZSwgU3Bpcml0LCBhbmQgRHJpdmUgaGF2ZSBhIGN1cnJlbnQgdmFsdWUgYW5kIGEgbWF4aW11bSB2YWx1ZS5cbiAqIFRoZSBtYXhpbXVtIHZhbHVlIG1heSBiZSBleGNlZWRlZCwgYnV0IHRoZSBjdXJyZW50IHZhbHVlIGNhbm5vdCBiZSBuZWdhdGl2ZS5cbiAqIFRoZSBjdXJyZW50IHZhbHVlIGlzIHZhcmlhYmxlLCBhbmQgbWF5IGJlIG1vZGlmaWVkIGJ5IGFjdGlvbnMuXG4gKiBUaGUgbWF4aW11bSB2YWx1ZSBpcyBmaXhlZCwgYW5kIGNhbm5vdCBiZSBtb2RpZmllZCBieSBhY3Rpb25zLiBJbnN0ZWFkIGl0IGlzIGNvbXB1dGVkIGZyb20gdGhlXG4gKiBjaGFyYWN0ZXIncyBkaXNjaXBsaW5lLCB0aGUgY2hhcmFjdGVyJ3MgbGV2ZWwsIGFuZCB0aGUgY2hhcmFjdGVyJ3MgZXF1aXBtZW50LlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQXR0cmlidXRlXyhyb2xlLXBsYXlpbmdfZ2FtZXMpXG4gKi9cblxuZXhwb3J0IGVudW0gQXR0cmlidXRlIHtcbiAgRVhQRVJJRU5DRSA9ICdFeHBlcmllbmNlJyxcbiAgTElGRSA9ICdMaWZlJyxcbiAgU1BJUklUID0gJ1NwaXJpdCcsXG4gIERSSVZFID0gJ0RyaXZlJyxcbiAgUE9XRVIgPSAnUG93ZXInLFxuICBTUEVFRCA9ICdTcGVlZCcsXG4gIFdJU0RPTSA9ICdXaXNkb20nLFxuICBJTlRFTExJR0VOQ0UgPSAnSW50ZWxsaWdlbmNlJyxcbiAgREVGRU5TRSA9ICdEZWZlbnNlJyxcbiAgQUNDVVJBQ1kgPSAnQWNjdXJhY3knLFxuICBFVkFTSU9OID0gJ0V2YXNpb24nLFxuICBMVUNLID0gJ0x1Y2snLFxufVxuIl19