// import { ValidateNested } from 'class-validator';
// import { Type } from 'class-transformer';
// import {  IsDateString,
//   IsString,
//   IsNumber,
//   IsEnum,
// } from 'class-validator';
// import { DateTime, Duration } from 'luxon';
// import { ActorOrientation } from './ActorOrientation.type';
// import { Transform } from 'class-transformer';
// import { Coordinate3d } from '../Coordinate3d.dto';
// import { GridFieldArea } from '../Grid/GridFieldArea.type';
// import { Coordinate2d } from '../Coordinate2d.dto';
// import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../../core/IsometricCanvas/utils/SpriteDimensions';
// import { ActorState } from './ActorState.type';

// export class ActorAction {
//   @IsString()
//   currentAnimation?: ActorState;

//   orientation: ActorOrientation;

//   @Transform(({ value }) => DateTime.fromISO(value), { toClassOnly: true })
//   startTimestamp: DateTime;

//   // WAR? Wait, action, recovery
//   @Transform(({ value }) => Duration.fromObject(value), { toClassOnly: true })
//   @Transform(({ value }) => value.toObject(), { toPlainOnly: true })
//   duration: Duration;

//   @ValidateNested()
//   @Type(() => Coordinate3d)
//   targetPosition: Coordinate3d;

//   @IsNumber()
//   startingFrame?: number;

//   @IsNumber()
//   totalFrames: number;

//   takeAction() {

//   }

//   isComplete(): boolean {
//     if (!this.startTimestamp || !this.duration) {
//       return true;
//     }
//     const now = DateTime.now();
//     const endTimestamp = this.startTimestamp.plus(this.duration);
//     if (now > endTimestamp) {
//       return true;
//     }
//     return false;
//   }

//   get endTimestamp(): DateTime | null {
//     if (!this.startTimestamp || !this.duration) {
//       return null;
//     }

//     return this.startTimestamp.plus(this.duration);
//   }

//   get currentFrame(): number {
//     let elapsedTime: Duration;

//     if (this.startTimestamp) {
//       const currentTime = DateTime.now();
//       const elapsedMillis = currentTime
//         .diff(this.startTimestamp)
//         .as('milliseconds');
//       elapsedTime = Duration.fromObject({ milliseconds: elapsedMillis });
//     } else {
//       elapsedTime = Duration.fromMillis(performance.now());
//     }

//     let currentFrame =
//       Math.floor(elapsedTime.as('seconds') / this.duration.as('seconds')) %
//       this.totalFrames;

//     if (this.startingFrame !== undefined) {
//       currentFrame = (currentFrame + this.startingFrame) % this.totalFrames;
//     }

//     return currentFrame;
//   }

//   /**
//    * Returns the current position of the actor where they should be rendered from
//    */
//   get renderPosition(): Coordinate3d {
//     // Determine if the target position is closer to the camera than the current position
//     if (
//       this.targetPosition.x > this.currentPosition.x ||
//       this.targetPosition.y > this.currentPosition.y
//     ) {
//       return this.targetPosition;
//     }

//     if (this.targetPositionReached) {
//       return this.targetPosition;
//     }

//     return this.currentPosition;
//   }

//   renderScreenPosition(vectors: GridFieldArea): Coordinate2d {
//     const baseCoordinate2d: Coordinate2d = {
//       x: vectors.right.x - (vectors.right.x - vectors.left.x),
//       y: vectors.top.y - 17,
//     };

//     if(!this.isInMotion){
//       return baseCoordinate2d
//     }

//     if (this.targetPosition.x > this.currentPosition.x) {
//       baseCoordinate2d.x += SPRITE_WIDTH/2;
//     }

//     if (this.targetPosition.y > this.currentPosition.y){
//       baseCoordinate2d.y += SPRITE_HEIGHT/2;
//     }

//     // if( this.targetPosition.x > this.currentPosition.x) {
//     // }

//     if (
//       (this.targetPosition.x > this.currentPosition.x) ||
//       (this.targetPosition.y > this.currentPosition.y)
//     ) {
//     }

//     if(this.targetPosition.y > this.currentPosition.y) {
//       baseCoordinate2d.y += SPRITE_HEIGHT;
//     }

//     return baseCoordinate2d
//   }

//   getMovementProgress(): number {
//     const now = DateTime.now();
//     if (!this.startTimestamp || !this.duration) {
//       return 0;
//     }
//     const totalDuration = this.duration.as('milliseconds');
//     const elapsedDuration = now.diff(this.startTimestamp).as('milliseconds');
//     return Math.min((elapsedDuration / totalDuration) * 100, 100);
//   }

//   get position(): Coordinate3d {
//     if (this.targetPositionReached) {
//       return this.targetPosition;
//     }
//     return this.currentPosition;
//   }

//   get targetPositionReached(): boolean {
//     const now = DateTime.now();
//     if (this.endTimestamp && now > this.endTimestamp) {
//       return true;
//     }
//     return false;
//   }
// }
