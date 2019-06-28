
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let len = nums.length

	if (len === 1 || len === 0) return len
	
	let temp = nums[0]

	for (i = 1; i < len; i++) {
		if (temp === nums[i]) {
			nums.splice(i, 1)
			i--
			len--
		} else temp = nums[i]
	}

	return len
}
