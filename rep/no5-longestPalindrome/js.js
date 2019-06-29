/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (!s) return ''

	let arr = []

	for (let i = 0; i < s.length; i++) arr[i] = []

	let max = ''
	const reverseStr = s.split('').reverse().join('')

	if (reverseStr === s) return s

	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < reverseStr.length; j++) {
			if (s[i] !== reverseStr[j]) {
				arr[i][j] = ''
			} else if (i - 1 >= 0 && j - 1 >= 0) {
				arr[i][j] = arr[i - 1][j - 1] + s[i]

				if (arr[i][j].length > max.length && s.length - j - 1 + arr[i][j].length - 1 === i) max = arr[i][j]
			} else {
				arr[i][j] = s[i]

				if (arr[i][j].length > max.length) {
					max = arr[i][j]
				}
			}
		}
	}

	return max
}
