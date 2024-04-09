it("hello mock", () => {
    const mockFn = jest.fn(() => "Hello mock!");
    expect(mockFn()).toBe("Hello mock!");
})

it("mock imple", () => {
    const mockFn = jest.fn();
    mockFn.mockImplementation(() => "Hello mock2!!");
    expect(mockFn()).toBe("Hello mock2!!");
})
