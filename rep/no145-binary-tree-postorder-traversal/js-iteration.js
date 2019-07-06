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
	const output = [], stack = []

	let curNode = root, lastNode = null

	while (curNode || stack.length > 0) {
		while (curNode) {
			stack.push(curNode)
			curNode = curNode.left
		}

		if (stack.length > 0) {
			curNode = stack[stack.length - 1]

			if (!curNode.right || curNode.right === lastNode) {
				stack.pop()
				output.push(curNode.val)
				lastNode = curNode
				curNode = null
			} else {
				curNode = curNode.right
			}
		}
	}

	return output
}
