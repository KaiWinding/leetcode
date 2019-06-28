/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	let temp = -1

	if (nums.indexOf(target) > -1) {
		return nums.indexOf(target)
	} else {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] > target) {
				temp = i
				break
			}
		}
		return temp >= 0 ? temp : nums.length
	}
}
