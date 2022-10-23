"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSkill = exports.Item = void 0;
var Item;
(function (Item) {
    Item["APPRIASE"] = "Appraise";
    Item["COMBINE"] = "Combine";
    Item["THROW"] = "Throw";
    Item["PREPARE_FOOD"] = "Prepare Food";
})(Item = exports.Item || (exports.Item = {}));
/**
 * Item Skill
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
var ItemSkill;
(function (ItemSkill) {
    ItemSkill.Appraise = {
        name: Item.APPRIASE,
        description: 'Determine the market value of an item',
    };
    ItemSkill.Combine = {
        name: Item.COMBINE,
        description: 'Turn two or more items into one item if combatiable',
    };
    ItemSkill.Throw = {
        name: Item.THROW,
        description: 'Toss an item from stock away or to injure enemy.',
    };
    ItemSkill.PrepareFood = {
        name: Item.PREPARE_FOOD,
        description: 'Make a meal',
    };
    // "42","Craft","Combined multiple items into one.","39",,"39"
    // Item - use an item from stock.
    // Item – use one item from stock
    // Item (x2) – Use two Items from stock at once
    // Item (x3) – Use three Items from stock at once
})(ItemSkill = exports.ItemSkill || (exports.ItemSkill = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5za2lsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvc2tpbGwvaXRlbS5za2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLElBS1g7QUFMRCxXQUFZLElBQUk7SUFDZCw2QkFBcUIsQ0FBQTtJQUNyQiwyQkFBbUIsQ0FBQTtJQUNuQix1QkFBZSxDQUFBO0lBQ2YscUNBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQUxXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUtmO0FBRUQ7Ozs7R0FJRztBQUNILElBQWlCLFNBQVMsQ0ErQnpCO0FBL0JELFdBQWlCLFNBQVM7SUFNWCxrQkFBUSxHQUFhO1FBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtRQUNuQixXQUFXLEVBQUUsdUNBQXVDO0tBQ3JELENBQUM7SUFFVyxpQkFBTyxHQUFhO1FBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztRQUNsQixXQUFXLEVBQUUscURBQXFEO0tBQ25FLENBQUM7SUFFVyxlQUFLLEdBQWE7UUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2hCLFdBQVcsRUFBRSxrREFBa0Q7S0FDaEUsQ0FBQztJQUVXLHFCQUFXLEdBQWE7UUFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO1FBQ3ZCLFdBQVcsRUFBRSxhQUFhO0tBQzNCLENBQUM7SUFFRiw4REFBOEQ7SUFDOUQsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQywrQ0FBK0M7SUFDL0MsaURBQWlEO0FBQ25ELENBQUMsRUEvQmdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBK0J6QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEl0ZW0ge1xuICBBUFBSSUFTRSA9ICdBcHByYWlzZScsXG4gIENPTUJJTkUgPSAnQ29tYmluZScsXG4gIFRIUk9XID0gJ1Rocm93JyxcbiAgUFJFUEFSRV9GT09EID0gJ1ByZXBhcmUgRm9vZCcsXG59XG5cbi8qKlxuICogSXRlbSBTa2lsbFxuICogQXJlIHF1aXRlIHNpbXBseSBhY3Rpb25zIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIHVzZSBvZiBhbiBpdGVtLlxuICogQXJlIG9ubHkgYWNjZXNzaWJsZSBieSBhIFBsYXllciB0aHJvdWdoIHRoZSBNZW51IHNjcmVlblxuICovXG5leHBvcnQgbmFtZXNwYWNlIEl0ZW1Ta2lsbCB7XG4gIGV4cG9ydCB0eXBlIEl0ZW1UeXBlID0ge1xuICAgIG5hbWU6IEl0ZW07XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQXBwcmFpc2U6IEl0ZW1UeXBlID0ge1xuICAgIG5hbWU6IEl0ZW0uQVBQUklBU0UsXG4gICAgZGVzY3JpcHRpb246ICdEZXRlcm1pbmUgdGhlIG1hcmtldCB2YWx1ZSBvZiBhbiBpdGVtJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQ29tYmluZTogSXRlbVR5cGUgPSB7XG4gICAgbmFtZTogSXRlbS5DT01CSU5FLFxuICAgIGRlc2NyaXB0aW9uOiAnVHVybiB0d28gb3IgbW9yZSBpdGVtcyBpbnRvIG9uZSBpdGVtIGlmIGNvbWJhdGlhYmxlJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgVGhyb3c6IEl0ZW1UeXBlID0ge1xuICAgIG5hbWU6IEl0ZW0uVEhST1csXG4gICAgZGVzY3JpcHRpb246ICdUb3NzIGFuIGl0ZW0gZnJvbSBzdG9jayBhd2F5IG9yIHRvIGluanVyZSBlbmVteS4nLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBQcmVwYXJlRm9vZDogSXRlbVR5cGUgPSB7XG4gICAgbmFtZTogSXRlbS5QUkVQQVJFX0ZPT0QsXG4gICAgZGVzY3JpcHRpb246ICdNYWtlIGEgbWVhbCcsXG4gIH07XG5cbiAgLy8gXCI0MlwiLFwiQ3JhZnRcIixcIkNvbWJpbmVkIG11bHRpcGxlIGl0ZW1zIGludG8gb25lLlwiLFwiMzlcIiwsXCIzOVwiXG4gIC8vIEl0ZW0gLSB1c2UgYW4gaXRlbSBmcm9tIHN0b2NrLlxuICAvLyBJdGVtIOKAkyB1c2Ugb25lIGl0ZW0gZnJvbSBzdG9ja1xuICAvLyBJdGVtICh4Mikg4oCTIFVzZSB0d28gSXRlbXMgZnJvbSBzdG9jayBhdCBvbmNlXG4gIC8vIEl0ZW0gKHgzKSDigJMgVXNlIHRocmVlIEl0ZW1zIGZyb20gc3RvY2sgYXQgb25jZVxufVxuIl19