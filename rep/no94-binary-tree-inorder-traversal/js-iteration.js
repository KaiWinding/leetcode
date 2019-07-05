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
	let curNode = root, isFromStack = false

	while (curNode) {
		if (curNode.left && !isFromStack) {
			stack.push(curNode)
			curNode = curNode.left
			isFromStack = false
		} else if (curNode.right) {
			output.push(curNode.val)
			curNode = curNode.right
			isFromStack = false
		} else {
			output.push(curNode.val)
			curNode = stack.length > 0 ? stack.pop() : null
			isFromStack = true
		}
	}

	return output
}
