/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if (!digits) return []

	const map = {
		'2': ['a', 'b', 'c'],
		'3': ['d', 'e', 'f'],
		'4': ['g', 'h', 'i'],
		'5': ['j', 'k', 'l'],
		'6': ['m', 'n', 'o'],
		'7': ['p', 'q', 'r', 's'],
		'8': ['t', 'u', 'v'],
		'9': ['w', 'x', 'y', 'z']
	},
		output = []

	const fn = (nums, str) => {
		for (let i = 0; i < map[nums[0]].length; i++) {
			if (nums.length === 1) {
				output.push(str + map[nums[0]][i])
			} else {
				fn(nums.slice(1), str + map[nums[0]][i])
			}
		}
	}

	fn(digits, '')

	return output
}