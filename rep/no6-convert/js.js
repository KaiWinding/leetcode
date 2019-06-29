/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) return s

  const arr = []
  let output = ''
  
  for (let i = 0; i < numRows; i++) arr[i] = []
  
  let row = 0, column = 0
  let isRow = false
  
  for (let i = 0; i < s.length; i++) {

      arr[column][row] = s[i]
 
      isRow = i % (numRows - 1) === 0 && i !== 0
          ? !isRow
          : isRow

      if (isRow) {
          row++
          column--
      } else {
          column++
      }
  }
  
  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] !== undefined) output = output + arr[i][j]
      }
  }
  
  return output
}
