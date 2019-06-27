/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	if (x === 1) return 1
	if (x === 0) return 0

	let next = x
	let temp = x

	do {
		next = temp

		temp = next - ((next * next - x) / (2 * next))
	} while (Math.floor(temp) !== Math.floor(next))

	return Math.floor(next)
}
