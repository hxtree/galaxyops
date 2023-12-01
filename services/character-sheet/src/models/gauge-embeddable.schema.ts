import { Prop, Schema } from '@nestjs/mongoose';
import { IsInt, Min, Max } from '@cats-cradle/validation-schemas';

@Schema({ _id: false })
export class GaugeEmbeddable {
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public min!: number;

  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public current!: number;

  @IsInt()
  @Min(1)
  @Max(255)
  @Prop()
  public max!: number;

  /**
   * determines whether reduction in value endangers ability to function
   */
  public isDepleted(): boolean {
    return this.current <= this.min;
  }

  public add(amount: number) {
    this.current += amount;
    if (this.current > this.max) {
      this.current = this.max;
    }
    if (this.current < this.min) {
      this.current = this.min;
    }
  }

  public sub(amount: number) {
    this.add(-amount);
  }

  constructor(
    partial: NonNullable<Omit<GaugeEmbeddable, 'isDepleted' | 'add' | 'sub'>>,
  ) {
    Object.assign(this, partial);
  }
}
