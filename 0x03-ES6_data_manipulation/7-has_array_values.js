export default function hasValuesFromArray(set1, arr) {
  return arr.every((value) => set1.has(value));
}
