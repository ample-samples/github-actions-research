import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("should return indices of the two numbers such that they add up to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("should return indices of the two numbers such that they add up to the target (negative numbers)", () => {
    const nums = [-2, 7, 11, -15];
    const target = -17;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it("should return indices of the two numbers such that they add up to the target (with duplicates)", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it("should return empty array if no solution is found", () => {
    const nums = [3, 2, 4];
    const target = 8;
    expect(twoSum(nums, target)).toEqual([]);
  });
});
