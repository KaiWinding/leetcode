/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let num

	if (x >= 0) {
		num = Number(String(x).split('').reverse().join(''))
	} else {
		num = -Number(String(x).split('').slice(1).reverse().join(''))
	}

	if (num > Math.pow(2, 31) -1 || num < -Math.pow(2, 31)) {
		return 0
	} else {
		return num
	}
}
