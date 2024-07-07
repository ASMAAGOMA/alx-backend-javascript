export default function hasValuesFromArray(set, array) {
  for (const one of array) {
    if (!set.has(one)) {
      return false;
    }
  }
  return true;
}
