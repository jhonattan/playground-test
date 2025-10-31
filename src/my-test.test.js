import { expect, test } from "vitest";

const actual = "stock";

test("stock is type of string", () => {
  expect(actual).toBeTypeOf("string");
});

function getFruitStock(type) {
  if (type === "pineapples") {
    throw new Error("Pineapples are not in stock");
  }
}

test("throws on pineapples", () => {
  // Test that the error message says "stock" somewhere: these are equivalent
  expect(() => getFruitStock("pineapples")).toThrowError(/stock/);
});

// Funciones a probar
function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

async function sumAsync(a, b) {
  return a + b;
}

function getApples() {
  return 3;
}

test("function returned something", () => {
  expect(getApples()).toBeDefined();
});

// Pruebas

// Prueba sum
test("sum suma 2 números", () => {
  const result = sum(3, 4);
  const expected = 8;
  expect(result).not.toBe(expected);
});

// Prueba substract
test("substract resta 2 números", () => {
  const result = substract(10, 6);
  const expected = 4;
  expect(result).toBe(expected);
});

// Prueba sumAsync
test("sum suma 2 números de manera asíncrona", async () => {
  const result = await sumAsync(3, 4);
  const expected = 7;
  expect(result).toBe(expected);
});
