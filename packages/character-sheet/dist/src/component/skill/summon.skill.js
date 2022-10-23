"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summon = void 0;
/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
var Summon;
(function (Summon) {
    // todo flesh out how these work with individual summons, seens like theyed be individually based
    Summon["SUMMON"] = "SUMMON";
    Summon["DISMISS"] = "Dismiss";
    Summon["COMMAND"] = "Command";
    Summon["VACHEL"] = "Vachel";
    Summon["FELIX"] = "Felix";
    Summon["HERALDIC_LION"] = "Heraldic Lion";
    Summon["LYRE"] = "Lyre";
    Summon["SANDY"] = "Sandy";
    Summon["OURUBORUS"] = "Ouruborus";
    Summon["MISCHIEVOUS"] = "Mischievous";
    Summon["SCRIBBLES"] = "Scribbles";
    // Malace's tattoos reference lesser key of solomon?
})(Summon = exports.Summon || (exports.Summon = {}));
(function (Summon) {
    Summon.Vachel = {
        name: Summon.VACHEL,
        description: 'A silver bull',
        backstory: 'A bull that Meeku raised as a child',
        commands: [
            'Charge',
            'Graze',
            'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
            // Can be used with Overdrive combinations
        ],
    };
    Summon.Felix = {
        name: Summon.FELIX,
        description: 'A white lop-eared dwarf rabbit',
        backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    };
    Summon.HeraldicLion = {
        name: Summon.HERALDIC_LION,
        description: 'A regal lion with an impecable stance',
        commands: [
            // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
            'Passant Stance',
            'Rampant Stance',
            'Issuant Stance',
            'Guardant Stance', // guard
        ],
    };
    Summon.Lyre = {
        name: Summon.LYRE,
        description: 'A giant half Luna moth and lyrebird that Faye can summon at will',
        backstory: '',
    };
    Summon.Sandy = {
        name: Summon.SANDY,
        description: 'A box turtle',
        backstory: '',
    };
    Summon.Ouruborus = {
        name: Summon.OURUBORUS,
        description: 'A demon that consumes itself',
        backstory: '',
    };
    Summon.Mischievous = {
        name: Summon.MISCHIEVOUS,
        description: 'A black and white cat',
        backstory: 'The Keeper of Law',
    };
    Summon.Scribbles = {
        name: Summon.SCRIBBLES,
        description: 'A flying squirrel',
        backstory: '',
    };
})(Summon = exports.Summon || (exports.Summon = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbW9uLnNraWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9za2lsbC9zdW1tb24uc2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBWSxNQWVYO0FBZkQsV0FBWSxNQUFNO0lBQ2hCLGlHQUFpRztJQUNqRywyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQiw2QkFBbUIsQ0FBQTtJQUVuQiwyQkFBaUIsQ0FBQTtJQUNqQix5QkFBZSxDQUFBO0lBQ2YseUNBQStCLENBQUE7SUFDL0IsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZixpQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBMkIsQ0FBQTtJQUMzQixpQ0FBdUIsQ0FBQTtJQUN2QixvREFBb0Q7QUFDdEQsQ0FBQyxFQWZXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQWVqQjtBQUVELFdBQWlCLE1BQU07SUFRUixhQUFNLEdBQWU7UUFDaEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1FBQ25CLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFNBQVMsRUFBRSxxQ0FBcUM7UUFDaEQsUUFBUSxFQUFFO1lBQ1IsUUFBUTtZQUNSLE9BQU87WUFDUCxXQUFXLEVBQUUseURBQXlEO1lBQ3RFLDBDQUEwQztTQUMzQztLQUNGLENBQUM7SUFFVyxZQUFLLEdBQWU7UUFDL0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUNQLGlHQUFpRztLQUNwRyxDQUFDO0lBRVcsbUJBQVksR0FBZTtRQUN0QyxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWE7UUFDMUIsV0FBVyxFQUFFLHVDQUF1QztRQUNwRCxRQUFRLEVBQUU7WUFDUiwwRUFBMEU7WUFDMUUsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCLEVBQUUsUUFBUTtTQUM1QjtLQUNGLENBQUM7SUFFVyxXQUFJLEdBQWU7UUFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLFdBQVcsRUFDVCxrRUFBa0U7UUFDcEUsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0lBRVcsWUFBSyxHQUFlO1FBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSztRQUNsQixXQUFXLEVBQUUsY0FBYztRQUMzQixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7SUFFVyxnQkFBUyxHQUFlO1FBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUztRQUN0QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztJQUVXLGtCQUFXLEdBQWU7UUFDckMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1FBQ3hCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQixDQUFDO0lBRVcsZ0JBQVMsR0FBZTtRQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVM7UUFDdEIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7QUFDSixDQUFDLEVBckVnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFxRXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdW1tb25zIGFyZSBjb21wYWlub25zIHRoYXQgbWF5IGJlIGNhbGxlZCBpbnRvIHBsYXkgaW4gdmFyeWluZyB3YXlzIHRvIGFpZCBwYXJ0eS5cbiAqIFN1bW1vbnMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHRoZSBDb21tYW5kIGFjdGlvbiBvciB0aHJvdWdoIHRoZSBJbnRlcmFjdGlvbiBDb21tYW5kLlxuICogQWx0aG91Z2ggdGhleSBhY2NlcHQgQ29tbWFuZHMgdGhleSBkbyBub3QgbmVjZXNzYXJpbHkgZm9sbG93IHRoZW0uXG4gKiBTdW1tb25zIGhhdmUgZGlmZmVyZW50IGxldmVscyBhbmQgc3RhdHMganVzdCBsaWtlIGNoYXJhY3RlcnMuXG4gKiBUaGUgbW9yZSBhIFBsYXllciB1c2VzIHRoZW0gdGhlIG1vcmUgcG93ZXJmdWwgdGhleSBncm93LlxuICovXG5leHBvcnQgZW51bSBTdW1tb24ge1xuICAvLyB0b2RvIGZsZXNoIG91dCBob3cgdGhlc2Ugd29yayB3aXRoIGluZGl2aWR1YWwgc3VtbW9ucywgc2VlbnMgbGlrZSB0aGV5ZWQgYmUgaW5kaXZpZHVhbGx5IGJhc2VkXG4gIFNVTU1PTiA9ICdTVU1NT04nLFxuICBESVNNSVNTID0gJ0Rpc21pc3MnLFxuICBDT01NQU5EID0gJ0NvbW1hbmQnLFxuXG4gIFZBQ0hFTCA9ICdWYWNoZWwnLFxuICBGRUxJWCA9ICdGZWxpeCcsXG4gIEhFUkFMRElDX0xJT04gPSAnSGVyYWxkaWMgTGlvbicsXG4gIExZUkUgPSAnTHlyZScsXG4gIFNBTkRZID0gJ1NhbmR5JyxcbiAgT1VSVUJPUlVTID0gJ091cnVib3J1cycsXG4gIE1JU0NISUVWT1VTID0gJ01pc2NoaWV2b3VzJyxcbiAgU0NSSUJCTEVTID0gJ1NjcmliYmxlcycsXG4gIC8vIE1hbGFjZSdzIHRhdHRvb3MgcmVmZXJlbmNlIGxlc3NlciBrZXkgb2Ygc29sb21vbj9cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBTdW1tb24ge1xuICBleHBvcnQgdHlwZSBTdW1tb25UeXBlID0ge1xuICAgIG5hbWU6IFN1bW1vbjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGJhY2tzdG9yeT86IHN0cmluZztcbiAgICBjb21tYW5kcz86IHN0cmluZ1tdOyAvLyBtdXN0IGJlIGludm9rZWQgYnkgc3VtbW9uZXIgdGhyb3VnaCBDb21tYW5kXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFZhY2hlbDogU3VtbW9uVHlwZSA9IHtcbiAgICBuYW1lOiBTdW1tb24uVkFDSEVMLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzaWx2ZXIgYnVsbCcsXG4gICAgYmFja3N0b3J5OiAnQSBidWxsIHRoYXQgTWVla3UgcmFpc2VkIGFzIGEgY2hpbGQnLFxuICAgIGNvbW1hbmRzOiBbXG4gICAgICAnQ2hhcmdlJyxcbiAgICAgICdHcmF6ZScsIC8vIGVhdCBncmFzc1xuICAgICAgJ1B1bGwgQ2FydCcsIC8vICpDYW4gYmUgdXBncmFkZWQgd2l0aCBDQVJUIHRvIGFjY29tbW9kYXRlIGxhcmdlIFBhcnR5LlxuICAgICAgLy8gQ2FuIGJlIHVzZWQgd2l0aCBPdmVyZHJpdmUgY29tYmluYXRpb25zXG4gICAgXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRmVsaXg6IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLkZFTElYLFxuICAgIGRlc2NyaXB0aW9uOiAnQSB3aGl0ZSBsb3AtZWFyZWQgZHdhcmYgcmFiYml0JyxcbiAgICBiYWNrc3Rvcnk6XG4gICAgICAnRmVsaXggaXMgYSBwZXQgdGhhdCBMb29tZWUgYWRvcHRzLiBIZSBkb2VzIG5vdCBsaXN0ZW4gd2VsbC4gSGUgbGlrZXMgdG8gbmliYmxlIG9uIGdyYXNzIHNsb3dseS4nLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBIZXJhbGRpY0xpb246IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLkhFUkFMRElDX0xJT04sXG4gICAgZGVzY3JpcHRpb246ICdBIHJlZ2FsIGxpb24gd2l0aCBhbiBpbXBlY2FibGUgc3RhbmNlJyxcbiAgICBjb21tYW5kczogW1xuICAgICAgLy8gaHR0cHM6Ly9mYW1pbHloaXN0b3J5Zm91bmRhdGlvbi5jb20vMjAyMC8wNy8xNy9oZXJhbGRpYy1saW9uLXBvc2l0aW9ucy9cbiAgICAgICdQYXNzYW50IFN0YW5jZScsIC8vIGNsYXdcbiAgICAgICdSYW1wYW50IFN0YW5jZScsIC8vIG11bHRpcGxlIGhhc3R5IGF0dGFja3MgdGhhdCByZWR1Y2UgZGVmZW5zZVxuICAgICAgJ0lzc3VhbnQgU3RhbmNlJywgLy8gZm9jdXNcbiAgICAgICdHdWFyZGFudCBTdGFuY2UnLCAvLyBndWFyZFxuICAgIF0sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEx5cmU6IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLkxZUkUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQSBnaWFudCBoYWxmIEx1bmEgbW90aCBhbmQgbHlyZWJpcmQgdGhhdCBGYXllIGNhbiBzdW1tb24gYXQgd2lsbCcsXG4gICAgYmFja3N0b3J5OiAnJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgU2FuZHk6IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLlNBTkRZLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBib3ggdHVydGxlJyxcbiAgICBiYWNrc3Rvcnk6ICcnLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBPdXJ1Ym9ydXM6IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLk9VUlVCT1JVUyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZGVtb24gdGhhdCBjb25zdW1lcyBpdHNlbGYnLFxuICAgIGJhY2tzdG9yeTogJycsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1pc2NoaWV2b3VzOiBTdW1tb25UeXBlID0ge1xuICAgIG5hbWU6IFN1bW1vbi5NSVNDSElFVk9VUyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYmxhY2sgYW5kIHdoaXRlIGNhdCcsXG4gICAgYmFja3N0b3J5OiAnVGhlIEtlZXBlciBvZiBMYXcnLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTY3JpYmJsZXM6IFN1bW1vblR5cGUgPSB7XG4gICAgbmFtZTogU3VtbW9uLlNDUklCQkxFUyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZmx5aW5nIHNxdWlycmVsJyxcbiAgICBiYWNrc3Rvcnk6ICcnLFxuICB9O1xufVxuIl19