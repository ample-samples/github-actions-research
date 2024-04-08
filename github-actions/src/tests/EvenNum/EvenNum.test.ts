import { evenNum } from "./EvenNum";

describe("should execute function", () => {
  it("should return true if number is even", () => {
    expect(evenNum(4)).toBe(true);
  });
  it("should return false is number is odd", () => {
    expect(evenNum(5)).toBe(false);
  });
});
