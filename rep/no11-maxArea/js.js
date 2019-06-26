/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let left = 0
	let right = height.length - 1
	let max = 0
	let tempArea

	do {
		tempArea = height[left] > height[right]
			? height[right] * (right - left)
			: height[left] * (right - left)

		if (tempArea > max) max = tempArea

		if (height[left] > height[right]) {
			right = right - 1
		} else {
			left = left + 1
		}
	} while (right !== left)

	return max
}
