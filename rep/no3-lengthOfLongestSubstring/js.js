/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let maxLen = 0
	let map = {}
	let len = 0

	for (let i = 0; i < s.length; i++, len = 0) {
		for (let j = i; j < s.length; j++) {
			if (!map[s[j]]) {
				map[s[j]] = true
				len++
			} else {
				map = {}
				break
			}
			if (len > maxLen) maxLen = len
		}
	}

	return maxLen
}
