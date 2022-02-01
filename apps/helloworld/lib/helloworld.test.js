"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
test('Check for Hello, World', () => {
    expect(index_1.default.message).toBe('Hello, World');
});
//# sourceMappingURL=helloworld.test.js.map