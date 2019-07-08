/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	let len = 0
	let count = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== ' ') {
			count++
		} else {
			if (count !== 0) len = count
			count = 0
		}
	}

	if (count !== 0 && count !== len) len = count
	
	return len
}
