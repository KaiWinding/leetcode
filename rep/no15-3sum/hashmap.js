/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (nums.length < 3) return []

	const output = []

	for (let i = 0; i < nums.length; i++) {
		const temp = nums[i]

		fn(nums.slice(i + 1), 0 - temp)

		if (nums.includes(temp) > -1) i--

		while (nums.indexOf(temp) !== -1) {
			const index = nums.indexOf(temp)

			nums.splice(index, 1)
		}
	}

	function fn(arr, target) {
		const hasmap = new Map

		for (let i = 0; i < arr.length; i++) {
			if (hasmap.get(target - arr[i]) !== undefined && hasmap.get(target - arr[i]) !== arr[i]) {
				output.push([0 - target, target - arr[i], arr[i]])

				hasmap.set(target - arr[i], arr[i])
				hasmap.set(arr[[i]], target - arr[i])
			} else {
				if (hasmap.get(target - arr[i]) === undefined) hasmap.set(arr[i], false)
			}
		}
	}

	return output
}
