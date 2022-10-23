"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriveSkill = exports.Drive = void 0;
var Drive;
(function (Drive) {
    Drive["BERSERK"] = "Berserk";
    Drive["TOXIC_THRUST"] = "Toxic Thrust";
    Drive["AERIAL_ASSUALT"] = "Aerial Assualt";
    Drive["ONI"] = "Oni";
    Drive["TRUE_ONI"] = "True Oni";
})(Drive = exports.Drive || (exports.Drive = {}));
// category: SkillCategory.DRIVE;
/**
 * Drive Actions are special actions that consume drive gauge
 */
var DriveSkill;
(function (DriveSkill) {
    DriveSkill.Berserk = {
        name: Drive.BERSERK,
        description: 'Become completely focused on winning',
    };
    DriveSkill.ToxicThrust = {
        name: Drive.TOXIC_THRUST,
        description: '',
    };
    DriveSkill.AerialAssault = {
        name: Drive.AERIAL_ASSUALT,
        description: 'Jump into air and throws boomerang (jump attack)',
    };
    DriveSkill.Oni = {
        name: Drive.ONI,
        description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
    };
    DriveSkill.TrueOni = {
        name: Drive.TRUE_ONI,
        description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
        conditions: 'Player must have very little life left and max DriveAction in order to perform.',
    };
})(DriveSkill = exports.DriveSkill || (exports.DriveSkill = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmUuc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL2RyaXZlLnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksS0FNWDtBQU5ELFdBQVksS0FBSztJQUNmLDRCQUFtQixDQUFBO0lBQ25CLHNDQUE2QixDQUFBO0lBQzdCLDBDQUFpQyxDQUFBO0lBQ2pDLG9CQUFXLENBQUE7SUFDWCw4QkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBTlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBTWhCO0FBRUQsaUNBQWlDO0FBRWpDOztHQUVHO0FBQ0gsSUFBaUIsVUFBVSxDQW1DMUI7QUFuQ0QsV0FBaUIsVUFBVTtJQU9aLGtCQUFPLEdBQWM7UUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7S0FDcEQsQ0FBQztJQUVXLHNCQUFXLEdBQWM7UUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxZQUFZO1FBQ3hCLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUM7SUFFVyx3QkFBYSxHQUFjO1FBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsY0FBYztRQUMxQixXQUFXLEVBQUUsa0RBQWtEO0tBQ2hFLENBQUM7SUFFVyxjQUFHLEdBQWM7UUFDNUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ2YsV0FBVyxFQUFFOzhEQUM2QztLQUMzRCxDQUFDO0lBRVcsa0JBQU8sR0FBYztRQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDcEIsV0FBVyxFQUFFOytEQUM4QztRQUMzRCxVQUFVLEVBQ1IsaUZBQWlGO0tBQ3BGLENBQUM7QUFDSixDQUFDLEVBbkNnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQW1DMUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBEcml2ZSB7XG4gIEJFUlNFUksgPSAnQmVyc2VyaycsXG4gIFRPWElDX1RIUlVTVCA9ICdUb3hpYyBUaHJ1c3QnLFxuICBBRVJJQUxfQVNTVUFMVCA9ICdBZXJpYWwgQXNzdWFsdCcsXG4gIE9OSSA9ICdPbmknLFxuICBUUlVFX09OSSA9ICdUcnVlIE9uaScsXG59XG5cbi8vIGNhdGVnb3J5OiBTa2lsbENhdGVnb3J5LkRSSVZFO1xuXG4vKipcbiAqIERyaXZlIEFjdGlvbnMgYXJlIHNwZWNpYWwgYWN0aW9ucyB0aGF0IGNvbnN1bWUgZHJpdmUgZ2F1Z2VcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBEcml2ZVNraWxsIHtcbiAgZXhwb3J0IHR5cGUgRHJpdmVUeXBlID0ge1xuICAgIG5hbWU6IERyaXZlO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY29uZGl0aW9ucz86IHN0cmluZztcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQmVyc2VyazogRHJpdmVUeXBlID0ge1xuICAgIG5hbWU6IERyaXZlLkJFUlNFUkssXG4gICAgZGVzY3JpcHRpb246ICdCZWNvbWUgY29tcGxldGVseSBmb2N1c2VkIG9uIHdpbm5pbmcnLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBUb3hpY1RocnVzdDogRHJpdmVUeXBlID0ge1xuICAgIG5hbWU6IERyaXZlLlRPWElDX1RIUlVTVCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEFlcmlhbEFzc2F1bHQ6IERyaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBEcml2ZS5BRVJJQUxfQVNTVUFMVCxcbiAgICBkZXNjcmlwdGlvbjogJ0p1bXAgaW50byBhaXIgYW5kIHRocm93cyBib29tZXJhbmcgKGp1bXAgYXR0YWNrKScsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE9uaTogRHJpdmVUeXBlID0ge1xuICAgIG5hbWU6IERyaXZlLk9OSSxcbiAgICBkZXNjcmlwdGlvbjogYEJlY29tZSBlbmd1bGZlZCBpbiBhIGJsb29kIHRoaXJzdHkgcmFnZSB0aGF0IG11bHRpcGxpZXMgeW91ciBwb3dlciBidXQgZHJhaW5zIHNwaXJpdC5cbiAgICAgIElmIGNoYXJhY3RlciBzdGF5cyBpbiBPbmkgdG9vIGxvbmcgdGhleSB3aWxsIGdvIEJlcnNlcmtgLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBUcnVlT25pOiBEcml2ZVR5cGUgPSB7XG4gICAgbmFtZTogRHJpdmUuVFJVRV9PTkksXG4gICAgZGVzY3JpcHRpb246IGBCZWNvbWUgZW5ndWxmZWQgaW4gYSBtb3JlIHBvd2VyZnVsIGJsb29kIHRoaXJzdHkgcmFnZSB0aGF0IG11bHRpcGxpZXMgcG93ZXIgYnV0IGRyYWlucyBzcGlyaXQuXG4gICAgICBJZiBjaGFyYWN0ZXIgc3RheXMgaW4gT25pIHRvbyBsb25nIHRoZXkgd2lsbCBnbyBCZXJzZXJrLmAsXG4gICAgY29uZGl0aW9uczpcbiAgICAgICdQbGF5ZXIgbXVzdCBoYXZlIHZlcnkgbGl0dGxlIGxpZmUgbGVmdCBhbmQgbWF4IERyaXZlQWN0aW9uIGluIG9yZGVyIHRvIHBlcmZvcm0uJyxcbiAgfTtcbn1cbiJdfQ==