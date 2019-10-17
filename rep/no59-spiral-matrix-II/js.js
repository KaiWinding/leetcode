/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const output = []

  for (let i = 0; i < n; i++) output[i] = []

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    sum = 0

  while (true) {
    for (let i = left; i <= right; i++) {
      sum++
      output[top][i] = sum
    }
    top++

    if (top > bottom) break

    for (let i = top; i <= bottom; i++) {
      sum++
      output[i][right] = sum
    }
    right--

    if (right < left) break

    for (let i = right; i >= left; i--) {
      sum++
      output[bottom][i] = sum
    }
    bottom--

    if (bottom < top) break

    for (let i = bottom; i >= top; i--) {
      sum++
      output[i][left] = sum
    }
    left++

    if (left > right) break
  }

  return output
}
