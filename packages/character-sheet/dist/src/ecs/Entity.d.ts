export interface IComponent {
    entity: Entity | null;
}
declare type targetTypeConstructor<T> = {
    new (...args: unknown[]): T;
};
export declare class Entity {
    protected _id: string;
    protected _components: IComponent[];
    get id(): string;
    get components(): IComponent[];
    getComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): C;
    addComponent(component: IComponent): void;
    removeComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): void;
    hasComponent<C extends IComponent>(constructor: targetTypeConstructor<C>): boolean;
}
export {};
