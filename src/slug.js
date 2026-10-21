/** Synthetic slug generator — intentionally minimal exercise A. */
export function slugify(label) {
  if (typeof label !== "string") {
    throw new TypeError("label must be a string");
  }
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
