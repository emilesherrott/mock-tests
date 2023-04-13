const each = require("jest-each").default;

const { addsToTen, vowelCount } = require("./index")

describe("addsToTen", () => {

    // it("Is a function", () => {
    //     expect(addsToTen).toBeDefined();
    //     expect(addsToTen instanceof Function).toEqual(true);
    // })

    // it("Returns false when passed no values", () => {
    //     const result = addsToTen()
    //     expect(typeof result).toBe("boolean")
    //     expect(Boolean(result)).toBe(false);
    // })

    // each([
    //     [ true, 9, 1],
    //     [ false, 11, 1],
    //     [ false, 10, 5],
    // ]).test(`Returns %s when passed %s and %s`, (expected, inputA, inputB) => {
    //     expect(addsToTen(inputA, inputB)).toEqual(expected);
    // })

})

describe("vowelCount", () => {

    // it("Is a function", () => {
    //     expect(vowelCount).toBeDefined();
    //     expect(vowelCount instanceof Function).toEqual(true);
    // })

    // it("Returns a descriptive message (string) when passed an empty string", () => {
    //     const result = vowelCount("")
    //     expect(typeof result).toBe("string");
    //     expect(result).toBe("Empty string passed, no vowels present");
    // })

    each([
        [9, "Victoria Coach Station"],
        [6, "La Fosse Academy"],
        [7, "Arsenal Football Club"],
    ]).test(`Returns %s when passed %s`, (expected, input) => {
        expect(vowelCount(input)).toEqual(expected);
    })

})