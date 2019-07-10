/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	const map = {
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		9: 'IX',
		5: 'V',
		4: 'IV',
		1: 'I'
	}
	const arr = Object.keys(map).map(key => Number(key)).reverse()
	let str = '', temp = num

	while (temp > 0) {
		let i = 0;
		while (temp / arr[i] < 1) {
			i++
		}
		for (let j = 0; j < Math.floor(temp / arr[i]); j++) {
			str = str + map[String(arr[i])]
		}
		temp = temp % arr[i] 
	}

	return str
}
