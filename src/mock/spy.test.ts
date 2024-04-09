import { Calculator } from "./spy";

it("The sum method is called", () => {
    const calculator = new Calculator();
    const sumSpy = jest.spyOn(calculator, "sum");
    const result = calculator.sum(33, 33);
    expect(result).toBe(66);
    expect(sumSpy).toHaveBeenCalledTimes(1);
    expect(sumSpy).toHaveBeenCalledWith(33, 33);

    sumSpy.mockRestore();
})
