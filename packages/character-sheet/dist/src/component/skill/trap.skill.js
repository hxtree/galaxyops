"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trap = void 0;
var Trap;
(function (Trap) {
    Trap["POISON_TRAP"] = "Poison Trap";
    Trap["EXPLOSIVE_TRAP"] = "Explosive Trap";
    Trap["TIME_BOMB_TRAP"] = "Time Bomb Trap";
    Trap["CALTROPS_TRAP"] = "Caltrops Trap";
    Trap["DISABLE_TRAP"] = "Disable Trap";
})(Trap = exports.Trap || (exports.Trap = {}));
// category: SkillCategory.CLASS;
/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
(function (Trap) {
    Trap.PoisonTrap = {
        name: Trap.POISON_TRAP,
        description: 'Set a poison trap',
    };
    Trap.ExplosiveTrap = {
        name: Trap.EXPLOSIVE_TRAP,
        description: 'Set a explosive trap',
    };
    Trap.TimeBombTrap = {
        name: Trap.TIME_BOMB_TRAP,
        description: 'Set a time based trap',
    };
    Trap.CaltropsTrap = {
        name: Trap.CALTROPS_TRAP,
        description: 'Set a trap of spiked caltrops',
    };
    Trap.DisableTrap = {
        name: Trap.DISABLE_TRAP,
        description: 'Disable a set trap',
    };
})(Trap = exports.Trap || (exports.Trap = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC5za2lsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvc2tpbGwvdHJhcC5za2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLElBTVg7QUFORCxXQUFZLElBQUk7SUFDZCxtQ0FBMkIsQ0FBQTtJQUMzQix5Q0FBaUMsQ0FBQTtJQUNqQyx5Q0FBaUMsQ0FBQTtJQUNqQyx1Q0FBK0IsQ0FBQTtJQUMvQixxQ0FBNkIsQ0FBQTtBQUMvQixDQUFDLEVBTlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBTWY7QUFFRCxpQ0FBaUM7QUFFakM7OztHQUdHO0FBQ0gsV0FBaUIsSUFBSTtJQU1OLGVBQVUsR0FBYTtRQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDdEIsV0FBVyxFQUFFLG1CQUFtQjtLQUNqQyxDQUFDO0lBRVcsa0JBQWEsR0FBYTtRQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWM7UUFDekIsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQyxDQUFDO0lBRVcsaUJBQVksR0FBYTtRQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWM7UUFDekIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO0lBRVcsaUJBQVksR0FBYTtRQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDeEIsV0FBVyxFQUFFLCtCQUErQjtLQUM3QyxDQUFDO0lBRVcsZ0JBQVcsR0FBYTtRQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7UUFDdkIsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQyxDQUFDO0FBQ0osQ0FBQyxFQTlCZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBOEJwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRyYXAge1xuICBQT0lTT05fVFJBUCA9ICdQb2lzb24gVHJhcCcsXG4gIEVYUExPU0lWRV9UUkFQID0gJ0V4cGxvc2l2ZSBUcmFwJyxcbiAgVElNRV9CT01CX1RSQVAgPSAnVGltZSBCb21iIFRyYXAnLFxuICBDQUxUUk9QU19UUkFQID0gJ0NhbHRyb3BzIFRyYXAnLFxuICBESVNBQkxFX1RSQVAgPSAnRGlzYWJsZSBUcmFwJyxcbn1cblxuLy8gY2F0ZWdvcnk6IFNraWxsQ2F0ZWdvcnkuQ0xBU1M7XG5cbi8qKlxuICogVHJhcCBTa2lsbFxuICogc2V0IGEgdHJhcCB0aGF0IHdpbGwgZ28gb2ZmIHdoZW4gdGhlIHRpbGUgaXMgc3Rvb2Qgb24uXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgVHJhcCB7XG4gIGV4cG9ydCB0eXBlIFRyYXBUeXBlID0ge1xuICAgIG5hbWU6IFRyYXA7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUG9pc29uVHJhcDogVHJhcFR5cGUgPSB7XG4gICAgbmFtZTogVHJhcC5QT0lTT05fVFJBUCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCBhIHBvaXNvbiB0cmFwJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRXhwbG9zaXZlVHJhcDogVHJhcFR5cGUgPSB7XG4gICAgbmFtZTogVHJhcC5FWFBMT1NJVkVfVFJBUCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCBhIGV4cGxvc2l2ZSB0cmFwJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgVGltZUJvbWJUcmFwOiBUcmFwVHlwZSA9IHtcbiAgICBuYW1lOiBUcmFwLlRJTUVfQk9NQl9UUkFQLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IGEgdGltZSBiYXNlZCB0cmFwJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQ2FsdHJvcHNUcmFwOiBUcmFwVHlwZSA9IHtcbiAgICBuYW1lOiBUcmFwLkNBTFRST1BTX1RSQVAsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgYSB0cmFwIG9mIHNwaWtlZCBjYWx0cm9wcycsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IERpc2FibGVUcmFwOiBUcmFwVHlwZSA9IHtcbiAgICBuYW1lOiBUcmFwLkRJU0FCTEVfVFJBUCxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGUgYSBzZXQgdHJhcCcsXG4gIH07XG59XG4iXX0=