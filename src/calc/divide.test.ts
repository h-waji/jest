import { divide, ZeroDivisorError } from "./divide";

it("Dividing by zero results in an error", () => {
    // expect(() => divide(10, 0)).toThrow();
    expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
