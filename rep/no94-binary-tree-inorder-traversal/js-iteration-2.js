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
	const output = [], stack = []
	let curNode = root

	while (curNode || stack.length > 0) {
		while (curNode) {
			stack.push(curNode)
			curNode = curNode.left
		}

		curNode = stack.length > 0 ? stack.pop() : null
		if (curNode) output.push(curNode.val)

		curNode = curNode.right
	}

	return output
}
