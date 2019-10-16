/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const output = []

  if (matrix.length === 0) return []

  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length -1

  while (true) {
    for (let i = left; i <= right; i++) {
      output.push(matrix[top][i])
    }
    top++

    if (top > bottom) break

    for (let i = top; i <= bottom; i++) {
      output.push(matrix[i][right])
    }
    right--

    if (right < left) break

    for (let i = right; i >= left; i--) {
      output.push(matrix[bottom][i])
    }
    bottom--

    if (bottom < top) break

    for (let i = bottom; i >= top; i--) {
      output.push(matrix[i][left])
    }
    left++

    if (left > right) break
  }

  return output
}
