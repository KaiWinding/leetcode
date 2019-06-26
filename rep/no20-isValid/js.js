/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const rightMap = {
		'(': 1,
		'{': 2,
		'[': 3
	}
	const leftMap = {
		')': 1,
		'}': 2,
		']': 3
	}
	const arr = []

	for (let i = 0; i < s.length; i++) {
		if (rightMap[s[i]]) {
			arr.push(rightMap[s[i]])
		} else if (leftMap[s[i]] && leftMap[s[i]] === arr[arr.length - 1]) {
			arr.pop()
		} else return false
	}

	if (arr.length > 0) {
		return false
	} else {
		return true
	}
}
