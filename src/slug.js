/** Synthetic slug generator — intentionally minimal exercise A. */
export function slugify(label) {
  if (typeof label !== "string") {
    throw new TypeError("label must be a string");
  }
  return label.trim().toLowerCase().replace(/\s+/g, "-");
}
