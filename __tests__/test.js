let algos = require("../sumAll.js");

test("returns the sum of all the numbers between and including the two numbers in the array", () => {
  expect(algos.sumAll([2, 5])).toBe(14)
})

  