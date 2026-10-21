/**
 * Parses a boolean token string.
 *
 * @param {unknown} value - The token string to parse.
 * @returns {boolean} True if token is "true", "yes", "on", or "1"; false if token is "false", "no", "off", or "0".
 * @throws {TypeError} If value is not a string.
 * @throws {RangeError} If value is a string but not an accepted boolean token.
 */
export function parseBooleanToken(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  const normalized = value.trim().toLowerCase();

  switch (normalized) {
    case "true":
    case "yes":
    case "on":
    case "1":
      return true;
    case "false":
    case "no":
    case "off":
    case "0":
      return false;
    default:
      throw new RangeError(`Unsupported boolean token: ${JSON.stringify(value)}`);
  }
}
