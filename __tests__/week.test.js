const weekFn = require("../week");

describe("function weekFn", () => {
    test("Test 1: Day should return Понеділок", () => {
        expect(weekFn(1)).toBe("Понеділок");
    });

    test("Test 2: Day should return Середа", () => {
        expect(weekFn(3)).toBe("Середа");
    });

    test("Test 3: Day should return Неділя", () => {
        expect(weekFn(7)).toBe("Неділя");
    });

    test("Test 4: Day should return null", () => {
        expect(weekFn(9)).toBe(null);
    });

    test("Test 5: Day should return null", () => {
        expect(weekFn(1.5)).toBe(null);
    });

    test("Test 6: Day should return null", () => {
        expect(weekFn("2")).toBe(null);
    });
});
