import test from "node:test";
import assert from "node:assert/strict";
import { parseBooleanToken } from "../src/parseBooleanToken.js";

test("parseBooleanToken: returns true for valid truthy tokens (case-insensitive and trimmed)", () => {
  const truthyCases = [
    { input: "true", expected: true },
    { input: "yes", expected: true },
    { input: "on", expected: true },
    { input: "1", expected: true },
    { input: "  TRUE  ", expected: true },
    { input: "Yes", expected: true },
    { input: "\ton\n", expected: true },
    { input: "1", expected: true },
  ];

  for (const { input, expected } of truthyCases) {
    assert.equal(parseBooleanToken(input), expected, `Failed for input: ${JSON.stringify(input)}`);
  }
});

test("parseBooleanToken: returns false for valid falsy tokens (case-insensitive and trimmed)", () => {
  const falsyCases = [
    { input: "false", expected: false },
    { input: "no", expected: false },
    { input: "off", expected: false },
    { input: "0", expected: false },
    { input: " FALSE ", expected: false },
    { input: "No", expected: false },
    { input: "\toff\n", expected: false },
    { input: "0", expected: false },
  ];

  for (const { input, expected } of falsyCases) {
    assert.equal(parseBooleanToken(input), expected, `Failed for input: ${JSON.stringify(input)}`);
  }
});

test("parseBooleanToken: throws TypeError for non-string inputs", () => {
  const nonStringInputs = [
    42,
    0,
    1,
    true,
    false,
    null,
    undefined,
    {},
    [],
    Symbol("test"),
    () => {},
  ];

  for (const input of nonStringInputs) {
    assert.throws(
      () => parseBooleanToken(input),
      TypeError,
      `Expected TypeError for non-string input: ${String(input)}`
    );
  }
});

test("parseBooleanToken: throws RangeError for invalid string inputs", () => {
  const invalidStringInputs = [
    "",
    "   ",
    "maybe",
    "2",
    "truthy",
    "enable",
    "disabled",
    "00",
    "1.0",
    "true_value",
    "false_value",
    "yes!",
  ];

  for (const input of invalidStringInputs) {
    assert.throws(
      () => parseBooleanToken(input),
      RangeError,
      `Expected RangeError for invalid string input: ${JSON.stringify(input)}`
    );
  }
});
