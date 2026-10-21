import test from "node:test";
import assert from "node:assert/strict";
import { sumInclusive } from "../src/range.js";

test("baseline: sums ascending integers", () => {
  assert.equal(sumInclusive(1, 5), 15);
  assert.equal(sumInclusive(-2, 2), 0);
});

test("baseline: rejects noninteger bounds", () => {
  assert.throws(() => sumInclusive(1.5, 4), TypeError);
});
