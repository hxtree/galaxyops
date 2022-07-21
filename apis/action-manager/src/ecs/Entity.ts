export interface IComponent {
    entity: Entity | null;
}

type targetTypeConstructor<T> = { 
    new(...args: unknown[]): T 
} 

export class Entity {

    protected _id: string;

    protected _components: IComponent[] = []

    public get id(): string {
        return this._id;
    }

    // get all components
    public get components(): IComponent[] {
        return this._components
    }

    // returns a reference to a specific component by provided type
    public getComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): C {

        for (const component of this._components) {
            if (component instanceof constructor) {
                return component as C;
            }
        }

        throw new Error(`Entity ${this._id} is missing component ${constructor.name}`);  
    }

    // add to object's components and set reference to entity 
    public addComponent(component: IComponent): void {
        this._components.push(component);
        component.entity = this;
    }

    // remove a reference to a specific component by provided type
    public removeComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): void {
        let foundComponent: IComponent | undefined;
        let index: number | undefined;
      
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
    public hasComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): boolean {
        for (const component of this._components) {
            if (component instanceof constructor) {
                return true;
            }
        }

        return false;
    }
}
