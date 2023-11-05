export class ClassRegistry {
  private registry: Map<string, any> = new Map<string, any>();

  public registerClass(classReference: any) {
    const className = classReference.name;
    this.registry.set(className, classReference);
  }

  public registerClasses(classReferences: any[]) {
    for (const classReference of classReferences) {
      this.registerClass(classReference);
    }
  }

  public getClassRegistry() {
    return this.registry;
  }
}
