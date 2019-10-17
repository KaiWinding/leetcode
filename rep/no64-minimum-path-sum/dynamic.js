
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length <= 0) return 0
  
  const height = grid.length, width = grid[0].length, map = []

  for (let i = 0; i < height; i++) map[i] = []

  for (let i = 0; i < height; i++)
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) {
        map[i][j] = grid[i][j]
      } else if (i === 0) {
        map[i][j] = grid[i][j] + map[i][j - 1]
      } else if (j === 0) {
        map[i][j] = grid[i][j] + map[i - 1][j]
      } else {
        const min = map[i -1][j] > map[i][j - 1] ? map[i][j - 1] : map[i - 1][j]

        map[i][j] = grid[i][j] + min
      }
    }

  return map[height - 1][width - 1]
}
