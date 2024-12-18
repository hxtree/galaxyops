import { IsNumber } from 'class-validator';

export class ActorPosition {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get gridX(): number {
    return Math.floor(this.x);
  }

  get gridY(): number {
    return Math.floor(this.y);
  }

  get gridZ(): number {
    return Math.floor(this.z);
  }

  get subX(): number {
    return this.x % 1;
  }

  get subY(): number {
    return this.y % 1;
  }

  get subZ(): number {
    return this.z % 1;
  }

  move(deltas: { x?: number; y?: number; z?: number }) {
    if (deltas.x !== undefined) {
      this.x += deltas.x;
    }
    if (deltas.y !== undefined) {
      this.y += deltas.y;
    }
    if (deltas.z !== undefined) {
      this.z += deltas.z;
    }
  }
}
