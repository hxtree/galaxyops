import { AbstractLuckAdjustment } from './AbstractLuckAdjustment';

export class FickleLuckAdjustment extends AbstractLuckAdjustment
{
    public adjustment(rollPercent: number = 0.5): number
    {
        if (rollPercent <=.1) {
            return -2;
        } else if (rollPercent <=.2) {
            return -1;
        } else if (rollPercent >=.8) {
            return 1;
        } else if (rollPercent >=.9) {
            return 2;
        }

        return 0;
    }
}