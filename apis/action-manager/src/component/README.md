Component

Reusable classes that can be used inside entity / conntainers.

Components are structs of data. 
They mean different things to different systems at different points in time.
Components have no functions besides helper functions used to access data.


Component: A component labels an entity as possessing a particular aspect, and holds the data needed to model that aspect. For example, every game object that can take damage might have a Health component associated with its entity. Implementations typically use structs, classes, or associative arrays.

Components: structs of plain old data. Compents have no functions. Base class with sub class. Helper function for access info. Nothing else.


Archetype: A chosen set of components that an entity of a certain type will have.