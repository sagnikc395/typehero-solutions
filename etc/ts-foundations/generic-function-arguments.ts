const identity = <T>(a: T): T => a;

const mapArray = <T extends object | string | number, U>(
  arr: T[],
  fn: (item: T) => U
) => arr.map(fn);
