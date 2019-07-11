/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let first = '', second = ''

	if (a.length > b.length) {
		first = a
		second = b
		
		for (let i = 0; i < a.length - b.length; i++) {
			second = '0' + second
		}
	} else {
		first = b
		second = a

		for (let i = 0; i < b.length - a.length; i++) {
			second = '0' + second
		}
	}

	let output = ''
	let carryBit = 0

	for (let i = first.length - 1; i >= 0; i--) {
		const temp = Number(first[i]) + Number(second[i]) + carryBit

		switch (temp) {
			case 0:
				output = '0' + output;
				break;
			case 1:
				output = '1' + output;
				carryBit = 0;
				break;
			case 2:
				output = '0' + output;
				carryBit = 1;
				break;
			case 3:
				output = '1' + output;
				carryBit = 1;
				break;
			default:
				carryBit = 0;
		}
	}

	if (carryBit === 1) {
		output = '1' + output
	}

	return output
}
