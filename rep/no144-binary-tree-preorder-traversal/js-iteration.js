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
	const output = [], stack = []
	let curNode = root

	while (curNode || stack.length > 0) {
		while (curNode) {
			output.push(curNode.val)
			stack.push(curNode)
			curNode = curNode.left
		}

		curNode = stack.length > 0 ? stack.pop() : null

		curNode = curNode.right
	}

	return output
}
