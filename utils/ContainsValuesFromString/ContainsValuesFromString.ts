export function containsValuesFromString(
  string: string,
  array: string[],
): boolean {
  for (let i = 0; i < array.length; i++) {
    if (string.includes(array[i])) {
      return true
    }
  }
  return false
}
