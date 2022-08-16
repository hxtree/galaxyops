"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor() {
        this._components = [];
    }
    get id() {
        return this._id;
    }
    // get all components
    get components() {
        return this._components;
    }
    // returns a reference to a specific component by provided type
    getComponent(constructor) {
        for (const component of this._components) {
            if (component instanceof constructor) {
                return component;
            }
        }
        throw new Error(`Entity ${this._id} is missing component ${constructor.name}`);
    }
    // add to object's components and set reference to entity 
    addComponent(component) {
        this._components.push(component);
        component.entity = this;
    }
    // remove a reference to a specific component by provided type
    removeComponent(constructor) {
        let foundComponent;
        let index;
        for (let i = 0; i < this._components.length; i++) {
            const component = this._components[i];
            if (component instanceof constructor) {
                index = i;
                foundComponent = component;
                break;
            }
        }
        if (foundComponent && index) {
            foundComponent.entity = null;
            this._components.splice(index, 1);
        }
    }
    // determine if entity has component
    hasComponent(constructor) {
        for (const component of this._components) {
            if (component instanceof constructor) {
                return true;
            }
        }
        return false;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vjcy9FbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsTUFBYSxNQUFNO0lBQW5CO1FBSWMsZ0JBQVcsR0FBaUIsRUFBRSxDQUFBO0lBMkQ1QyxDQUFDO0lBekRHLElBQVcsRUFBRTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVELCtEQUErRDtJQUN4RCxZQUFZLENBQXVCLFdBQXFDO1FBRTNFLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLFNBQVMsWUFBWSxXQUFXLEVBQUU7Z0JBQ2xDLE9BQU8sU0FBYyxDQUFDO2FBQ3pCO1NBQ0o7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcseUJBQXlCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCwwREFBMEQ7SUFDbkQsWUFBWSxDQUFDLFNBQXFCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4REFBOEQ7SUFDdkQsZUFBZSxDQUF1QixXQUFxQztRQUM5RSxJQUFJLGNBQXNDLENBQUM7UUFDM0MsSUFBSSxLQUF5QixDQUFDO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksU0FBUyxZQUFZLFdBQVcsRUFBRTtnQkFDcEMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixjQUFjLEdBQUcsU0FBUyxDQUFDO2dCQUMzQixNQUFNO2FBQ1A7U0FDRjtRQUVELElBQUksY0FBYyxJQUFJLEtBQUssRUFBRTtZQUMzQixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsb0NBQW9DO0lBQzdCLFlBQVksQ0FBdUIsV0FBcUM7UUFDM0UsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksU0FBUyxZQUFZLFdBQVcsRUFBRTtnQkFDbEMsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBL0RELHdCQStEQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XG4gICAgZW50aXR5OiBFbnRpdHkgfCBudWxsO1xufVxuXG50eXBlIHRhcmdldFR5cGVDb25zdHJ1Y3RvcjxUPiA9IHsgXG4gICAgbmV3KC4uLmFyZ3M6IHVua25vd25bXSk6IFQgXG59IFxuXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcblxuICAgIHByb3RlY3RlZCBfaWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogSUNvbXBvbmVudFtdID0gW11cblxuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIC8vIGdldCBhbGwgY29tcG9uZW50c1xuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50cygpOiBJQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1xuICAgIH1cbiBcbiAgICAvLyByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGEgc3BlY2lmaWMgY29tcG9uZW50IGJ5IHByb3ZpZGVkIHR5cGVcbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50PEMgZXh0ZW5kcyBJQ29tcG9uZW50Pihjb25zdHJ1Y3RvcjogdGFyZ2V0VHlwZUNvbnN0cnVjdG9yPEM+KTogQyB7XG5cbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5fY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudCBhcyBDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbnRpdHkgJHt0aGlzLl9pZH0gaXMgbWlzc2luZyBjb21wb25lbnQgJHtjb25zdHJ1Y3Rvci5uYW1lfWApOyAgXG4gICAgfVxuXG4gICAgLy8gYWRkIHRvIG9iamVjdCdzIGNvbXBvbmVudHMgYW5kIHNldCByZWZlcmVuY2UgdG8gZW50aXR5IFxuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQuZW50aXR5ID0gdGhpcztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYSByZWZlcmVuY2UgdG8gYSBzcGVjaWZpYyBjb21wb25lbnQgYnkgcHJvdmlkZWQgdHlwZVxuICAgIHB1YmxpYyByZW1vdmVDb21wb25lbnQ8QyBleHRlbmRzIElDb21wb25lbnQ+KGNvbnN0cnVjdG9yOiB0YXJnZXRUeXBlQ29uc3RydWN0b3I8Qz4pOiB2b2lkIHtcbiAgICAgICAgbGV0IGZvdW5kQ29tcG9uZW50OiBJQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9jb21wb25lbnRzW2ldO1xuICAgICAgICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgZm91bmRDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoZm91bmRDb21wb25lbnQgJiYgaW5kZXgpIHtcbiAgICAgICAgICBmb3VuZENvbXBvbmVudC5lbnRpdHkgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRldGVybWluZSBpZiBlbnRpdHkgaGFzIGNvbXBvbmVudFxuICAgIHB1YmxpYyBoYXNDb21wb25lbnQ8QyBleHRlbmRzIElDb21wb25lbnQ+KGNvbnN0cnVjdG9yOiB0YXJnZXRUeXBlQ29uc3RydWN0b3I8Qz4pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5fY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19