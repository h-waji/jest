it("Numerical test", () => {
    expect(33 + 33).toBe(66);
});

it("String test", () => {
    expect("Hello!").toBe("Hello!");
});

it("Boolean test", () => {
    expect(true).toBe(true);
});

it("Array test", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arr1).toEqual(arr2);
});

it("Object test", () => {
    const obj1 = {
        name: 'Taro',
        age: 99,
    };
    const obj2 = {
        name: 'Taro',
        age: 99,
    };
    expect(obj1).toEqual(obj2);
});

it("33 + 33 is not 0", () => {
    expect(33 + 33).not.toBe(0);
});
