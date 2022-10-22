"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scribbles = exports.Mischievous = exports.Ouruborus = exports.Sandy = exports.Lyre = exports.HeraldicLion = exports.Felix = exports.Vachel = exports.Summon = void 0;
/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
var Summon;
(function (Summon) {
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
exports.Vachel = {
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
exports.Felix = {
    name: Summon.FELIX,
    description: 'A white lop-eared dwarf rabbit',
    backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
};
exports.HeraldicLion = {
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
exports.Lyre = {
    name: Summon.LYRE,
    description: 'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
};
exports.Sandy = {
    name: Summon.SANDY,
    description: 'A box turtle',
    backstory: '',
};
exports.Ouruborus = {
    name: Summon.OURUBORUS,
    description: 'A demon that consumes itself',
    backstory: '',
};
exports.Mischievous = {
    name: Summon.MISCHIEVOUS,
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
};
exports.Scribbles = {
    name: Summon.SCRIBBLES,
    description: 'A flying squirrel',
    backstory: '',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbW9uLnNraWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9zdW1tb24uc2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBWSxNQVVYO0FBVkQsV0FBWSxNQUFNO0lBQ2hCLDJCQUFpQixDQUFBO0lBQ2pCLHlCQUFlLENBQUE7SUFDZix5Q0FBK0IsQ0FBQTtJQUMvQix1QkFBYSxDQUFBO0lBQ2IseUJBQWUsQ0FBQTtJQUNmLGlDQUF1QixDQUFBO0lBQ3ZCLHFDQUEyQixDQUFBO0lBQzNCLGlDQUF1QixDQUFBO0lBQ3ZCLG9EQUFvRDtBQUN0RCxDQUFDLEVBVlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBVWpCO0FBU1ksUUFBQSxNQUFNLEdBQWU7SUFDaEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO0lBQ25CLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFNBQVMsRUFBRSxxQ0FBcUM7SUFDaEQsUUFBUSxFQUFFO1FBQ1IsUUFBUTtRQUNSLE9BQU87UUFDUCxXQUFXLEVBQUUseURBQXlEO1FBQ3RFLDBDQUEwQztLQUMzQztDQUNGLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBZTtJQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDbEIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxTQUFTLEVBQ1AsaUdBQWlHO0NBQ3BHLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBZTtJQUN0QyxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWE7SUFDMUIsV0FBVyxFQUFFLHVDQUF1QztJQUNwRCxRQUFRLEVBQUU7UUFDUiwwRUFBMEU7UUFDMUUsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUUsUUFBUTtLQUM1QjtDQUNGLENBQUM7QUFFVyxRQUFBLElBQUksR0FBZTtJQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDakIsV0FBVyxFQUNULGtFQUFrRTtJQUNwRSxTQUFTLEVBQUUsRUFBRTtDQUNkLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBZTtJQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDbEIsV0FBVyxFQUFFLGNBQWM7SUFDM0IsU0FBUyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQWU7SUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTO0lBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7SUFDM0MsU0FBUyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQWU7SUFDckMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0lBQ3hCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsU0FBUyxFQUFFLG1CQUFtQjtDQUMvQixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQWU7SUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTO0lBQ3RCLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsU0FBUyxFQUFFLEVBQUU7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdW1tb25zIGFyZSBjb21wYWlub25zIHRoYXQgbWF5IGJlIGNhbGxlZCBpbnRvIHBsYXkgaW4gdmFyeWluZyB3YXlzIHRvIGFpZCBwYXJ0eS5cbiAqIFN1bW1vbnMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHRoZSBDb21tYW5kIGFjdGlvbiBvciB0aHJvdWdoIHRoZSBJbnRlcmFjdGlvbiBDb21tYW5kLlxuICogQWx0aG91Z2ggdGhleSBhY2NlcHQgQ29tbWFuZHMgdGhleSBkbyBub3QgbmVjZXNzYXJpbHkgZm9sbG93IHRoZW0uXG4gKiBTdW1tb25zIGhhdmUgZGlmZmVyZW50IGxldmVscyBhbmQgc3RhdHMganVzdCBsaWtlIGNoYXJhY3RlcnMuXG4gKiBUaGUgbW9yZSBhIFBsYXllciB1c2VzIHRoZW0gdGhlIG1vcmUgcG93ZXJmdWwgdGhleSBncm93LlxuICovXG5leHBvcnQgZW51bSBTdW1tb24ge1xuICBWQUNIRUwgPSAnVmFjaGVsJyxcbiAgRkVMSVggPSAnRmVsaXgnLFxuICBIRVJBTERJQ19MSU9OID0gJ0hlcmFsZGljIExpb24nLFxuICBMWVJFID0gJ0x5cmUnLFxuICBTQU5EWSA9ICdTYW5keScsXG4gIE9VUlVCT1JVUyA9ICdPdXJ1Ym9ydXMnLFxuICBNSVNDSElFVk9VUyA9ICdNaXNjaGlldm91cycsXG4gIFNDUklCQkxFUyA9ICdTY3JpYmJsZXMnLFxuICAvLyBNYWxhY2UncyB0YXR0b29zIHJlZmVyZW5jZSBsZXNzZXIga2V5IG9mIHNvbG9tb24/XG59XG5cbmV4cG9ydCB0eXBlIFN1bW1vblR5cGUgPSB7XG4gIG5hbWU6IFN1bW1vbjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYmFja3N0b3J5Pzogc3RyaW5nO1xuICBjb21tYW5kcz86IHN0cmluZ1tdOyAvLyBtdXN0IGJlIGludm9rZWQgYnkgc3VtbW9uZXIgdGhyb3VnaCBDb21tYW5kXG59O1xuXG5leHBvcnQgY29uc3QgVmFjaGVsOiBTdW1tb25UeXBlID0ge1xuICBuYW1lOiBTdW1tb24uVkFDSEVMLFxuICBkZXNjcmlwdGlvbjogJ0Egc2lsdmVyIGJ1bGwnLFxuICBiYWNrc3Rvcnk6ICdBIGJ1bGwgdGhhdCBNZWVrdSByYWlzZWQgYXMgYSBjaGlsZCcsXG4gIGNvbW1hbmRzOiBbXG4gICAgJ0NoYXJnZScsXG4gICAgJ0dyYXplJywgLy8gZWF0IGdyYXNzXG4gICAgJ1B1bGwgQ2FydCcsIC8vICpDYW4gYmUgdXBncmFkZWQgd2l0aCBDQVJUIHRvIGFjY29tbW9kYXRlIGxhcmdlIFBhcnR5LlxuICAgIC8vIENhbiBiZSB1c2VkIHdpdGggT3ZlcmRyaXZlIGNvbWJpbmF0aW9uc1xuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IEZlbGl4OiBTdW1tb25UeXBlID0ge1xuICBuYW1lOiBTdW1tb24uRkVMSVgsXG4gIGRlc2NyaXB0aW9uOiAnQSB3aGl0ZSBsb3AtZWFyZWQgZHdhcmYgcmFiYml0JyxcbiAgYmFja3N0b3J5OlxuICAgICdGZWxpeCBpcyBhIHBldCB0aGF0IExvb21lZSBhZG9wdHMuIEhlIGRvZXMgbm90IGxpc3RlbiB3ZWxsLiBIZSBsaWtlcyB0byBuaWJibGUgb24gZ3Jhc3Mgc2xvd2x5LicsXG59O1xuXG5leHBvcnQgY29uc3QgSGVyYWxkaWNMaW9uOiBTdW1tb25UeXBlID0ge1xuICBuYW1lOiBTdW1tb24uSEVSQUxESUNfTElPTixcbiAgZGVzY3JpcHRpb246ICdBIHJlZ2FsIGxpb24gd2l0aCBhbiBpbXBlY2FibGUgc3RhbmNlJyxcbiAgY29tbWFuZHM6IFtcbiAgICAvLyBodHRwczovL2ZhbWlseWhpc3Rvcnlmb3VuZGF0aW9uLmNvbS8yMDIwLzA3LzE3L2hlcmFsZGljLWxpb24tcG9zaXRpb25zL1xuICAgICdQYXNzYW50IFN0YW5jZScsIC8vIGNsYXdcbiAgICAnUmFtcGFudCBTdGFuY2UnLCAvLyBtdWx0aXBsZSBoYXN0eSBhdHRhY2tzIHRoYXQgcmVkdWNlIGRlZmVuc2VcbiAgICAnSXNzdWFudCBTdGFuY2UnLCAvLyBmb2N1c1xuICAgICdHdWFyZGFudCBTdGFuY2UnLCAvLyBndWFyZFxuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IEx5cmU6IFN1bW1vblR5cGUgPSB7XG4gIG5hbWU6IFN1bW1vbi5MWVJFLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnQSBnaWFudCBoYWxmIEx1bmEgbW90aCBhbmQgbHlyZWJpcmQgdGhhdCBGYXllIGNhbiBzdW1tb24gYXQgd2lsbCcsXG4gIGJhY2tzdG9yeTogJycsXG59O1xuXG5leHBvcnQgY29uc3QgU2FuZHk6IFN1bW1vblR5cGUgPSB7XG4gIG5hbWU6IFN1bW1vbi5TQU5EWSxcbiAgZGVzY3JpcHRpb246ICdBIGJveCB0dXJ0bGUnLFxuICBiYWNrc3Rvcnk6ICcnLFxufTtcblxuZXhwb3J0IGNvbnN0IE91cnVib3J1czogU3VtbW9uVHlwZSA9IHtcbiAgbmFtZTogU3VtbW9uLk9VUlVCT1JVUyxcbiAgZGVzY3JpcHRpb246ICdBIGRlbW9uIHRoYXQgY29uc3VtZXMgaXRzZWxmJyxcbiAgYmFja3N0b3J5OiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBNaXNjaGlldm91czogU3VtbW9uVHlwZSA9IHtcbiAgbmFtZTogU3VtbW9uLk1JU0NISUVWT1VTLFxuICBkZXNjcmlwdGlvbjogJ0EgYmxhY2sgYW5kIHdoaXRlIGNhdCcsXG4gIGJhY2tzdG9yeTogJ1RoZSBLZWVwZXIgb2YgTGF3Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBTY3JpYmJsZXM6IFN1bW1vblR5cGUgPSB7XG4gIG5hbWU6IFN1bW1vbi5TQ1JJQkJMRVMsXG4gIGRlc2NyaXB0aW9uOiAnQSBmbHlpbmcgc3F1aXJyZWwnLFxuICBiYWNrc3Rvcnk6ICcnLFxufTtcbiJdfQ==