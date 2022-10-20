"use strict";
// import {BaseAction, ActionCategory} from './BaseAction';
// import {Thing} from '../character/Thing';
// import {Effect} from '../../../component/e';
// import {Attribute} from '../../../component/attribute';
// class HealAction extends BaseAction {
//   protected _id: 0;
//   protected _name: 'Heal';
//   protected _description: 'Heal a target';
//   protected _category: ActionCategory.MENU;
//   /* {@inheritDoc} */
//   public get waitTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }
//   /* {@inheritDoc} */
//   public get executionTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }
//   /* {@inheritDoc} */
//   public get recoveryTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }
//   /* {@inheritDoc} */
//   public get cooldownTime(): number {
//     let avgSpeed = 0;
//     this._targets.forEach(target => {
//       avgSpeed += target.speed;
//     });
//     return Date.now() + avgSpeed * this._targets.length;
//   }
//   /* {@inheritDoc} */
//   execute(actors: Array<Thing>, targets: Array<Thing>) {
//     let effects: Array<Effect> = [];
//     for (let target of targets) {
//       let amount = Math.floor(Math.random() * 10);
//       effects.push(new Effect(target.id, Attribute.Life, amount));
//     }
//     return effects;
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zeXN0ZW0vYWN0aW9uL2VmZmVjdHMvSGVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQTJEO0FBQzNELDRDQUE0QztBQUM1QywrQ0FBK0M7QUFDL0MsMERBQTBEO0FBRTFELHdDQUF3QztBQUN4QyxzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFFOUMsd0JBQXdCO0FBQ3hCLG9DQUFvQztBQUNwQyx3QkFBd0I7QUFDeEIsd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyxVQUFVO0FBQ1YsMkRBQTJEO0FBQzNELE1BQU07QUFFTix3QkFBd0I7QUFDeEIseUNBQXlDO0FBQ3pDLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBQ2xDLFVBQVU7QUFDViwyREFBMkQ7QUFDM0QsTUFBTTtBQUVOLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4QyxrQ0FBa0M7QUFDbEMsVUFBVTtBQUNWLDJEQUEyRDtBQUMzRCxNQUFNO0FBRU4sd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4Qyx3QkFBd0I7QUFDeEIsd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyxVQUFVO0FBQ1YsMkRBQTJEO0FBQzNELE1BQU07QUFFTix3QkFBd0I7QUFDeEIsMkRBQTJEO0FBQzNELHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMscURBQXFEO0FBQ3JELHFFQUFxRTtBQUNyRSxRQUFRO0FBQ1Isc0JBQXNCO0FBQ3RCLE1BQU07QUFDTixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtCYXNlQWN0aW9uLCBBY3Rpb25DYXRlZ29yeX0gZnJvbSAnLi9CYXNlQWN0aW9uJztcbi8vIGltcG9ydCB7VGhpbmd9IGZyb20gJy4uL2NoYXJhY3Rlci9UaGluZyc7XG4vLyBpbXBvcnQge0VmZmVjdH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L2UnO1xuLy8gaW1wb3J0IHtBdHRyaWJ1dGV9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9hdHRyaWJ1dGUnO1xuXG4vLyBjbGFzcyBIZWFsQWN0aW9uIGV4dGVuZHMgQmFzZUFjdGlvbiB7XG4vLyAgIHByb3RlY3RlZCBfaWQ6IDA7XG4vLyAgIHByb3RlY3RlZCBfbmFtZTogJ0hlYWwnO1xuLy8gICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uOiAnSGVhbCBhIHRhcmdldCc7XG4vLyAgIHByb3RlY3RlZCBfY2F0ZWdvcnk6IEFjdGlvbkNhdGVnb3J5Lk1FTlU7XG5cbi8vICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuLy8gICBwdWJsaWMgZ2V0IHdhaXRUaW1lKCk6IG51bWJlciB7XG4vLyAgICAgbGV0IGF2Z1NwZWVkID0gMDtcbi8vICAgICB0aGlzLl90YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbi8vICAgICAgIGF2Z1NwZWVkICs9IHRhcmdldC5zcGVlZDtcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gRGF0ZS5ub3coKSArIGF2Z1NwZWVkICogdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG4vLyAgIH1cblxuLy8gICAvKiB7QGluaGVyaXREb2N9ICovXG4vLyAgIHB1YmxpYyBnZXQgZXhlY3V0aW9uVGltZSgpOiBudW1iZXIge1xuLy8gICAgIGxldCBhdmdTcGVlZCA9IDA7XG4vLyAgICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4vLyAgICAgICBhdmdTcGVlZCArPSB0YXJnZXQuc3BlZWQ7XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIERhdGUubm93KCkgKyBhdmdTcGVlZCAqIHRoaXMuX3RhcmdldHMubGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuLy8gICBwdWJsaWMgZ2V0IHJlY292ZXJ5VGltZSgpOiBudW1iZXIge1xuLy8gICAgIGxldCBhdmdTcGVlZCA9IDA7XG4vLyAgICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4vLyAgICAgICBhdmdTcGVlZCArPSB0YXJnZXQuc3BlZWQ7XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIERhdGUubm93KCkgKyBhdmdTcGVlZCAqIHRoaXMuX3RhcmdldHMubGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuLy8gICBwdWJsaWMgZ2V0IGNvb2xkb3duVGltZSgpOiBudW1iZXIge1xuLy8gICAgIGxldCBhdmdTcGVlZCA9IDA7XG4vLyAgICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4vLyAgICAgICBhdmdTcGVlZCArPSB0YXJnZXQuc3BlZWQ7XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIERhdGUubm93KCkgKyBhdmdTcGVlZCAqIHRoaXMuX3RhcmdldHMubGVuZ3RoO1xuLy8gICB9XG5cbi8vICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuLy8gICBleGVjdXRlKGFjdG9yczogQXJyYXk8VGhpbmc+LCB0YXJnZXRzOiBBcnJheTxUaGluZz4pIHtcbi8vICAgICBsZXQgZWZmZWN0czogQXJyYXk8RWZmZWN0PiA9IFtdO1xuLy8gICAgIGZvciAobGV0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4vLyAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuLy8gICAgICAgZWZmZWN0cy5wdXNoKG5ldyBFZmZlY3QodGFyZ2V0LmlkLCBBdHRyaWJ1dGUuTGlmZSwgYW1vdW50KSk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBlZmZlY3RzO1xuLy8gICB9XG4vLyB9XG4iXX0=