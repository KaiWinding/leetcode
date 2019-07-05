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
var preorderTraversal = function(root) {
	if (!root) return []

	const output = []

	const fn = (curNode) => {
		output.push(curNode.val)

		if (curNode.left) fn(curNode.left)
		if (curNode.right) fn(curNode.right)

		return
	}

	fn(root)

	return output
}
