/** Synthetic inclusive integer range sum — constant-time arithmetic with safe-integer validation. */
export function sumInclusive(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new TypeError("start and end must be integers");
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
    throw new RangeError("start and end must be safe integers");
  }

  const min = start < end ? BigInt(start) : BigInt(end);
  const max = start < end ? BigInt(end) : BigInt(start);

  const count = max - min + 1n;
  const sum = ((min + max) * count) / 2n;

  if (sum < BigInt(Number.MIN_SAFE_INTEGER) || sum > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new RangeError("Sum exceeds JavaScript safe-integer range");
  }

  return Number(sum);
}
