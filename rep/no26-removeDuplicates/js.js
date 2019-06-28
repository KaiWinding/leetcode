/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let len = nums.length

	for (i = 0; i < len; i++) {
		for (j = i + 1; j < len; j++) {
			if (nums[i] === nums[j]) {
				len = len - 1
				i = i - 1
				nums.splice(j, 1)
			}
		}
	}

	return len
}
