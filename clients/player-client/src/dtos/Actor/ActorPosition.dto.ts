import { IsNumber } from 'class-validator';
import { Coordinate3d } from '../Coordinate3d.dto';
import { Coordinate2d } from '../Coordinate2d.dto';
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

  get grid(): Coordinate3d {
    return {
      x: this.gridX,
      y: this.gridY,
      z: this.gridZ,
    };
  }

  get sub(): Coordinate3d {
    return {
      x: this.subX,
      y: this.subY,
      z: this.subZ,
    };
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
    return Number((this.x % 1).toFixed(1));
  }

  get subY(): number {
    return Number((this.y % 1).toFixed(1));
  }

  get subZ(): number {
    return Number((this.z % 1).toFixed(1));
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

  getPointOnLine(
    point1: Coordinate2d,
    point2: Coordinate2d,
    percent: number,
  ): Coordinate2d {
    const x = point1.x + (point2.x - point1.x) * percent;
    const y = point1.y + (point2.y - point1.y) * percent;
    return { x, y };
  }
}
