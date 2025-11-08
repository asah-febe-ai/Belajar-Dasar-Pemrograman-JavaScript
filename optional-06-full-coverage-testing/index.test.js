import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("sum function", () => {
  it("should handle positive, negative, and non-number inputs correctly", () => {
    const a = [1, -1, 1, "a", 1, "a", -1];
    const b = [1, 1, -1, 1, "b", "b", -1];

    const actualVal = a.map((el, index) => sum(el, b[index]));

    const expectedVal = [2, 0, 0, 0, 0, 0, 0];
    assert.deepStrictEqual(actualVal, expectedVal);
  });
});