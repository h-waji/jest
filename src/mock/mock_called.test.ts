it("The mock function is invoked", () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
})

it("The mock function is called twice", () => {
    const mockFn = jest.fn();
    mockFn();
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
})

it("Arguments are passed to the mock function", () => {
    const mockFn = jest.fn();
    mockFn("hoge");
    expect(mockFn).toHaveBeenCalledWith("hoge");
})
