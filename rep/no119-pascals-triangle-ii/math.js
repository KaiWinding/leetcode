/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const getFactorial = (num) => {
    if (num === 0) return 1

    let result = 1

    for (let i = num; i > 0; i--) result = result * i

    return result
  }

  const getArrange = (n, m) => {
    return getFactorial(n) / getFactorial(n - m)
  }

  const getCombination = (n, m) => {
    return getArrange(n, m) / getFactorial(m)
  }

  const output = []

  for (let i = 0; i <= rowIndex; i++) output.push(getCombination(rowIndex, i))

  return output
}
