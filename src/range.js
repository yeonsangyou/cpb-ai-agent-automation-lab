/** Synthetic inclusive integer range sum — intentionally minimal exercise B. */
export function sumInclusive(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new TypeError("start and end must be integers");
  }
  let total = 0;
  for (let n = start; n <= end; n += 1) {
    total += n;
  }
  return total;
}
