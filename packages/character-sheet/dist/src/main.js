"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const archetype_1 = require("./archetype/archetype");
async function getArchetype(id) {
    try {
        const archetype = (0, archetype_1.Archetype)(id);
        const character = { id: id, ...archetype };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get Archetype'));
    }
}
async function listArchetypes() {
    try {
        const archetypes = (0, archetype_1.getArchetypeList)();
        return await Promise.resolve(archetypes);
    }
    catch (err) {
        Promise.reject(new Error('Failed to list Archetypes'));
    }
}
const handler = async (event) => {
    switch (event.info.fieldName) {
        case 'listArchetypes':
            return await listArchetypes();
        case 'getArchetypeById':
            return await getArchetype(event.arguments.archetypeId);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFrRTtBQUVsRSxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVU7SUFDcEMsSUFBSTtRQUNGLE1BQU0sU0FBUyxHQUFHLElBQUEscUJBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUMsQ0FBQztRQUN6QyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDO0FBRUQsS0FBSyxVQUFVLGNBQWM7SUFDM0IsSUFBSTtRQUNGLE1BQU0sVUFBVSxHQUFHLElBQUEsNEJBQWdCLEdBQUUsQ0FBQztRQUN0QyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMxQztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7QUFDSCxDQUFDO0FBRU0sTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWdDLEVBQUUsRUFBRTtJQUNoRSxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzVCLEtBQUssZ0JBQWdCO1lBQ25CLE9BQU8sTUFBTSxjQUFjLEVBQUUsQ0FBQztRQUNoQyxLQUFLLGtCQUFrQjtZQUNyQixPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQ7WUFDRSxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0gsQ0FBQyxDQUFDO0FBVFcsUUFBQSxPQUFPLFdBU2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBTeW5jUmVzb2x2ZXJFdmVudH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQge0FyY2hldHlwZSwgZ2V0QXJjaGV0eXBlTGlzdH0gZnJvbSAnLi9hcmNoZXR5cGUvYXJjaGV0eXBlJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXJjaGV0eXBlKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFyY2hldHlwZSA9IEFyY2hldHlwZShpZCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0ge2lkOiBpZCwgLi4uYXJjaGV0eXBlfTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGNoYXJhY3Rlcik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCBBcmNoZXR5cGUnKSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGlzdEFyY2hldHlwZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcmNoZXR5cGVzID0gZ2V0QXJjaGV0eXBlTGlzdCgpO1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoYXJjaGV0eXBlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGxpc3QgQXJjaGV0eXBlcycpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudDogQXBwU3luY1Jlc29sdmVyRXZlbnQ8YW55PikgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmluZm8uZmllbGROYW1lKSB7XG4gICAgY2FzZSAnbGlzdEFyY2hldHlwZXMnOlxuICAgICAgcmV0dXJuIGF3YWl0IGxpc3RBcmNoZXR5cGVzKCk7XG4gICAgY2FzZSAnZ2V0QXJjaGV0eXBlQnlJZCc6XG4gICAgICByZXR1cm4gYXdhaXQgZ2V0QXJjaGV0eXBlKGV2ZW50LmFyZ3VtZW50cy5hcmNoZXR5cGVJZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIl19