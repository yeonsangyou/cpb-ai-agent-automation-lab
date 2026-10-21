import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slug.js";

test("baseline: lowercases and joins spaces", () => {
  assert.equal(slugify("  Hello   World  "), "hello-world");
});

test("baseline: rejects nonstrings", () => {
  assert.throws(() => slugify(42), TypeError);
});
