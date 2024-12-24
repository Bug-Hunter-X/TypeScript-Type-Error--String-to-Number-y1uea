function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct usage

let value1 = 1;
let value2 = '2';

let result2 = isNumber(value2) ? add(value1, Number(value2)) : 0; // Using a type guard

let result3 = add(value1, parseInt(value2 as string, 10)); // Type assertion