import { sum } from "./sum";

it("Calculate the sum of yesterday's weight and today's weight.", () => {
    expect(sum(72, 71)).toBe(143);
})

it.each`
    a | b | expected
    ${1} | ${2} | ${3}
    ${-1} | ${-2} | ${-3}
`("Adding a and b results in expected.", ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected);
});
