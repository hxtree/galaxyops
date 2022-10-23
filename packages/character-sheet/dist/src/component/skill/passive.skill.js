"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passive = void 0;
var Passive;
(function (Passive) {
    Passive["DUAL_WELD"] = "Dual Weld";
    Passive["ESCAPE_ARTIST"] = "Escape Artist";
    Passive["INTIMIDATE"] = "Intimidate";
    Passive["CONCENTRATION"] = "Concentration";
    Passive["BLUFF"] = "Bluff";
    Passive["SENSE_BLUFF"] = "Sense Bluff";
    Passive["GREEDY_INTENT"] = "Greedy Intent";
    Passive["SLOTH_COMPOSURE"] = "Sloth Composure";
    Passive["BLOOD_LUST"] = "Blood Lust";
    Passive["ENVIOUS_OF_COMBAT"] = "Envious of Combat";
    Passive["GLUTTONOUS_DESIRE"] = "Gluttonous Desire";
    Passive["CATCHER"] = "Catcher";
})(Passive = exports.Passive || (exports.Passive = {}));
/**
 * Passive are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
(function (Passive) {
    Passive.DualWeld = {
        name: Passive.DUAL_WELD,
        description: 'Can use two one handed weapons at once.',
        // " Both malace and penny can learn this.
    };
    Passive.EscapeArtist = {
        name: Passive.ESCAPE_ARTIST,
        description: 'Makes it easier to run away from aggresive targets',
    };
    Passive.Intimidate = {
        name: Passive.INTIMIDATE,
        description: 'Causes fear in enemy',
    };
    Passive.Concentration = {
        name: Passive.CONCENTRATION,
        description: 'Stay focused',
    };
    Passive.Bluff = {
        name: Passive.BLUFF,
        description: 'Tell a lie without being caught',
    };
    Passive.SenseBluff = {
        name: Passive.SENSE_BLUFF,
        description: 'Detect if a lie is being told',
        // if character beats bluff check, a little icon on the screen will tell if someone is trying to bluff party
    };
    Passive.GreedyIntent = {
        name: Passive.GREEDY_INTENT,
        description: 'Gain 5% more experience than party',
        // earned from defeating Greed
    };
    Passive.SlothComposure = {
        name: Passive.SLOTH_COMPOSURE,
        description: 'Blows taken when not doing action are halved',
        // earned from defeating Lawzon
    };
    Passive.BloodLust = {
        name: Passive.BLOOD_LUST,
        description: 'Speed in battle increased',
        // earned from defeating Lust
    };
    Passive.EnviousOfCombat = {
        name: Passive.ENVIOUS_OF_COMBAT,
        description: 'Gain rage from watching combat',
        // earned from defeating Envy
    };
    Passive.GluttonousDesire = {
        name: Passive.GLUTTONOUS_DESIRE,
        description: 'Comsumer food items twice as fast',
        // earned from defeating Glutony
    };
    Passive.Catcher = {
        name: Passive.CATCHER,
        description: 'Receive bonus when catching items',
    };
})(Passive = exports.Passive || (exports.Passive = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc2l2ZS5za2lsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvc2tpbGwvcGFzc2l2ZS5za2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLE9BYVg7QUFiRCxXQUFZLE9BQU87SUFDakIsa0NBQXVCLENBQUE7SUFDdkIsMENBQStCLENBQUE7SUFDL0Isb0NBQXlCLENBQUE7SUFDekIsMENBQStCLENBQUE7SUFDL0IsMEJBQWUsQ0FBQTtJQUNmLHNDQUEyQixDQUFBO0lBQzNCLDBDQUErQixDQUFBO0lBQy9CLDhDQUFtQyxDQUFBO0lBQ25DLG9DQUF5QixDQUFBO0lBQ3pCLGtEQUF1QyxDQUFBO0lBQ3ZDLGtEQUF1QyxDQUFBO0lBQ3ZDLDhCQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFiVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFhbEI7QUFFRDs7O0dBR0c7QUFDSCxXQUFpQixPQUFPO0lBTVQsZ0JBQVEsR0FBZ0I7UUFDbkMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQ3ZCLFdBQVcsRUFBRSx5Q0FBeUM7UUFDdEQsMENBQTBDO0tBQzNDLENBQUM7SUFFVyxvQkFBWSxHQUFnQjtRQUN2QyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWE7UUFDM0IsV0FBVyxFQUFFLG9EQUFvRDtLQUNsRSxDQUFDO0lBRVcsa0JBQVUsR0FBZ0I7UUFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1FBQ3hCLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQztJQUVXLHFCQUFhLEdBQWdCO1FBQ3hDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYTtRQUMzQixXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDO0lBRVcsYUFBSyxHQUFnQjtRQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDbkIsV0FBVyxFQUFFLGlDQUFpQztLQUMvQyxDQUFDO0lBRVcsa0JBQVUsR0FBZ0I7UUFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ3pCLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsNEdBQTRHO0tBQzdHLENBQUM7SUFFVyxvQkFBWSxHQUFnQjtRQUN2QyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWE7UUFDM0IsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCw4QkFBOEI7S0FDL0IsQ0FBQztJQUVXLHNCQUFjLEdBQWdCO1FBQ3pDLElBQUksRUFBRSxPQUFPLENBQUMsZUFBZTtRQUM3QixXQUFXLEVBQUUsOENBQThDO1FBQzNELCtCQUErQjtLQUNoQyxDQUFDO0lBRVcsaUJBQVMsR0FBZ0I7UUFDcEMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1FBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsNkJBQTZCO0tBQzlCLENBQUM7SUFFVyx1QkFBZSxHQUFnQjtRQUMxQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtRQUMvQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLDZCQUE2QjtLQUM5QixDQUFDO0lBRVcsd0JBQWdCLEdBQWdCO1FBQzNDLElBQUksRUFBRSxPQUFPLENBQUMsaUJBQWlCO1FBQy9CLFdBQVcsRUFBRSxtQ0FBbUM7UUFDaEQsZ0NBQWdDO0tBQ2pDLENBQUM7SUFFVyxlQUFPLEdBQWdCO1FBQ2xDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTztRQUNyQixXQUFXLEVBQUUsbUNBQW1DO0tBQ2pELENBQUM7QUFDSixDQUFDLEVBeEVnQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUF3RXZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gUGFzc2l2ZSB7XG4gIERVQUxfV0VMRCA9ICdEdWFsIFdlbGQnLFxuICBFU0NBUEVfQVJUSVNUID0gJ0VzY2FwZSBBcnRpc3QnLFxuICBJTlRJTUlEQVRFID0gJ0ludGltaWRhdGUnLFxuICBDT05DRU5UUkFUSU9OID0gJ0NvbmNlbnRyYXRpb24nLFxuICBCTFVGRiA9ICdCbHVmZicsXG4gIFNFTlNFX0JMVUZGID0gJ1NlbnNlIEJsdWZmJyxcbiAgR1JFRURZX0lOVEVOVCA9ICdHcmVlZHkgSW50ZW50JyxcbiAgU0xPVEhfQ09NUE9TVVJFID0gJ1Nsb3RoIENvbXBvc3VyZScsXG4gIEJMT09EX0xVU1QgPSAnQmxvb2QgTHVzdCcsXG4gIEVOVklPVVNfT0ZfQ09NQkFUID0gJ0VudmlvdXMgb2YgQ29tYmF0JyxcbiAgR0xVVFRPTk9VU19ERVNJUkUgPSAnR2x1dHRvbm91cyBEZXNpcmUnLFxuICBDQVRDSEVSID0gJ0NhdGNoZXInLFxufVxuXG4vKipcbiAqIFBhc3NpdmUgYXJlIGFiaWxpdGllcyB0aGF0IGFyZSBub3QgYWN0aW9uc1xuICogVGhleSBhcmUga2luZCBvZiBsaWtlIG5hdHVyYWwgYWN0aW9ucyBhcyB0aGV5IGRvIG5vdCBuZWVkIHRvIGJlIGNhbGxlZCB0byBiZSB1c2VkLlxuICovXG5leHBvcnQgbmFtZXNwYWNlIFBhc3NpdmUge1xuICBleHBvcnQgdHlwZSBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRHVhbFdlbGQ6IFBhc3NpdmVUeXBlID0ge1xuICAgIG5hbWU6IFBhc3NpdmUuRFVBTF9XRUxELFxuICAgIGRlc2NyaXB0aW9uOiAnQ2FuIHVzZSB0d28gb25lIGhhbmRlZCB3ZWFwb25zIGF0IG9uY2UuJyxcbiAgICAvLyBcIiBCb3RoIG1hbGFjZSBhbmQgcGVubnkgY2FuIGxlYXJuIHRoaXMuXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEVzY2FwZUFydGlzdDogUGFzc2l2ZVR5cGUgPSB7XG4gICAgbmFtZTogUGFzc2l2ZS5FU0NBUEVfQVJUSVNULFxuICAgIGRlc2NyaXB0aW9uOiAnTWFrZXMgaXQgZWFzaWVyIHRvIHJ1biBhd2F5IGZyb20gYWdncmVzaXZlIHRhcmdldHMnLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBJbnRpbWlkYXRlOiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLklOVElNSURBVEUsXG4gICAgZGVzY3JpcHRpb246ICdDYXVzZXMgZmVhciBpbiBlbmVteScsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IENvbmNlbnRyYXRpb246IFBhc3NpdmVUeXBlID0ge1xuICAgIG5hbWU6IFBhc3NpdmUuQ09OQ0VOVFJBVElPTixcbiAgICBkZXNjcmlwdGlvbjogJ1N0YXkgZm9jdXNlZCcsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEJsdWZmOiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLkJMVUZGLFxuICAgIGRlc2NyaXB0aW9uOiAnVGVsbCBhIGxpZSB3aXRob3V0IGJlaW5nIGNhdWdodCcsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNlbnNlQmx1ZmY6IFBhc3NpdmVUeXBlID0ge1xuICAgIG5hbWU6IFBhc3NpdmUuU0VOU0VfQkxVRkYsXG4gICAgZGVzY3JpcHRpb246ICdEZXRlY3QgaWYgYSBsaWUgaXMgYmVpbmcgdG9sZCcsXG4gICAgLy8gaWYgY2hhcmFjdGVyIGJlYXRzIGJsdWZmIGNoZWNrLCBhIGxpdHRsZSBpY29uIG9uIHRoZSBzY3JlZW4gd2lsbCB0ZWxsIGlmIHNvbWVvbmUgaXMgdHJ5aW5nIHRvIGJsdWZmIHBhcnR5XG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEdyZWVkeUludGVudDogUGFzc2l2ZVR5cGUgPSB7XG4gICAgbmFtZTogUGFzc2l2ZS5HUkVFRFlfSU5URU5ULFxuICAgIGRlc2NyaXB0aW9uOiAnR2FpbiA1JSBtb3JlIGV4cGVyaWVuY2UgdGhhbiBwYXJ0eScsXG4gICAgLy8gZWFybmVkIGZyb20gZGVmZWF0aW5nIEdyZWVkXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNsb3RoQ29tcG9zdXJlOiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLlNMT1RIX0NPTVBPU1VSRSxcbiAgICBkZXNjcmlwdGlvbjogJ0Jsb3dzIHRha2VuIHdoZW4gbm90IGRvaW5nIGFjdGlvbiBhcmUgaGFsdmVkJyxcbiAgICAvLyBlYXJuZWQgZnJvbSBkZWZlYXRpbmcgTGF3em9uXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEJsb29kTHVzdDogUGFzc2l2ZVR5cGUgPSB7XG4gICAgbmFtZTogUGFzc2l2ZS5CTE9PRF9MVVNULFxuICAgIGRlc2NyaXB0aW9uOiAnU3BlZWQgaW4gYmF0dGxlIGluY3JlYXNlZCcsXG4gICAgLy8gZWFybmVkIGZyb20gZGVmZWF0aW5nIEx1c3RcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRW52aW91c09mQ29tYmF0OiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLkVOVklPVVNfT0ZfQ09NQkFULFxuICAgIGRlc2NyaXB0aW9uOiAnR2FpbiByYWdlIGZyb20gd2F0Y2hpbmcgY29tYmF0JyxcbiAgICAvLyBlYXJuZWQgZnJvbSBkZWZlYXRpbmcgRW52eVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBHbHV0dG9ub3VzRGVzaXJlOiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLkdMVVRUT05PVVNfREVTSVJFLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tc3VtZXIgZm9vZCBpdGVtcyB0d2ljZSBhcyBmYXN0JyxcbiAgICAvLyBlYXJuZWQgZnJvbSBkZWZlYXRpbmcgR2x1dG9ueVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBDYXRjaGVyOiBQYXNzaXZlVHlwZSA9IHtcbiAgICBuYW1lOiBQYXNzaXZlLkNBVENIRVIsXG4gICAgZGVzY3JpcHRpb246ICdSZWNlaXZlIGJvbnVzIHdoZW4gY2F0Y2hpbmcgaXRlbXMnLFxuICB9O1xufVxuIl19