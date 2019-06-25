/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let maxLen = 0
	const arr = []

	for (let i = 0; i < s.length; i++) {
		const temp = arr.indexOf(s[i])

		if (temp === -1) {
			arr.push(s[i])

			if (arr.length > maxLen) {
				maxLen = arr.length
			}
		} else {
			arr.splice(0, temp + 1)
			arr.push(s[i])
		}
	}

	return maxLen
}
