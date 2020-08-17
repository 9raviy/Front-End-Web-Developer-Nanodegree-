import { inputData } from "./inputData";

describe("Test: the function 'inputData())'", () => {
    test('It should be defined', () => {
        expect(inputData).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof inputData).toBe("function");
    });
})