/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if (n === 1) return '1'

	let str = '11'

	for (let i = 2; i < n; i++) {
		let temp = str[0]
		let count = 1
		let newStr = ''

		for (let j = 1; j < str.length; j++) {
			if (str[j] !== temp) {
				newStr = newStr + count + temp
				count = 1
				temp = str[j]
			} else {
				count++
			}
		}

		str = newStr + count + temp
	}

	return str
}
