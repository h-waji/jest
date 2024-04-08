describe("Array related test", () => {
    it("You can add elements to an array.", () => {
        const arr = [];
        arr.push("element");
        expect(arr).toEqual(["element"]);
    })

    it("The length of the array is correct.", () => {
        const arr = ["element1", "element2"];
        expect(arr.length).toBe(2);
    })

    describe("Test related to array searching.", () => {
        it("You can search for elements in an array.", () => {
            const arr = ["element1", "element2"];
            expect(arr.indexOf("element2")).toBe(1);
        })
    })
})