import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slug.js";

test("baseline: lowercases and joins spaces", () => {
  assert.equal(slugify("  Hello   World  "), "hello-world");
});

test("baseline: rejects nonstrings", () => {
  assert.throws(() => slugify(42), TypeError);
});

test("table-driven slugify test cases", () => {
  const cases = [
    { input: "Café & Crème!", expected: "cafe-creme" },
    { input: "  A/B  ", expected: "a-b" },
    { input: "A---B", expected: "a-b" },
    { input: "hello_world", expected: "hello-world" },
    { input: "  ", expected: "" },
  ];

  for (const { input, expected } of cases) {
    assert.equal(slugify(input), expected, `Failed for input: "${input}"`);
  }
});
