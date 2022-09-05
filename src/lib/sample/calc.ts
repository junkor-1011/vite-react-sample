export const sum = (...args: number[]): number => {
  let result = 0;
  for (const x of args) {
    result += x;
  }
  return result;
}
