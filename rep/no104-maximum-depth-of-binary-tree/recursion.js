/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	let max = 0

	const fn = (node, n) => {
		if (!node) {
			max = max < n - 1 ? n - 1 : max

			return
		}

		fn(node.left, n + 1)
		fn(node.right, n + 1)
	}

	fn(root, 1)

	return max
}
