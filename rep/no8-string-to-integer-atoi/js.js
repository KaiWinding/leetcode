/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	if (!str) return 0

	const newStr = str.trim()
	let output = ''

	if (isNumber(newStr[0])) {
		let i = 0

		while (i < newStr.length && isNumber(newStr[i])) {
			output = output + newStr[i]

			i++
		}
	} else if (newStr[0] === '-' || newStr[0] === '+') {
		let i = 1
		output = newStr[0]

		while (i < newStr.length && isNumber(newStr[i])) {
			output = output + newStr[i]

			i++
		}
	} else {
		return 0
	}

	const max = 2147483648
	const min = -2147483648
	const outputNumber = parseInt(output)

	if (!isNumber(outputNumber)) return 0

	if (outputNumber > max - 1) {
		return max - 1
	} else if (outputNumber < min) {
		return min
	} else return outputNumber
}

function isNumber(str) {
	return typeof Number(str) === 'number' && !isNaN(Number(str))
}
