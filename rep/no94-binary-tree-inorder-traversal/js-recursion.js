/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	if (!root) return []

	const output = []

	const fn = (node) => {

		if (node.left) fn(node.left)

		output.push(node.val)

		if (node.right) fn(node.right)

		return
	}

	fn(root)

	return output
}
