/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) return []

	const output  = [[root]]

	while (output[output.length - 1].length > 0) {
		const len = output.length
		output.push([])

		for (let i = 0; i < output[len - 1].length; i++) {
			if (output[len - 1][i].left) output[len].push(output[len - 1][i].left)
			if (output[len - 1][i].right) output[len].push(output[len - 1][i].right)
		}
	}

	output.pop()

	return output.map(level => level.map(item => item.val))
}
