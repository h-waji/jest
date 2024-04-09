it("Set return value for mock function", () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue("mock return value");
    expect(mockFn()).toBe("mock return value");
    expect(mockFn()).toBe("mock return value");
})

it("Set return value for mock function to be returned only once", () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce("mock return value");
    expect(mockFn()).toBe("mock return value");
    expect(mockFn()).toBe(undefined);
})

it("Set asynchronous return value for mock function", async () => {
    const mockFn = jest.fn();
    mockFn.mockResolvedValue("resolved value");
    const result = await mockFn();
    expect(result).toBe("resolved value");
})
