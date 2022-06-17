import { Calculator } from "../model/Calculator";

const calculator = new Calculator();

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("division 10 to 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("multiply", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
