import { delay } from "./async";

it("Return a message after the specified delay time.", async () => {
    const result = await delay("async / await", 1000);
    expect(result).toBe("async / await");
});

it("An error occurs if the time is negative.", async () => {
    try {
        const result = await delay("async / await", -1);
    } catch(e: any) {
        expect(e.message).toBe("Please specify a time greater than or equal to 0");
    }
});
