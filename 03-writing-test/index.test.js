import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum function with positive numbers", () => {
  const actualVal = sum(1, 1);
  const expectedVal = 2;
  assert.equal(actualVal, expectedVal);
});

test("sum function with negative numbers", () => {
  const actualVal = sum(-2, -3);
  const expectedVal = -5;
  assert.equal(actualVal, expectedVal);
});

test("sum function with mixed positive and negative", () => {
  const actualVal = sum(-4, 6);
  const expectedVal = 2;
  assert.equal(actualVal, expectedVal);
});

test("sum function with zero", () => {
  const actualVal = sum(0, 7);
  const expectedVal = 7;
  assert.equal(actualVal, expectedVal);
});

test("sum function with decimal numbers", () => {
  const actualVal = sum(2.5, 3.2);
  const expectedVal = 5.7;
  assert.equal(actualVal, expectedVal);
});
