import Something from "../Something";

describe("Something", () => {
    it("does something", () => {
        const testSomething: Something = new Something("hello");
        expect(true).toBeTruthy();
    });
});
