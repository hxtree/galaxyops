import { Prop, Schema } from '@nestjs/mongoose';
import { IsInt, Min, Max } from '@galaxyops/validation-schemas';

/**
 * characters actual stats vary based on disciplines, afflictions, and equipment
 * the values actually stored in the database are the raw stats
 */
@Schema({ _id: false })
export class StatsEmbeddable {
  /**
   * The ability to apply force to ones movements
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public power: number;

  /**
   * The ability to move quickly
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public speed: number;

  /**
   * The quality of having experience, knowledge, and good judgment.
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public wisdom: number;

  /**
   * The ability to think and reason logically.
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public intelligence: number;

  /**
   * The ability to protect and defend oneself.
   */

  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public defense: number;

  /**
   * The ability to hit and injure others.
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public accuracy: number;

  /**
   * The ability to avoid and evade attacks.
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public evasion: number;

  /**
   * The ability to have a favorable outcome.
   */
  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public luck: number;
}
