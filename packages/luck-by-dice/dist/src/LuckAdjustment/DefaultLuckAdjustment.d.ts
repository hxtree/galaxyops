import { AbstractLuckAdjustment } from './AbstractLuckAdjustment';
export declare class DefaultLuckAdjustment extends AbstractLuckAdjustment {
    get phi(): number;
    adjustment(rollPercent?: number): number;
}
