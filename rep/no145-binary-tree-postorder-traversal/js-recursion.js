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
var postorderTraversal = function(root) {
	if (!root) return []

	const output = []

	const fn = (curNode) => {
		if (curNode.left) fn(curNode.left)
		if (curNode.right) fn(curNode.right)

		output.push(curNode.val)

		return
	}

	fn(root)

	return output
}
