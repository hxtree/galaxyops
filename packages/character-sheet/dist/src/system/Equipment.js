"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
class Equipment extends Gear {
    constructor() {
        super(...arguments);
        this._category = 'Equipment';
    }
    set gearSlots(value) {
        this._gearSlots = value;
    }
    get gearSlots() {
        return this._gearSlots;
    }
}
exports.Equipment = Equipment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N5c3RlbS9FcXVpcG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBc0IsU0FBVSxTQUFRLElBQUk7SUFBNUM7O1FBQ1ksY0FBUyxHQUFXLFdBQVcsQ0FBQztJQVk1QyxDQUFDO0lBUEMsSUFBVyxTQUFTLENBQUMsS0FBb0I7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBYkQsOEJBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dlYXJ9IGZyb20gJy4uL2NvbXBvbmVudC9lcXVpcG1lbnQvR2Vhcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFcXVpcG1lbnQgZXh0ZW5kcyBHZWFyIHtcbiAgcHJvdGVjdGVkIF9jYXRlZ29yeTogc3RyaW5nID0gJ0VxdWlwbWVudCc7XG4gIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZ2VhclNsb3RzOiBBcnJheTxzdHJpbmc+O1xuXG4gIHB1YmxpYyBzZXQgZ2VhclNsb3RzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5fZ2VhclNsb3RzID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlYXJTbG90cygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fZ2VhclNsb3RzO1xuICB9XG59XG4iXX0=