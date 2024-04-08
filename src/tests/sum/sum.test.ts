import { sum } from "./sum";

describe("sum function", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds two negative numbers", () => {
    expect(sum(-5, -7)).toBe(-12);
  });

  it("adds a positive and a negative number", () => {
    expect(sum(8, -4)).toBe(4);
  });

  it("adds two decimal numbers", () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });

  it("adds zero to a number", () => {
    expect(sum(0, 10)).toBe(10);
    expect(sum(-5, 0)).toBe(-5);
  });
});
