import test from "node:test";
import assert from "node:assert/strict";
import { sumInclusive } from "../src/range.js";

test("baseline: sums ascending integers", () => {
  assert.equal(sumInclusive(1, 5), 15);
  assert.equal(sumInclusive(-2, 2), 0);
});

test("baseline: rejects noninteger bounds", () => {
  assert.throws(() => sumInclusive(1.5, 4), TypeError);
  assert.throws(() => sumInclusive("1", 4), TypeError);
  assert.throws(() => sumInclusive(1, null), TypeError);
  assert.throws(() => sumInclusive(NaN, 4), TypeError);
});

test("reversed bounds: sums correctly when start > end", () => {
  assert.equal(sumInclusive(5, 3), 12);
  assert.equal(sumInclusive(2, -2), 0);
  assert.equal(sumInclusive(10, 0), 55);
});

test("negative ranges: handles negative bounds and single elements", () => {
  assert.equal(sumInclusive(-5, -3), -12);
  assert.equal(sumInclusive(-3, -5), -12);
  assert.equal(sumInclusive(0, 0), 0);
  assert.equal(sumInclusive(42, 42), 42);
  assert.equal(sumInclusive(-42, -42), -42);
});

test("rejects unsafe integer arguments", () => {
  const unsafeHigh = Number.MAX_SAFE_INTEGER + 1;
  const unsafeLow = Number.MIN_SAFE_INTEGER - 1;
  assert.throws(() => sumInclusive(unsafeHigh, 0), RangeError);
  assert.throws(() => sumInclusive(0, unsafeHigh), RangeError);
  assert.throws(() => sumInclusive(unsafeLow, 0), RangeError);
  assert.throws(() => sumInclusive(0, unsafeLow), RangeError);
});

test("overflow detection: throws RangeError when exact result exceeds safe integers", () => {
  // 1 to 200,000,000 sum is 20,000,000,100,000,000 > MAX_SAFE_INTEGER (~9e15)
  assert.throws(() => sumInclusive(1, 200_000_000), RangeError);
  assert.throws(() => sumInclusive(0, Number.MAX_SAFE_INTEGER), RangeError);
  assert.throws(() => sumInclusive(Number.MIN_SAFE_INTEGER, 0), RangeError);
});

test("performance: constant-time execution on large bounds that rule out linear looping", () => {
  // 200 billion span: would time out or hang if looped linearly
  assert.equal(sumInclusive(-100_000_000_000, 100_000_000_000), 0);
  assert.equal(sumInclusive(100_000_000_000, -100_000_000_000), 0);
  assert.equal(sumInclusive(-1_000_000, 1_000_000), 0);
});
