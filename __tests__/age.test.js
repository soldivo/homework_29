const ageClassification = require("../age");

describe("function ageClassification", () => {
    test("Test 1: Age should return null", () => {
        expect(ageClassification(-1)).toBe(null);
    });

    test("Test 2: Age should return Дитинство", () => {
        expect(ageClassification(0)).toBe("Дитинство");
    });

    test("Test 3: Age should return Дитинство", () => {
        expect(ageClassification(1)).toBe("Дитинство");
    });

    test("Test 4: Age should return Дитинство", () => {
        expect(ageClassification(24)).toBe("Дитинство");
    });

    test("Test 5: Age should return Молодість", () => {
        expect(ageClassification(24.01)).toBe("Молодість");
    });

    test("Test 6: Age should return Молодість", () => {
        expect(ageClassification(44)).toBe("Молодість");
    });

    test("Test 7: Age should return Зрілість", () => {
        expect(ageClassification(44.01)).toBe("Зрілість");
    });

    test("Test 8: Age should return Зрілість", () => {
        expect(ageClassification(65)).toBe("Зрілість");
    });

    test("Test 9: Age should return Старість", () => {
        expect(ageClassification(65.01)).toBe("Старість");
    });

    test("Test 10: Age should return Старість", () => {
        expect(ageClassification(75)).toBe("Старість");
    });

    test("Test 11: Age should return Довголіття", () => {
        expect(ageClassification(75.01)).toBe("Довголіття");
    });

    test("Test 12: Age should return Довголіття", () => {
        expect(ageClassification(90)).toBe("Довголіття");
    });

    test("Test 13: Age should return Рекорд", () => {
        expect(ageClassification(90.01)).toBe("Рекорд");
    });

    test("Test 14: Age should return Рекорд", () => {
        expect(ageClassification(122)).toBe("Рекорд");
    });

    test("Test 15: Age should return null", () => {
        expect(ageClassification(122.01)).toBe(null);
    });

    test("Test 16: Age should return null", () => {
        expect(ageClassification(150)).toBe(null);
    });
});
