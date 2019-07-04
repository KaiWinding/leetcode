/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if (nums.length === 1) return nums[0]

	let max
	
	for (let i = 0, temp = 0; i < nums.length; i++) {
		temp = temp + nums[i] > 0 ? temp + nums[i] : 0

		if (temp > max || !max) max = temp
	}

	if (!max) max = Math.max.apply(null, nums)

	return max
}
