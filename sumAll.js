//SUM ALL
//sum all the numbers between and including the two numbers in the array
const sumAll = arr => {
  let total = 0
  for (var i = arr[0]; i <= arr[1]; i++) {
    total += i
  }
  return total
}
console.log(sumAll([3, 8]))

module.exports = {
  sumAll
};
