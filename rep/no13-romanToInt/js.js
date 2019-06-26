/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const romanMap = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
		'IV': 4,
		'IX': 9,
		'XL': 40,
		'XC': 90,
		'CD': 400,
		'CM': 900
	}
	let num = 0

	for (i = 0; i < s.length; i++) {
		if (romanMap[s.slice(i, i + 2)]) {
			num = num + romanMap[s.slice(i, i + 2)]
			i++
		} else {
			num = num + romanMap[s.slice(i, i + 1)]
		}
	}

	return num
}
