"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationCodec = void 0;
const Collection_1 = require("./Collection");
const Cup_1 = require("./Cup");
const Dice_1 = require("./Dice");
/**
 * Codec that encodes objects to notations and decodes notations to objects.
 */
class NotationCodec {
    constructor() {
        this._separator = ',';
        this._cup = '2';
    }
    get cup() {
        return this._cup;
    }
    /**
     * Encode from a cup to a string
     * @param cup - the cup to encode
     * @returns
     */
    encodeCup(cup) {
        let notation = '';
        let firstIteration = true;
        cup.forEach((collection) => {
            if (firstIteration) {
                firstIteration = false;
            }
            else {
                notation += this._separator;
            }
            notation += this.encodeCollection(collection);
        });
        return notation;
    }
    /**
     * Encode from a collection to a string
     * @param collection - the collection to encode
     * @returns
     */
    encodeCollection(collection) {
        let notation = '';
        const amount = collection.count();
        if (amount > 1) {
            notation += amount;
        }
        const { sides } = collection;
        if (sides === 100) {
            notation += 'd%';
        }
        else {
            notation += `d${sides}`;
        }
        const { modifier } = collection;
        if (modifier > 0) {
            notation += `+${Math.abs(modifier)}`;
        }
        else if (modifier < 0) {
            notation += `-${Math.abs(modifier)}`;
        }
        const { multiplier } = collection;
        if (multiplier > 1) {
            notation += `*${multiplier}`;
        }
        return notation;
    }
    /**
     * Encode from a dice to a string
     */
    encodeDice(dice) {
        let notation = '';
        if (dice.max === 100) {
            notation += 'd%';
        }
        else {
            notation += `d${dice.max}`;
        }
        return notation;
    }
    /**
     * Decodes a dice cup notation
     * @param notation - 1d6+2*8,1d10,2d%
     */
    decodeCup(notation) {
        const expressionParts = notation.toLowerCase().split(this._separator);
        const cup = new Cup_1.Cup();
        expressionParts.forEach((expressionPart) => {
            cup.push(this.decodeCollection(expressionPart));
        });
        return cup;
    }
    /**
     * Decodes a dice collection notation
     * @param notation - 1d6+2*8
     * @returns ICollection
     */
    decodeCollection(notation) {
        let amount = 1;
        let sides = 2;
        let multiplier = 1;
        let modifier = 0;
        let unsorted = notation.split('d');
        amount = unsorted[0] !== '' ? Number(unsorted[0]) : 1;
        unsorted = unsorted[1].split('*');
        if (!this._isEmpty(unsorted[1])) {
            multiplier = Number(unsorted[1]);
        }
        if (unsorted[0].includes('+') !== false) {
            unsorted = unsorted[0].split('+');
            modifier = unsorted[1] !== null ? Number(unsorted[1]) : 0;
        }
        else if (unsorted[0].includes('-') !== false) {
            unsorted = unsorted[0].split('-');
            modifier = unsorted[1] !== null ? 0 - Number(unsorted[1]) : 0;
        }
        if (unsorted[0] === '%') {
            sides = 100;
        }
        else {
            sides = Number(unsorted[0]);
        }
        return new Collection_1.Collection(amount, sides, modifier, multiplier);
    }
    decodeDice(notation) {
        if (notation.charAt(0).toLowerCase() !== 'd') {
            throw new Error('Invalid dice notation');
        }
        const number = Number(notation.substring(1));
        return new Dice_1.Dice(number);
    }
    /**
     * Determine whether string is empty or not
     * @param string - the string to check
     * @returns
     */
    _isEmpty(string) {
        return !string || string.length === 0;
    }
}
exports.NotationCodec = NotationCodec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90YXRpb25Db2RlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ob3RhdGlvbkNvZGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQUNyRCwrQkFBZ0M7QUFDaEMsaUNBQW1DO0FBWW5DOztHQUVHO0FBQ0gsTUFBYSxhQUFhO0lBQTFCO1FBQ1UsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixTQUFJLEdBQVcsR0FBRyxDQUFDO0lBK0k3QixDQUFDO0lBN0lDLElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxHQUFTO1FBQ3hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQXVCLEVBQUUsRUFBRTtZQUN0QyxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUM3QjtZQUVELFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUFDLFVBQXVCO1FBQzdDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsUUFBUSxJQUFJLE1BQU0sQ0FBQztTQUNwQjtRQUVELE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxLQUFLLEtBQUssR0FB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b3J0IHtDb2xsZWN0aW9uLCBJQ29sbGVjdGlvbn0gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCB7Q3VwLCBJQ3VwfSBmcm9tICcuL0N1cCc7XG5pbXBvcnQge0RpY2UsIElEaWNlfSBmcm9tICcuL0RpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RhdGlvbkNvZGVjIHtcbiAgZ2V0IGN1cCgpOiBzdHJpbmc7XG4gIGVuY29kZUN1cChjdXA6IElDdXApOiBzdHJpbmc7XG4gIGVuY29kZUNvbGxlY3Rpb24oY29sbGVjdGlvbjogSUNvbGxlY3Rpb24pOiBzdHJpbmc7XG4gIGVuY29kZURpY2UoZGljZTogSURpY2UpOiBzdHJpbmc7XG4gIGRlY29kZUN1cChub3RhdGlvbjogc3RyaW5nKTogSUN1cDtcbiAgZGVjb2RlQ29sbGVjdGlvbihub3RhdGlvbjogc3RyaW5nKTogSUNvbGxlY3Rpb247XG4gIGRlY29kZURpY2Uobm90YXRpb246IHN0cmluZyk6IElEaWNlO1xufVxuXG4vKipcbiAqIENvZGVjIHRoYXQgZW5jb2RlcyBvYmplY3RzIHRvIG5vdGF0aW9ucyBhbmQgZGVjb2RlcyBub3RhdGlvbnMgdG8gb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGF0aW9uQ29kZWMge1xuICBwcml2YXRlIF9zZXBhcmF0b3I6IHN0cmluZyA9ICcsJztcblxuICBwcml2YXRlIF9jdXA6IHN0cmluZyA9ICcyJztcblxuICBwdWJsaWMgZ2V0IGN1cCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXA7XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlIGZyb20gYSBjdXAgdG8gYSBzdHJpbmdcbiAgICogQHBhcmFtIGN1cCAtIHRoZSBjdXAgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgZW5jb2RlQ3VwKGN1cDogSUN1cCk6IHN0cmluZyB7XG4gICAgbGV0IG5vdGF0aW9uID0gJyc7XG5cbiAgICBsZXQgZmlyc3RJdGVyYXRpb24gPSB0cnVlO1xuICAgIGN1cC5mb3JFYWNoKChjb2xsZWN0aW9uOiBJQ29sbGVjdGlvbikgPT4ge1xuICAgICAgaWYgKGZpcnN0SXRlcmF0aW9uKSB7XG4gICAgICAgIGZpcnN0SXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RhdGlvbiArPSB0aGlzLl9zZXBhcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIG5vdGF0aW9uICs9IHRoaXMuZW5jb2RlQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub3RhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGUgZnJvbSBhIGNvbGxlY3Rpb24gdG8gYSBzdHJpbmdcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSB0aGUgY29sbGVjdGlvbiB0byBlbmNvZGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBlbmNvZGVDb2xsZWN0aW9uKGNvbGxlY3Rpb246IElDb2xsZWN0aW9uKTogc3RyaW5nIHtcbiAgICBsZXQgbm90YXRpb24gPSAnJztcbiAgICBjb25zdCBhbW91bnQgPSBjb2xsZWN0aW9uLmNvdW50KCk7XG4gICAgaWYgKGFtb3VudCA+IDEpIHtcbiAgICAgIG5vdGF0aW9uICs9IGFtb3VudDtcbiAgICB9XG5cbiAgICBjb25zdCB7c2lkZXN9ID0gY29sbGVjdGlvbjtcbiAgICBpZiAoc2lkZXMgPT09IDEwMCkge1xuICAgICAgbm90YXRpb24gKz0gJ2QlJztcbiAgICB9IGVsc2Uge1xuICAgICAgbm90YXRpb24gKz0gYGQke3NpZGVzfWA7XG4gICAgfVxuICAgIGNvbnN0IHttb2RpZmllcn0gPSBjb2xsZWN0aW9uO1xuICAgIGlmIChtb2RpZmllciA+IDApIHtcbiAgICAgIG5vdGF0aW9uICs9IGArJHtNYXRoLmFicyhtb2RpZmllcil9YDtcbiAgICB9IGVsc2UgaWYgKG1vZGlmaWVyIDwgMCkge1xuICAgICAgbm90YXRpb24gKz0gYC0ke01hdGguYWJzKG1vZGlmaWVyKX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHttdWx0aXBsaWVyfSA9IGNvbGxlY3Rpb247XG4gICAgaWYgKG11bHRpcGxpZXIgPiAxKSB7XG4gICAgICBub3RhdGlvbiArPSBgKiR7bXVsdGlwbGllcn1gO1xuICAgIH1cblxuICAgIHJldHVybiBub3RhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGUgZnJvbSBhIGRpY2UgdG8gYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBlbmNvZGVEaWNlKGRpY2U6IElEaWNlKTogc3RyaW5nIHtcbiAgICBsZXQgbm90YXRpb24gPSAnJztcbiAgICBpZiAoZGljZS5tYXggPT09IDEwMCkge1xuICAgICAgbm90YXRpb24gKz0gJ2QlJztcbiAgICB9IGVsc2Uge1xuICAgICAgbm90YXRpb24gKz0gYGQke2RpY2UubWF4fWA7XG4gICAgfVxuICAgIHJldHVybiBub3RhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGEgZGljZSBjdXAgbm90YXRpb25cbiAgICogQHBhcmFtIG5vdGF0aW9uIC0gMWQ2KzIqOCwxZDEwLDJkJVxuICAgKi9cbiAgcHVibGljIGRlY29kZUN1cChub3RhdGlvbjogc3RyaW5nKTogSUN1cCB7XG4gICAgY29uc3QgZXhwcmVzc2lvblBhcnRzID0gbm90YXRpb24udG9Mb3dlckNhc2UoKS5zcGxpdCh0aGlzLl9zZXBhcmF0b3IpO1xuICAgIGNvbnN0IGN1cCA9IG5ldyBDdXAoKTtcblxuICAgIGV4cHJlc3Npb25QYXJ0cy5mb3JFYWNoKChleHByZXNzaW9uUGFydDogc3RyaW5nKSA9PiB7XG4gICAgICBjdXAucHVzaCh0aGlzLmRlY29kZUNvbGxlY3Rpb24oZXhwcmVzc2lvblBhcnQpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXA7XG4gIH1cblxuICAvKipcbiAgICogRGVjb2RlcyBhIGRpY2UgY29sbGVjdGlvbiBub3RhdGlvblxuICAgKiBAcGFyYW0gbm90YXRpb24gLSAxZDYrMio4XG4gICAqIEByZXR1cm5zIElDb2xsZWN0aW9uXG4gICAqL1xuICBwdWJsaWMgZGVjb2RlQ29sbGVjdGlvbihub3RhdGlvbjogc3RyaW5nKTogSUNvbGxlY3Rpb24ge1xuICAgIGxldCBhbW91bnQgPSAxO1xuICAgIGxldCBzaWRlcyA9IDI7XG4gICAgbGV0IG11bHRpcGxpZXIgPSAxO1xuICAgIGxldCBtb2RpZmllciA9IDA7XG5cbiAgICBsZXQgdW5zb3J0ZWQgPSBub3RhdGlvbi5zcGxpdCgnZCcpO1xuXG4gICAgYW1vdW50ID0gdW5zb3J0ZWRbMF0gIT09ICcnID8gTnVtYmVyKHVuc29ydGVkWzBdKSA6IDE7XG5cbiAgICB1bnNvcnRlZCA9IHVuc29ydGVkWzFdLnNwbGl0KCcqJyk7XG5cbiAgICBpZiAoIXRoaXMuX2lzRW1wdHkodW5zb3J0ZWRbMV0pKSB7XG4gICAgICBtdWx0aXBsaWVyID0gTnVtYmVyKHVuc29ydGVkWzFdKTtcbiAgICB9XG5cbiAgICBpZiAodW5zb3J0ZWRbMF0uaW5jbHVkZXMoJysnKSAhPT0gZmFsc2UpIHtcbiAgICAgIHVuc29ydGVkID0gdW5zb3J0ZWRbMF0uc3BsaXQoJysnKTtcbiAgICAgIG1vZGlmaWVyID0gdW5zb3J0ZWRbMV0gIT09IG51bGwgPyBOdW1iZXIodW5zb3J0ZWRbMV0pIDogMDtcbiAgICB9IGVsc2UgaWYgKHVuc29ydGVkWzBdLmluY2x1ZGVzKCctJykgIT09IGZhbHNlKSB7XG4gICAgICB1bnNvcnRlZCA9IHVuc29ydGVkWzBdLnNwbGl0KCctJyk7XG4gICAgICBtb2RpZmllciA9IHVuc29ydGVkWzFdICE9PSBudWxsID8gMCAtIE51bWJlcih1bnNvcnRlZFsxXSkgOiAwO1xuICAgIH1cblxuICAgIGlmICh1bnNvcnRlZFswXSA9PT0gJyUnKSB7XG4gICAgICBzaWRlcyA9IDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZXMgPSBOdW1iZXIodW5zb3J0ZWRbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbihhbW91bnQsIHNpZGVzLCBtb2RpZmllciwgbXVsdGlwbGllcik7XG4gIH1cblxuICBwdWJsaWMgZGVjb2RlRGljZShub3RhdGlvbjogc3RyaW5nKTogSURpY2Uge1xuICAgIGlmIChub3RhdGlvbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSAhPT0gJ2QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGljZSBub3RhdGlvbicpO1xuICAgIH1cbiAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIobm90YXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICByZXR1cm4gbmV3IERpY2UobnVtYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBzdHJpbmcgaXMgZW1wdHkgb3Igbm90XG4gICAqIEBwYXJhbSBzdHJpbmcgLSB0aGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwcml2YXRlIF9pc0VtcHR5KHN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFzdHJpbmcgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuIl19