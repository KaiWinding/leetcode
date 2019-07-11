/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (!needle) return 0
	if (!haystack) return -1

	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[0]) {
			if (needle.length <= haystack.length - i && needle.split('').every((chart, index) => {

				return i + index < haystack.length && chart === haystack[i + index]
			})) {
				return i
			}
		}
	}

	return -1
}
