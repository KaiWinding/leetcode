/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let isCarried = true
	let i = digits.length - 1

	do {
		if (digits[i] + 1 > 9) {
			digits[i] = 0

			if (i === 0) digits.unshift(1)
		} else {
			digits[i] = digits[i] + 1
			isCarried = false
		}

		i--
	} while (isCarried && i >= 0)

	return digits
}
