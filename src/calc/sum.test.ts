import { sum } from "./sum";

it("Calculate the sum of yesterday's weight and today's weight.", () => {
    expect(sum(72, 71)).toBe(143);
})
